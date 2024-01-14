import { useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FileUpload({ filesState }) {
  const [files, setFiles] = filesState;
  const fileInputRef = useRef(null);

  const uploadFile = () => {
    setFiles([...files, ...fileInputRef.current.files]);
    fileInputRef.current.value = "";
  };

  return (
    <div className="grid w-full max-w items-center gap-1.5">
      <Label htmlFor="file-upload">Upload File</Label>
      <Input
        className="w-full"
        accept="video/*"
        type="file"
        multiple
        ref={fileInputRef}
      />
      <Button className="mx-auto w-[50%]" onClick={uploadFile}>
        Upload
      </Button>
    </div>
  );
}
