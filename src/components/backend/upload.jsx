import { uploadData, getUrl } from "aws-amplify/storage";
import { initialFileState } from "../FileUpload";
async function convertFile(fileState, filesState, fileIndex) {
  const [file, setFile] = fileState;
  const [files, setFiles] = filesState;
  try {
    setFile({
      ...file,
      status: "Converting",
    });
    const inKey = await uploadToS3(fileState);
    console.log("Upload complete, Key: ", inKey);

    const signedUrl = (await getSignedUrl(inKey)).url.href;
    console.log("Signed URL created: ", signedUrl);

    const convertedSignedUrl = await postToLambda(file, signedUrl);
    console.log("Converted URL created: ", convertedSignedUrl);

    const filesCopy = [...files];
    filesCopy[fileIndex] = {
      ...file,
      status: "Completed",
      progress: 100,
      link: convertedSignedUrl,
    };

    setFiles(filesCopy);
    setFile(initialFileState);
  } catch (error) {
    console.log(error);
  }
}

async function uploadToS3(fileState) {
  const [file, setFile] = fileState;
  const inKey = "in/" + Date.now() + "_" + file.File.name;

  const response = await uploadData({
    key: inKey,
    data: file.File,
    options: {
      onProgress: ({ transferredBytes, totalBytes }) => {
        if (totalBytes) {
          setFile({
            ...file,
            progress: Math.round((transferredBytes / totalBytes) * 100),
          });
        }
      },
    },
  }).result;

  return response.key;
}

async function getSignedUrl(in_key) {
  return await getUrl({
    key: in_key,
    options: {
      expiresIn: 3600,
    },
  });
}

async function postToLambda(file, signedUrl) {
  const url =
    "https://mrslu4s2s2asuo4in7lp54rgou0pyqnx.lambda-url.ca-central-1.on.aws/";
  const data = {
    file: signedUrl,
    container: file.outputFormat,
    fps: file.framesPerSecond,
    width: file.width,
    height: file.height,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error sending POST request:", error);
  }
}

export { convertFile };
