import styled from "@emotion/styled";
import Link from "next/link";

import { primaryBlue } from "@/components/ui/colors";

export const ContactUs = styled(Link)`
  text-transform: uppercase;
  color: white;
  box-sizing: border-box;
  width: max-content;
  border: none;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryBlue};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px 20px;
  height: 42px;

  &:hover {
    transform: scale(1.05);
    background-color: ${primaryBlue};
    border: none;
  }
`;
