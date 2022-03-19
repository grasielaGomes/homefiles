export interface IButton {
  text: string;
  handleClick?: () => void;
}

export interface IRoundedButton extends IButton {
  leftRadius?: string;
  rightRadius?: string;
  paddingRight?: string | string[];
  paddingLeft?: string | string[];
  marginRight?: string | string[];
  marginLeft?: string | string[];
}