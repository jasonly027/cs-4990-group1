import { Progress } from "@/components/ui/progress";
export function ConversionProgress({ currentFileState }) {
  const [currentFile] = currentFileState;

  if (currentFile === null || currentFile.File === null) {
    return null;
  }

  return (
    <>
      {currentFile === null || currentFile.File === null ? (
        <>
          <h2 className="text-lg font-semibold">Conversion Progress</h2>
          <div>
            {/* <p className="font-medium">File1.mp4</p> */}
            <Progress className="mt-2 h-2" value={currentFile?.progress} />
          </div>
        </>
      ) : null}
    </>
  );
}
