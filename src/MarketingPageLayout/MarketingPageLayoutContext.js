import React from 'react';
import { SIZES, DEFAULT_SIZE } from './constants';

const MarketingPageLayoutContext = React.createContext({
  size: SIZES[DEFAULT_SIZE],
  overline: null,
  header: null,
  subtitle: null,
  content: null,
  contentPrefixIcon: null,
});

export default MarketingPageLayoutContext;
