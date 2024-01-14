import json
import os
import subprocess
import boto3
from urllib.parse import urlparse

def handler(event, context):
    INPUT_LINK = event['yoshi']
    FILE_NAME_DOT_EXT = urlparse(INPUT_LINK).path[4:]
    FILE_NAME = ''.join(FILE_NAME_DOT_EXT.split('.')[:-1])

    builder = (CommandBuilder(INPUT_LINK)
        .setFps(25)
        .setContainer('avi')
        .setDimensions(100,200))
    EXT = 'avi'

    process = subprocess.run(builder.build(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Upload converted file to S3
    S3 = boto3.client('s3')
    DEST_BUCKET = os.environ['STORAGE_VIDEOSTORAGE_BUCKETNAME']
    OUT_KEY = f'out/converted_{FILE_NAME}.{EXT}'
    response = S3.put_object(Body=process.stdout, Bucket=DEST_BUCKET, Key=OUT_KEY)
    
    # Check if upload was successful
    if 'ETag' not in response:
        return {
            'statusCode': 500,
            'body': 'Failed to create link to converted file'
        }
        
    # Generate and return signed url to converted file
    SIGNED_URL_TIMEOUT = 3600
    SIGNED_OUT_URL = S3.generate_presigned_url('get_object',
        Params={'Bucket': DEST_BUCKET, 'Key': OUT_KEY},
        ExpiresIn=SIGNED_URL_TIMEOUT)

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': SIGNED_OUT_URL
    }

class CommandBuilder:
    def __init__(self, input_link):
        self.command = []
        self.command.extend(['/opt/ffmpegLib/ffmpeg', '-i', input_link])
        
    def build(self):
        self.command.append('-')
        return self.command
    
    def setContainer(self, container_type):
        self.command.extend(['-f', container_type])
        return self

    def setDimensions(self, width, height):
        self.command.extend(['-vf', f'scale={width}:{height}'])
        return self

    def setFps(self, fps):
        self.command.extend(['-r', str(fps)])
        return self

    def toString(self):
        ''.join(self.command)