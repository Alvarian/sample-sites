import { RouteComponentProps } from "@reach/router";

export type Anchor = 'top' | 'left' | 'bottom' | 'right';
export type Any = RouteComponentProps<any>;

export interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
