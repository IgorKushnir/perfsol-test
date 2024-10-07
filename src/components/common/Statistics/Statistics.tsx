import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";

import { Typography, primaryBlue } from "@/components/ui";

export const Statistics = () => {
  const statistics = [
    {
      number: "2018",
      title: "founded",
    },
    {
      number: "40",
      title: "members",
    },
    {
      number: "50",
      title: "projects",
    },
  ];
  const { t } = useTranslation("about-us");
  return (
    <List>
      {statistics.map(({ number, title }, key) => (
        <Item key={key}>
          <Typography type="h1" color={primaryBlue}>
            {number}
          </Typography>
          <Typography type="b2">{t(`page.statistics.${title}`)}</Typography>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
