import * as React from 'react';

export interface MarketingPageTestimonialsFooterProps {
  dataHook?: string;
  testimonials?: {
    id?: string;
    avatar?: React.ReactNode;
    text?: string;
    authorName?: string;
  }[];
}

export default class MarketingPageTestimonialsFooter extends React.PureComponent<MarketingPageTestimonialsFooterProps>{}
