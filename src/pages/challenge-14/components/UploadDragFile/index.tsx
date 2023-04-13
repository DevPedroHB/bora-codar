import { CloudArrowUp } from "phosphor-react";
import { ChangeEvent, DragEvent, useState } from "react";
import { UploadDragFileComponent } from "./styles";

interface IUploadDragFile {
  handleUploadFile: (files: FileList) => void;
}

export function UploadDragFile({ handleUploadFile }: IUploadDragFile) {
  const [isDragover, setIsDragover] = useState(false);

  function handleDrop(e: DragEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = e.dataTransfer.files;

    handleUploadFile(files);
  }

  function handleSelectedFiles(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = e.target.files;

    if (!files) {
      return;
    }

    handleUploadFile(files);
  }

  return (
    <UploadDragFileComponent isDragover={isDragover}>
      <CloudArrowUp size={48} color="#7C3AED" />
      <h3>Importe seus arquivos</h3>
      <p>Arraste ou clique para fazer upload</p>
      <input
        type="file"
        onDragOver={() => setIsDragover(true)}
        onDragLeave={() => setIsDragover(false)}
        onDrop={handleDrop}
        onChange={handleSelectedFiles}
        multiple
      />
    </UploadDragFileComponent>
  );
}
