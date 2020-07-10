import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_SIZE, SIZES } from './constants';
import MarketingPageLayoutContext from './MarketingPageLayoutContext';
import StandardLayout from './components/StandardLayout';

/** Marketing Page Layout */
class MarketingPageLayout extends React.PureComponent {
  render() {
    const {
      dataHook,
      size,
      action,
      overline,
      header,
      subtitle,
      content,
      contentPrefixIcon,
    } = this.props;
    const validSize = size || SIZES[DEFAULT_SIZE];
    return (
      <MarketingPageLayoutContext.Provider
        value={{
          dataHook,
          size: validSize,
          overline,
          header,
          subtitle,
          content,
          contentPrefixIcon,
        }}
      >
        <StandardLayout />
      </MarketingPageLayoutContext.Provider>
    );
  }
}

MarketingPageLayout.displayName = 'MarketingPageLayout';

MarketingPageLayout.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  size: PropTypes.oneOf(Object.keys(SIZES)),

  /**
   *
   */
  overline: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  subtitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.string),
  ]),

  contentPrefixIcon: PropTypes.node,

  action: PropTypes.node,
};

MarketingPageLayout.defaultProps = {};

export default MarketingPageLayout;
