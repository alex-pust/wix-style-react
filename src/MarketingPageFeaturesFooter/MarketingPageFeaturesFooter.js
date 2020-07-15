import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './MarketingPageFeaturesFooter.st.css';
import { dataHooks } from './constants';
import Text from '../Text';
import MarketingPageLayoutContext from '../MarketingPageLayout/MarketingPageLayoutContext';
import { DEFAULT_SIZE } from '../MarketingPageTestimonialsFooter/constants';

const FeatureItem = ({ image, title, text }) => (
  <div className={styles.featureItem}>
    <div className={styles.featureItemImageArea}>{image}</div>
    <div className={styles.featureItemTextArea}>
      <div className={styles.featureItemTextAreaTop}>
        <Text size="small" weight="bold">
          {title}
        </Text>
      </div>
      <div>
        <Text size="small">{text}</Text>
      </div>
    </div>
  </div>
);

/** MarketingPageFeaturesFooter */
const MarketingPageFeaturesFooter = props => {
  const { size } = useContext(MarketingPageLayoutContext);
  const { dataHook, features } = props;
  const validSize = size || DEFAULT_SIZE;
  return (
    <div {...styles('root', { size: validSize }, props)} data-hook={dataHook}>
      {features.map((featureItem, idx) => {
        return (
          <FeatureItem
            key={featureItem.id || `feature${idx}`}
            image={featureItem.image}
            title={featureItem.title}
            text={featureItem.text}
          />
        );
      })}
    </div>
  );
};

MarketingPageFeaturesFooter.displayName = 'MarketingPageFeaturesFooter';

MarketingPageFeaturesFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /**
   * The array of features with description and image for each feature.
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

MarketingPageFeaturesFooter.defaultProps = {
  features: [],
};

export default MarketingPageFeaturesFooter;
