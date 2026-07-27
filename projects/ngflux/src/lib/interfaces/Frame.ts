import type { Menu } from "./Menu";

export type FrameSize = 'auto' | 'viewport';

export type FrameToolbarItem = {};

export type FrameHeaderMenu = Omit<Menu, 'children'>;

export type FrameOptions = {
  title?: () => string;
  icon?: () => string;
  image?: () => string;
  toolbarItems?: () => FrameToolbarItem[];
  headerMenu?: () => FrameHeaderMenu[];
  sideMenu?: () => Menu[];
};
