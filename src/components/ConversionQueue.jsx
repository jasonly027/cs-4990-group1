import { Button } from "@/components/ui/Button";
import { Download, Trash2 } from "lucide-react";

export function ConversionQueue({ filesState }) {
  const [files, setFiles] = filesState;

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };
  const clearAllFiles = () => {
    setFiles([]);
  };

  return (
    <div className="grid gap-2">
      <h2 className="text-lg font-semibold">Conversion Queue</h2>
      <div className="grid gap-2 border border-gray-200 rounded-md p-4">
        {/* Uploaded File Queue */}
        <>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-5"
            >
              <div className="flex items-center justify-between gap-2">
                <Button
                  className="w-8 h-8"
                  size="icon"
                  variant="ghost"
                  onClick={() => removeFile(index)}
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="sr-only">Remove {file.name}</span>
                </Button>
                <p key={index} className="font-medium">
                  {file.name}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* File Status */}
                <p className="text-green-500">Completed</p>
                <Button
                  className="w-8 h-8"
                  size="icon"
                  variant="ghost"
                  onClick={() => console.log("Download " + file.name)}
                >
                  <Download className="w-5 h-5" />
                  <span className="sr-only">Download {file.name}</span>
                </Button>
              </div>
            </div>
          ))}
        </>
        {/* Example File States */}
        <div className="flex items-center justify-between">
          <p className="font-medium">File3.png</p>
          <div className="flex items-start gap-2">
            <p className="text-green-500">Completed</p>
            <Download />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">File2.mp3</p>
          <p className="text-gray-500">Converting...</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium">File1.mp4</p>
          <p className="text-gray-500">Queued</p>
        </div>
      </div>

      <Button className="mt-4" onClick={clearAllFiles}>
        Clear All
      </Button>
    </div>
  );
}
