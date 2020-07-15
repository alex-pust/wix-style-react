import React from 'react';
import PropTypes from 'prop-types';

import styles from './MarketingPageFeaturesFooter.st.css';
import { dataHooks } from './constants';

/** MarketingPageFeaturesFooter */
class MarketingPageFeaturesFooter extends React.PureComponent {
  render() {
    const { dataHook } = this.props;

    return <div {...styles('root', {}, this.props)} data-hook={dataHook}></div>;
  }
}

MarketingPageFeaturesFooter.displayName = 'MarketingPageFeaturesFooter';

MarketingPageFeaturesFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
};

MarketingPageFeaturesFooter.defaultProps = {};

export default MarketingPageFeaturesFooter;
