import styled from "@emotion/styled";
import { CaseStudyItem } from "@/models";
import { useTranslation } from "next-i18next";

import { ContactUsCenter, Container, ScreenSection } from "@/components/ui";

import { toCaseStudies } from "@/utils/routes";

import PortfolioGridItem from "./PortfolioGridItem";
import { PortfolioIntro } from "./PortfolioIntro";

export type Props = {
  cases: CaseStudyItem[];
  title: string;
  description?: string;
};

export function Portfolio({ cases, title, description }: Props) {
  const { t } = useTranslation();
  if (!cases) {
    return null;
  }
  return (
    <ScreenSection data-target="section-item" id="case-studies">
      <Container>
        <Grid>
          <PortfolioIntro title={title} description={description} />
          <List>
            {cases.map((project) => (
              <PortfolioGridItem key={project.id} project={project} />
            ))}
          </List>
        </Grid>
      </Container>
      <ContactUsCenter href={toCaseStudies()}>
        {t("cta.seeAllProjects")}
      </ContactUsCenter>
    </ScreenSection>
  );
}

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
