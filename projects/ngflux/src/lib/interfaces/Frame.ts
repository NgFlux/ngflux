import type { Menu } from "./Menu";

export type FrameSize = 'auto' | 'viewport';

export type FrameToolbarItem = {};

export type FrameOptions = {
  title?: string;
  icon?: string;
  image?: string;
  toolbarItems?: FrameToolbarItem[];
  mainMenu?: Menu[];
  sideMenu?: Menu[];
};
