import { ReactElement } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface WindowInfo extends WindowInitial {
  id: number;
  z?: number;
  removeWindow: any;
}

export interface WindowInitial {
  title: string;
  icon?: string;
  height: string;
  width: string;
  x: number;
  y: number;
  content: () => ReactElement;
}

export interface TitleBar {
  title: string;
  icon: string;
  closeWindow: any;
}

export interface WindowArray {
  windows: WindowInfo[];
  addWindow: any;
  removeWindow: any;
}