import { ReactElement } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface WindowInfo {
  id?: string;
  title: string;
  icon?: string;
  height: string;
  width: string;
  x: number;
  y: number;
  z?: number;
  content: () => ReactElement;
}

export interface TitleBar {
  title: string;
  icon: string;
}