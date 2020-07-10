import React, { useContext } from 'react';
import Heading, { APPEARANCES } from '../../Heading';
import styles from './TextContent.st.css';
import { SIZES } from '../constants';
import { isString } from '../../utils/StringUtils';
import Text, { SIZES as TEXT_SIZES } from '../../Text';
import MarketingPageLayoutContext from '../MarketingPageLayoutContext';

const headerMapBySize = {
  [SIZES.small]: APPEARANCES.H2,
  [SIZES.medium]: APPEARANCES.H1,
  [SIZES.large]: APPEARANCES.H1,
};

const subtitleMapBySize = {
  [SIZES.small]: APPEARANCES.H5,
  [SIZES.medium]: APPEARANCES.H4,
  [SIZES.large]: APPEARANCES.H4,
};

const contentTextSizeBySize = {
  [SIZES.small]: TEXT_SIZES.small,
  [SIZES.medium]: TEXT_SIZES.medium,
  [SIZES.large]: TEXT_SIZES.medium,
};

const HeadingContentItem = ({ contentValue, appearance, className }) => {
  if (!contentValue) {
    return null;
  }
  if (isString(contentValue)) {
    return (
      <Heading className={className} appearance={appearance}>
        {contentValue}
      </Heading>
    );
  }
  return <div className={className}>{contentValue}</div>;
};

const TextContentItem = ({ contentValue, textSize, className }) => {
  if (!contentValue) {
    return null;
  }
  if (isString(contentValue)) {
    return (
      <div className={className}>
        <Text size={textSize}>{contentValue}</Text>
      </div>
    );
  }
  return <div className={className}>{contentValue}</div>;
};

const TextContentList = ({
  content,
  contentPrefixIcon,
  textSize,
  className,
  itemClassName,
}) => {
  if (!content) {
    return null;
  }
  if (Array.isArray(content) && content.length > 0) {
    return (
      <div className={className}>
        {content.map((contentItem, idx) => (
          <div key={`textItem${idx}`} className={styles.contentItemContainer}>
            {contentPrefixIcon && (
              <div className={styles.contentItemPrefixIcon}>
                {React.cloneElement(contentPrefixIcon)}
              </div>
            )}
            <TextContentItem
              contentValue={contentItem}
              textSize={textSize}
              className={itemClassName}
            />
          </div>
        ))}
      </div>
    );
  }
  return <div className={className}>{content}</div>;
};

const TextContent = () => {
  const {
    header,
    overline,
    subtitle,
    content,
    contentPrefixIcon,
    size,
  } = useContext(MarketingPageLayoutContext);
  return (
    <div className={styles.root}>
      <TextContentItem
        className={styles.overLine}
        contentValue={overline}
        textSize={contentTextSizeBySize[size]}
      />
      <HeadingContentItem
        contentValue={header}
        appearance={headerMapBySize[size]}
      />
      <HeadingContentItem
        className={styles.subtitle}
        contentValue={subtitle}
        appearance={subtitleMapBySize[size]}
      />
      <TextContentList
        className={styles.content}
        itemClassName={styles.contentItem}
        content={content}
        contentPrefixIcon={contentPrefixIcon}
        textSize={contentTextSizeBySize[size]}
      />
    </div>
  );
};

export default TextContent;
