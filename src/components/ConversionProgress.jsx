import { Progress } from "@/components/ui/progress";
export function ConversionProgress() {
  return (
    <>
      <h2 className="text-lg font-semibold">Conversion Progress</h2>
      <div>
        <p className="font-medium">File1.mp4</p>
        <Progress className="mt-2 h-2" value={50} />
      </div>
    </>
  );
}
