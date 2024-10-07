import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { Tablet, Typography, white } from "@/components/ui";

import { MenuItem } from "@/models/Menu";

import { FooterLink } from "./FooterLink";

type Props = {
  link: MenuItem;
};

export const FooterMenuColumn = ({ link }: Props) => {
  const router = useRouter();
  const { title, items } = link;
  const hasItems = items && items.length > 0;
  return (
    <Item>
      <Typography type="t1" color={white}>
        {title}
      </Typography>
      {hasItems && (
        <Dropdown>
          {link.items?.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              locale={item.hasTranslation ? router.locale : "en"}
            >
              <FooterLink type="b4" color={white}>
                {item.title}
              </FooterLink>
            </Link>
          ))}
        </Dropdown>
      )}
    </Item>
  );
};

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 11px;
  overflow: auto;

  ${Tablet} {
    margin-top: 0;
  }
`;

const Item = styled.li`
  color: #fff;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
`;
