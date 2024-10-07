import styled from "@emotion/styled";
import { useIntersectionObserver } from "react-intersection-observer-hook";

type Props = {
  name: string;
  preload?: string;
  bottomShift?: string;
};
export const Video = (props: Props) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible: boolean = (entry && entry.isIntersecting) || false;
  const { name, preload, bottomShift } = props;
  return (
    <VideoItem
      ref={ref}
      autoPlay
      loop
      muted
      preload={preload}
      bottomShift={bottomShift || ""}
    >
      {isVisible && (
        <>
          <source src={`/video/${name}.mp4`} type="video/mp4" />
          <source src={`/video/${name}.mp4`} type="video/ogg" />
        </>
      )}
    </VideoItem>
  );
};

const VideoItem = styled.video<{ bottomShift: string }>`
  position: absolute;
  bottom: ${({ bottomShift }) => (bottomShift ? bottomShift : 0)};
  width: 100%;
  display: block;
  z-index: 10;
`;
