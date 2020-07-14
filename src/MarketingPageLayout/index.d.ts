import * as React from 'react';

export interface MarketingPageLayoutProps {
  dataHook?: string;
  size?: 'large' | 'medium' | 'small';
  overline?: string | React.ReactNode;
  header?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  content?: string[] | React.ReactNode[];
  contentPrefixIcon?: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  image?: React.ReactNode;
}

export default class MarketingPageLayout extends React.PureComponent<MarketingPageLayoutProps>{}
