import { ConversionProgress } from "./components/ConversionProgress";
import { ConversionQueue } from "./components/ConversionQueue";
import { FileUpload } from "./components/FileUpload";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { initialFileState } from '@/components/FileUpload'

export default function App() {
  const currentFileState = useState(initialFileState);
  const filesState = useState([]);
  /*
  filesState array of objects with the following properties:
    File: File object
    status: "queued" | "converting" | "completed"
  */

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Media Conversion</h1>
      <div className="grid gap-4">
        <FileUpload currentFileState={currentFileState} filesState={filesState} />
        <ConversionProgress currentFileState={currentFileState} />
        <ConversionQueue filesState={filesState} />
        <Toaster />
      </div>
    </main>
  );
}
