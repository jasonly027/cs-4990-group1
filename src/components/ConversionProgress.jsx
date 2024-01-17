import { Progress } from "@/components/ui/progress";
export function ConversionProgress({ currentFileState }) {
  const [currentFile] = currentFileState;

  if (currentFile.File === null) {
    return null;
  }
  return (
    <>
      <h2 className="text-lg font-semibold">Conversion Progress</h2>
      <div>
        <p className="font-medium">{currentFile.File.name}</p>
        <Progress className="mt-2 h-2" value={currentFile?.progress} />
      </div>
    </>
  );
}
