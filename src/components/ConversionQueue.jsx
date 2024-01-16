import { Button } from "@/components/ui/button";
import { Download, Trash2 } from "lucide-react";

const statusStyling = {
  Queued: "text-gray-500",
  Converting: "text-gray-500",
  Completed: "text-green-500",
};

export function ConversionQueue({ filesState }) {
  const [files, setFiles] = filesState;

  const removeFile = (indexToRemove) => {
    console.log(indexToRemove);
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };
  const clearAllFiles = () => {
    setFiles([]);
  };
  const handleDownload = (file) => {
    console.log("Download " + file.File.name);
  };
  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Conversion Queue</h2>
        <Button
          className="text-sm"
          size="sm"
          variant="destructive"
          onClick={clearAllFiles}
        >
          Clear All
        </Button>
      </div>

      <div className="grid gap-2 border border-gray-200 rounded-md p-4">
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
                  {/* <span className="sr-only">Remove {file.File.name}</span> */}
                </Button>
                <p key={index} className="font-medium">
                  {file.File.name}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p className={statusStyling[file.status]}>{file.status}</p>
                {file.status === "Completed" && (
                  <>
                    <Button
                      className="w-8 h-8"
                      size="icon"
                      variant="ghost"
                      onClick={handleDownload}
                    >
                      <Download className="w-5 h-5" />
                      <span className="sr-only">Download {file.File.name}</span>
                    </Button>
                  </>
                )}
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
    </div>
  );
}
