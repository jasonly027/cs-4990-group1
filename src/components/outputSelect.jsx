import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

export function OutputSelect() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="output-format">Output Format</Label>
      <Select id="output-format">
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
