export interface IButton {
  text: string;
  width?: string | number;
  buttonRef?: React.Ref<any>;
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

export interface IIconButton {
  size?: string;
  aria?: string;
}