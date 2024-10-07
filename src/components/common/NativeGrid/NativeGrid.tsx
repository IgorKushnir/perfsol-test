import styled from "@emotion/styled";
import { TechnologyItem } from "@/models";

import { Markdown } from "@/components/Markdown";
import {
  GridElement,
  GridTheme,
  NativeGridItem,
} from "@/components/common/NativeGrid/NativeGridItem";
import { Typography } from "@/components/ui";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import { ToRoute } from "@/utils/routes";

type Props = {
  elements: GridElement[];
  title: string;
  description: string;
  gridTheme: GridTheme;
  toRoute?: ToRoute;
};

const calculateHideSeparator = (
  index: number,
  array: TechnologyItem[],
  innerWindowWidth: number
) => {
  const divider = array.length % 2;
  if (divider && index === array.length - 1) {
    return true;
  }
  if (!divider && innerWindowWidth > 1370 && index >= array.length - 2) {
    return true;
  }
  if (!divider && innerWindowWidth <= 1370 && index === array.length - 1) {
    return true;
  }
  return false;
};

export const NativeGrid = ({
  elements,
  title,
  description,
  toRoute,
  gridTheme,
}: Props) => {
  const { width: innerWindowWidth } = useWindowDimensions();

  return (
    <>
      <Info>
        <Typography type="h2" as="h3">
          {title}
        </Typography>
        <Markdown>{description}</Markdown>
      </Info>
      <List>
        {elements.map((element, index, array) => (
          <NativeGridItem
            key={element.id}
            gridTheme={gridTheme}
            element={element}
            toRoute={toRoute}
            hideSeparator={calculateHideSeparator(
              index,
              array,
              innerWindowWidth
            )}
          />
        ))}
      </List>
    </>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 30px;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 50px;
  justify-content: space-between;

  @media (max-width: 600px) {
    column-gap: 35px;
  }

  @media (max-width: 500px) {
    column-gap: 10px;
    display: flex;
    flex-direction: column;
  }
`;
