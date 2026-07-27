export interface NavItem {
  label: string;
  path: string;
  iconName: string;   /* Material Symbols Outlined icon name */
  isFab?: boolean;    /* true only for the Athlete centre Create button */
}

export interface NavigationConfig {
  items: NavItem[];
}
