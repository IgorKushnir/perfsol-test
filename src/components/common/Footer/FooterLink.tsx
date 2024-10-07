import styled from "@emotion/styled";

import { Typography, primaryBlue } from "@/components/ui";

export const FooterLink = styled(Typography)`
  white-space: nowrap;
  &:hover {
    display: block;
    text-decoration: none;
    color: ${primaryBlue};
  }
`;
