import styled from "@emotion/styled";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";

import { MobileLarge, MobileMiddle, primaryGrey } from "@/components/ui";

type Props = {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  removeFile: () => void;
  value: File | null;
};

export const FileInput = ({
  handleFileChange,
  buttonText,
  removeFile,
  value,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const onFIleClick = () => {
    fileRef.current?.click();
  };

  return (
    <Wrap>
      <HiddenFileInput
        onChange={handleFileChange}
        name="file"
        type="file"
        id="file"
        ref={fileRef}
      />
      <StyledInput onClick={onFIleClick}>
        <ImageWrap>
          <Image
            src="/img/svg/attach-icon.svg"
            alt="attach file"
            width={22.21}
            height={11}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </ImageWrap>
        <FileInputButton>{value ? value.name : buttonText}</FileInputButton>
      </StyledInput>
      {value && (
        <IconWrap onClick={removeFile}>
          <Image
            src="/img/svg/close-icon.svg"
            width={10}
            height={10}
            alt="remove File"
          />
        </IconWrap>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 1.5rem 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(37, 169, 224, 0.1);
  border-radius: 5px;

  ${MobileMiddle} {
    margin: 0;
    padding: 1rem 0 1rem;
  }
`;

const HiddenFileInput = styled.input`
  width: 0;
  height: 0;
  display: none;
  appearance: none;
`;

const FileInputButton = styled.div`
  min-width: 100px;
  max-width: 255px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 1.3rem;

  ${MobileLarge} {
    max-width: 180px;
  }
`;

const StyledInput = styled.div`
  padding: 0 2.5rem;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 24px;
  font-weight: normal;
  font-size: 12px;
  color: ${primaryGrey};
  font-family: inherit;
  border: none;
  background-color: transparent;
  margin-top: 0.25rem;
`;

const IconWrap = styled.div`
  cursor: pointer;
`;
const ImageWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
`;
