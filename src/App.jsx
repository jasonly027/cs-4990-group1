import { ConversionProgress } from "./components/ConversionProgress";
import { ConversionQueue } from "./components/ConversionQueue";
import { FileUpload } from "./components/FileUpload";
import { useState } from "react";
import { OutputSelect } from "./components/outputSelect";

export default function App() {
  const filesState = useState([]);

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Media Conversion</h1>
      <div className="grid gap-4">
        <FileUpload filesState={filesState} />
        <div className="grid gap-2">
          <h2 className="text-lg font-semibold">Supported Formats</h2>
          <p className="text-gray-500"></p>
        </div>
        <OutputSelect />
        <ConversionProgress />
        <ConversionQueue filesState={filesState} />
      </div>
    </main>
  );
}
