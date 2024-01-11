import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Media Conversion</h1>
      <div className="grid gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="file-upload">Upload File</Label>
          <Input className="border-2 border-dashed border-gray-300 rounded-md p-4" id="file-upload" type="file" />
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Supported Formats</h2>
          <p className="text-gray-500">MP3, WAV, MP4, AVI, JPEG, PNG</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="output-format">Output Format</Label>
          <Select id="output-format">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select output format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mp3">MP3</SelectItem>
              <SelectItem value="wav">WAV</SelectItem>
              <SelectItem value="mp4">MP4</SelectItem>
              <SelectItem value="avi">AVI</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Conversion Queue</h2>
          <div className="border border-gray-200 rounded-md p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">File1.mp4</p>
              <p className="text-gray-500">Queued</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-medium">File2.mp3</p>
              <p className="text-gray-500">Converting...</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-medium">File3.png</p>
              <p className="text-green-500">Completed</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Conversion Progress</h2>
          <div className="h-2 w-full bg-gray-200 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{
                width: "50%",
              }}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Download Links</h2>
          <a className="text-blue-500 underline" href="#">
            File1.mp3
          </a>
        </div>
        <Button className="mt-4">Clear All</Button>
      </div>
    </main>
  )
}