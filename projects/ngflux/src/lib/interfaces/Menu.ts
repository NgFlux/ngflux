export type Menu = {
  text: string;
  icon?: string;
  href?: string;
  isExternal?: boolean;
  targetBlank?: boolean;
  onClick?: (e: PointerEvent, item: Menu) => any;
  children?: Menu[];
};
