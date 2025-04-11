export interface NavBarProps {
  entries: NavBarEntry[];
  websiteTitle?: string
}

export interface NavBarEntry {
  name: string;
  path: string;
  slot?: string;
}
