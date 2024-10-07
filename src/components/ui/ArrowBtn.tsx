import Link from "next/link";

import { ListLocales } from "@/models/Locale";

import { Arrow } from "./Arrow";
import { Button } from "./Button";
import { white } from "./colors";

type Props = {
  href: string;
  children?: React.ReactNode;
  locale?: ListLocales;
};
export const ArrowBtn = ({ href, locale, children }: Props) => (
  <Link href={href} locale={locale}>
    <Button size="s">
      {children}
      <Arrow rotate="-45deg" color={white} margin="0px 0px 0px 10px" />
    </Button>
  </Link>
);
