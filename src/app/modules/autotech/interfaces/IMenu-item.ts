export interface IMenuItem {
  path: string;
  name: string;
  icon: string;
  children?: IMenuItem[];
  active?: boolean;
  disabled?: boolean;
}
