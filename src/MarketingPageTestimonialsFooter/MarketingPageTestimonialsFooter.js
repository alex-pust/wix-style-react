import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './MarketingPageTestimonialsFooter.st.css';
import { dataHooks, DEFAULT_SIZE } from './constants';
import MarketingPageLayoutContext from '../MarketingPageLayout/MarketingPageLayoutContext';

const TestimonialsItem = ({ avatar, text, authorName }) => (
  <div className={styles.testimonialItem}>
    <div className={styles.testimonialItemAvatarArea}>{avatar}</div>
    <div className={styles.testimonialItemTextArea}>
      <div className={styles.testimonialItemTextAreaTop}>
        <Text size="tiny">{text}</Text>
      </div>
      <div>
        <Text size="tiny" weight="bold">
          {authorName}
        </Text>
      </div>
    </div>
  </div>
);

/** MarketingPageTestimonialsFooter */
const MarketingPageTestimonialsFooter = props => {
  const { size } = useContext(MarketingPageLayoutContext);
  const { dataHook, testimonials } = props;
  const validSize = size || DEFAULT_SIZE;
  return (
    <div {...styles('root', { size: validSize }, props)} data-hook={dataHook}>
      {testimonials.map((testimonialItem, idx) => {
        return (
          <TestimonialsItem
            key={testimonialItem.id || `testimonial${idx}`}
            avatar={testimonialItem.avatar}
            authorName={testimonialItem.authorName}
            text={testimonialItem.text}
          />
        );
      })}
    </div>
  );
};

MarketingPageTestimonialsFooter.displayName = 'MarketingPageTestimonialsFooter';

MarketingPageTestimonialsFooter.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.node,
      text: PropTypes.string,
      authorName: PropTypes.string,
    }),
  ),
};

MarketingPageTestimonialsFooter.defaultProps = {
  testimonials: [],
};

export default MarketingPageTestimonialsFooter;
