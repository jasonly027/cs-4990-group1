import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

export function FileUploadSettings({ currentFileState }) {
  const [currentFile, setCurrentFile] = currentFileState;

  const handleChange = (e) => {
    setCurrentFile({
      ...currentFile,
      [e.target.name]: e.target.value,
    });
  };

  const handleOutputChange = (value) => {
    setCurrentFile({
      ...currentFile,
      outputFormat: value,
    });
  };

  return (
    <>
      <h2 className="text-lg font-semibold">Settings</h2>
      <OutputFormat
        currentFile={currentFile}
        handleOutputChange={handleOutputChange}
      />
      <div>
        <Label className="text-sm font-medium" htmlFor="framesPerSecond">
          Frames Per Second
        </Label>
        <div className="mt-1">
          <Input
            id="framesPerSecond"
            name="framesPerSecond"
            placeholder="Enter Frames Per Second"
            type="number"
            value={currentFile.framesPerSecond}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="width">Pixel Size</Label>
        <div className="flex items-center gap-2">
          <Label className="text-sm" htmlFor="width">
            Width
          </Label>
          <Input
            id="width"
            name="width"
            placeholder="Enter width in pixels"
            type="number"
            value={currentFile.width}
            onChange={handleChange}
          />
          <Label className="text-sm" htmlFor="height">
            Height
          </Label>
          <Input
            id="height"
            name="height"
            placeholder="Enter height in pixels"
            type="number"
            value={currentFile.height}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

function OutputFormat({ currentFile, handleOutputChange }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="output-format">Output Format</Label>
      <Select
        id="output-format"
        value={currentFile.outputFormat}
        onValueChange={handleOutputChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select output format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="avi">AVI</SelectItem>
          <SelectItem value="flv">FLV</SelectItem>
          {/* <SelectItem value="jpeg">JPEG</SelectItem> */}
          <SelectItem value="mkv">MKV</SelectItem>
          <SelectItem value="mov">MOV</SelectItem>
          <SelectItem value="mpeg">MPEG</SelectItem>
          <SelectItem value="mp3">MP3</SelectItem>
          <SelectItem value="mp4">MP4</SelectItem>
          <SelectItem value="ogg">OGG</SelectItem>
          {/* <SelectItem value="png">PNG</SelectItem> */}
          <SelectItem value="wav">WAV</SelectItem>
          <SelectItem value="webm">WEBM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
