import styled from "@emotion/styled";
import { Testimonial as TestimonialType } from "@/models";
import Image from "next/image";

import { Markdown } from "@/components/Markdown";
import { Tablet, Typography, middleGray } from "@/components/ui";

import { getImageUrl } from "@/utils/images";

type Props = {
  testimonial: TestimonialType;
};

export const Testimonial = ({ testimonial }: Props) => (
  <Wrap>
    <TopWrap>
      {testimonial.image && (
        <IconWrap>
          <Image
            src={getImageUrl(testimonial.image)}
            width={50}
            height={50}
            alt="Perfsol Testimonial"
          />
        </IconWrap>
      )}
      <div>
        <Typography type="t1" as="h5">
          {testimonial.name}
        </Typography>
        <Typography type="b2" as="h6" color={middleGray}>
          {testimonial.title}
        </Typography>
      </div>
    </TopWrap>
    <div>
      <div itemScope itemType="https://shema.org/Review">
        <div
          itemProp="reviewRating"
          itemScope
          itemType="https://shema.org/Rating"
        >
          <meta itemProp="worstRating" content="1" />
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="bestRating" content="5" />
        </div>
      </div>
      <StarsWrap>
        {[1, 2, 3, 4, 5].map((number) => (
          <Image
            src="/img/svg/starSkin.svg"
            width={18}
            height={18}
            alt="Perfsol stars"
            key={number}
          />
        ))}
      </StarsWrap>
    </div>
    <Markdown>{testimonial.testimonial}</Markdown>
  </Wrap>
);

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const Wrap = styled.div`
  min-width: 240px;
  flex-basis: 25%;
  flex-grow: 1;
  padding: 1.25rem;
  box-shadow: 0px 6px 20px 10px rgba(200, 210, 226, 0.4);

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  ${Tablet} {
    flex-basis: 100%;
  }
`;

const StarsWrap = styled.div`
  margin-bottom: 1.5rem;
  width: min-content;
  display: flex;
  gap: 0.5rem;
`;

const TopWrap = styled.div`
  margin-bottom: 0.5rem;
  min-height: 74px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
