import styled from "@emotion/styled";
import { YoutubeVideo as YoutubeVideoType } from "@/models";

import {
  DesktopSmall,
  MobileLarge,
  Tablet,
  TabletMiddle,
} from "@/components/ui";

export const YoutubeVideo = ({
  video: { src, title },
}: {
  video: YoutubeVideoType;
}) => (
  <Wrap>
    <iframe
      width="100%"
      height="100%"
      src={src}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={title}
    />
  </Wrap>
);

const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 620px;
  border-radius: 20px;

  ${DesktopSmall} {
    height: 500px;
  }

  ${TabletMiddle} {
    height: 450px;
  }

  ${Tablet} {
    height: 350px;
  }

  ${MobileLarge} {
    height: 150px;
  }

  & iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
