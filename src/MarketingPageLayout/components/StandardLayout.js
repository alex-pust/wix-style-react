import React, { useContext } from 'react';
import styles from './StandardLayout.st.css';
import Image from '../../Image';
import Button from '../../Button';
import { SIZES } from '../constants';
import MarketingPageLayoutContext from '../MarketingPageLayoutContext';
import TextContent from './TextContent';

/** A standard layout for marketing page */
const StandardLayout = props => {
  const { dataHook, size } = useContext(MarketingPageLayoutContext);
  return (
    <div {...styles('root', { size }, props)} data-hook={dataHook}>
      <div {...styles('textContentCell', { size }, props)}>
        <TextContent />
      </div>
      <div {...styles('actionsContentCell', { size }, props)}>
        <div>
          <Button>Main Action</Button>
        </div>
      </div>
      {size !== SIZES['small'] && (
        <div className={styles.imageContentCell}>
          <div className={styles.imageContentWrapper}>
            <Image />
          </div>
        </div>
      )}
      <div className={styles.footerContentCell}>
        <div className={styles.placeholder}>
          <span>Footer Content</span>
        </div>
      </div>
    </div>
  );
};

StandardLayout.displayName = 'StandardLayout';

export default StandardLayout;
