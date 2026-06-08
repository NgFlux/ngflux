export type DocMenu = {
  text: string;
  description?: string;
  href: string;
  external?: boolean;
  targetBlank?: boolean;
  children?: DocMenu[];
};

