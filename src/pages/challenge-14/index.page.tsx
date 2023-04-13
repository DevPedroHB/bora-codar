import { NextSeo } from "next-seo";
import { useState } from "react";
import { UploadDragFile } from "./components/UploadDragFile";
import { IUploadedFile, UploadFile, enumStatus } from "./components/UploadFile";
import { Challenge14Container, UploadFiles } from "./styles";

export default function Challenge14() {
  const [uploadedFiles, setUploadedFiles] = useState<IUploadedFile[]>([]);

  function handleUploadFile(files: FileList) {
    setUploadedFiles([]);

    const newUploadedFiles = Array.from(files).map((file, index) => ({
      id: index,
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading" as enumStatus,
    }));

    setUploadedFiles((prevUploadedFiles) => [
      ...prevUploadedFiles,
      ...newUploadedFiles,
    ]);

    Array.from(files).forEach((file, index) => {
      const chunkSize = 1024 * 1024; // 1MB
      const fileSize = file.size;
      const chunks = Math.ceil(fileSize / chunkSize);
      const chunkProgress = 100 / chunks;
      let currentChunk = 0;

      const interval = setInterval(() => {
        if (currentChunk >= chunks) {
          clearInterval(interval);

          setUploadedFiles((prevUploadedFiles) => {
            const updatedUploadedFiles = prevUploadedFiles.map(
              (uploadedFile, i) => {
                if (i === index) {
                  return {
                    ...uploadedFile,
                    progress: 100,
                    status: "success" as enumStatus,
                  };
                }

                return uploadedFile;
              }
            );

            return updatedUploadedFiles;
          });

          if (index === files.length - 1) {
            setTimeout(() => {
              setUploadedFiles((prevUploadedFiles) => {
                const updatedUploadedFiles = prevUploadedFiles.map(
                  (uploadedFile, i) => {
                    if (i === index) {
                      return {
                        ...uploadedFile,
                        status: "error" as enumStatus,
                      };
                    }

                    return uploadedFile;
                  }
                );

                return updatedUploadedFiles;
              });
            }, 500);
          }

          return;
        }

        setTimeout(() => {
          currentChunk++;

          setUploadedFiles((prevUploadedFiles) => {
            const updatedUploadedFiles = prevUploadedFiles.map(
              (uploadedFile, i) => {
                if (i === index) {
                  return {
                    ...uploadedFile,
                    progress: Math.round(
                      (currentChunk * chunkProgress * 100) / 100
                    ),
                  };
                }

                return uploadedFile;
              }
            );

            return updatedUploadedFiles;
          });
        }, 100);
      }, 200);
    });
  }

  return (
    <>
      <NextSeo
        title="Desafio 14 | Componente de Upload"
        description="Este projeto é um componente de upload que permite aos usuários selecionar e fazer upload de arquivos de forma simples e intuitiva."
      />
      <Challenge14Container>
        <UploadDragFile handleUploadFile={handleUploadFile} />
        <UploadFiles>
          {uploadedFiles.map((uploadedFile) => (
            <UploadFile key={uploadedFile.id} file={uploadedFile} />
          ))}
        </UploadFiles>
      </Challenge14Container>
    </>
  );
}
