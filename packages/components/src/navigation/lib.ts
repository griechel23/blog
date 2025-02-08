export interface NavBarProps {
  webpageTitle: string;
  entries: NavBarEntry[];
}

export interface NavBarEntry {
  name: string;
  path: string;
  slot?: string;
}
