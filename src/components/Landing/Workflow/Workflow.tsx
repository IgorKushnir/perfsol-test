import styled from "@emotion/styled";
import { WorkflowSection } from "@/models";

import { WorkflowList } from "@/components/Landing/Workflow/WorkflowList";
import {
  Container,
  DesktopSmall,
  ScreenSection,
  Tablet,
  Typography,
  primaryYellow,
} from "@/components/ui";

export type Props = { flow: WorkflowSection };

export const Workflow = ({ flow }: Props) => (
  <ScreenSection
    data-target="section-item"
    id="workflow"
    backgroundColor={primaryYellow}
  >
    <Container>
      <Typography type="h2" as="h4" marginBottom={24}>
        {flow.title}
      </Typography>
      <Description>
        <Typography type="b1">{flow.description}</Typography>
      </Description>
      <WorkflowList flowList={flow.list} />
    </Container>
  </ScreenSection>
);

const Description = styled.div`
  max-width: 720px;
  margin-bottom: 68px;

  ${DesktopSmall} {
    margin-bottom: 57px;
  }

  ${Tablet} {
    margin-bottom: 0;
  }
`;
