export type DocMenu = {
  text: string;
  href: string;
  external?: boolean;
  targetBlank?: boolean;
  children?: DocMenu[];
};

