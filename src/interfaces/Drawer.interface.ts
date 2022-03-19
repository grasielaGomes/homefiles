import { RefObject } from "react";

export interface IDrawerContainer {
  isOpen: boolean;
  onClose: () => void;
  btnRef: RefObject<any>;
}