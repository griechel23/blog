export interface NavBarProps {
  entries: NavBarEntry[];
}

export interface NavBarEntry {
  name: string;
  path: string;
  slot?: string;
}
