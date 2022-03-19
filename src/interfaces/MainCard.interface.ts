import { IMainCardHeader } from "./MainCardHeader.interface";

export interface IMainCard extends IMainCardHeader {
  children: JSX.Element | JSX.Element[];
  width?: string;
}