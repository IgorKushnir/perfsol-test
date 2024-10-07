import { Ref } from "react";

import { MenuItem } from "@/models/Menu";

export type FooterProps = {
  footerRef?: Ref<HTMLElement>;
  menu: MenuItem[];
};
