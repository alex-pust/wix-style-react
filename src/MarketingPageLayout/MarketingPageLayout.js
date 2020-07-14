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
      actions,
      image,
      overline,
      header,
      subtitle,
      content,
      contentPrefixIcon,
      footer,
    } = this.props;
    const validSize = size || SIZES[DEFAULT_SIZE];
    return (
      <MarketingPageLayoutContext.Provider
        value={{
          size: validSize,
          overline,
          header,
          subtitle,
          content,
          contentPrefixIcon,
        }}
      >
        <StandardLayout
          dataHook={dataHook}
          actions={actions}
          footer={footer}
          image={image}
        />
      </MarketingPageLayoutContext.Provider>
    );
  }
}

MarketingPageLayout.displayName = 'MarketingPageLayout';

MarketingPageLayout.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /**
   * Sets explicitly the size of the page layout. It is useful to keep good responsiveness.
   */
  size: PropTypes.oneOf(Object.keys(SIZES)),
  /**
   * The content of the overline in the text area of the page
   */
  overline: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * The content of the header in the text area of the page
   */
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * The content of the subtitle in the text area of the page
   */
  subtitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * The list of text items in the text area of the page
   */
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * The icon that is used as the prefix for each text item in the text area of the page
   */
  contentPrefixIcon: PropTypes.node,
  /**
   * A footer component. Use `MarketingPageTestimonialsFooter` or `MarketingPageFeaturesFooter`
   */
  footer: PropTypes.node,
  /**
   * An action component in the text area of the page
   */
  actions: PropTypes.node,
  /**
   * The image component in the image area of the page
   */
  image: PropTypes.node,
};

MarketingPageLayout.defaultProps = {};

export default MarketingPageLayout;
