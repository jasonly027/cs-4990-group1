import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { FileUploadSettings } from "@/components/FileUploadSettings";

const initialFileState = {
  File: null,
  outputFormat: "",
  framesPerSecond: "",
  width: "",
  height: "",
};

export function FileUpload({ filesState }) {
  const [files, setFiles] = filesState;
  const [currentFile, setCurrentFile] = useState(initialFileState);
  const fileInputRef = useRef(null);

  const { toast } = useToast();

  const handleFileChange = () => {
    setCurrentFile({
      ...currentFile,
      File: fileInputRef.current.files[0],
      status: "Queued",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentFile === null || currentFile.File === null) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please select a file.",
      });
      return;
    }
    if (currentFile.outputFormat === "") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please select an output format.",
      });
      return;
    }

    setFiles([...files, currentFile]);
    setCurrentFile(initialFileState);
    fileInputRef.current.value = "";
    console.log(files);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full max-w items-center gap-1.5">
        <Label htmlFor="file-upload">Upload File</Label>
        <Input
          className="w-full"
          accept="video/*"
          type="file"
          ref={fileInputRef}
          onChange={() => handleFileChange()}
        />

        <FileUploadSettings currentFileState={[currentFile, setCurrentFile]} />
        <Button className="mx-auto w-[50%]" type="submit">
          Upload
        </Button>
      </div>
    </form>
  );
}
