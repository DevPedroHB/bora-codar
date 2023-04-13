import { filesize } from "filesize";
import { ArrowCounterClockwise, File, X } from "phosphor-react";
import {
  UploadFileComponent,
  UploadFileIcon,
  UploadFileInfo,
  UploadFileInfoWrapper,
  UploadFileProgressIndicator,
  UploadFileProgressRoot,
  UploadFileProgressWrapper,
} from "./styles";

export type enumStatus = "uploading" | "success" | "error";

export interface IUploadedFile {
  id: number;
  name: string;
  size: number;
  progress: number;
  status: enumStatus;
}

interface IUploadFile {
  file: IUploadedFile;
}

export function UploadFile({ file }: IUploadFile) {
  return (
    <UploadFileComponent variant={file.status}>
      <UploadFileIcon>
        <File size={24} weight="fill" />
      </UploadFileIcon>
      <UploadFileInfoWrapper>
        <UploadFileInfo>
          <strong title={file.name}>{file.name}</strong>
          {file.status === "uploading" ? (
            <span>
              {filesize(
                Math.round((file.progress / 100) * file.size)
              ).toString()}{" "}
              / {filesize(file.size).toString()}
            </span>
          ) : (
            <span>{filesize(8792342).toString()}</span>
          )}
        </UploadFileInfo>
        <UploadFileProgressWrapper>
          <UploadFileProgressRoot value={file.progress}>
            <UploadFileProgressIndicator
              css={{ transform: `translateX(-${100 - file.progress}%)` }}
            />
          </UploadFileProgressRoot>
          <span>{file.status === "error" ? "Erro" : `${file.progress}%`}</span>
        </UploadFileProgressWrapper>
      </UploadFileInfoWrapper>
      {file.status === "uploading" && <X size={16} color="#794FED" />}
      {file.status === "error" && (
        <ArrowCounterClockwise size={16} color="#E36363" />
      )}
    </UploadFileComponent>
  );
}
