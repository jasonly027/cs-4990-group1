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
    window.open(file.link, "_blank");
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

      <div className="grid gap-2 border border-gray-200 rounded-md p-4 h-15">
        {files.length === 0 && (
          <p className="items-center text-gray-500">No files in queue.</p>
        )}
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between gap-2">
              <Button
                className="w-8 h-8"
                size="icon"
                variant="ghost"
                onClick={() => removeFile(index)}
              >
                <Trash2 className="w-5 h-5" />
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
                    onClick={() => handleDownload(file)}
                  >
                    <Download className="w-5 h-5" />
                    <span className="sr-only">Download {file.File.name}</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
