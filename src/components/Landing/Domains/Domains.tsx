import { DomainsType } from "@/models";

import { NativeGrid } from "@/components/common/NativeGrid";
import { Container, ScreenSection, primaryYellow } from "@/components/ui";

import { toPage } from "@/utils/routes";

export type Props = {
  domains: DomainsType;
};
export const Domains = ({ domains }: Props) => (
  <ScreenSection
    data-target="section-item"
    id="domains"
    backgroundColor={primaryYellow}
  >
    <Container>
      <NativeGrid
        title={domains.title}
        description={domains.description}
        elements={domains.list}
        gridTheme="yellow"
        toRoute={toPage}
      />
    </Container>
  </ScreenSection>
);
