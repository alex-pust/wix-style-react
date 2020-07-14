import React, { useContext } from 'react';
import styles from './StandardLayout.st.css';
import { SIZES, dataHooks } from '../constants';
import MarketingPageLayoutContext from '../MarketingPageLayoutContext';
import TextContent from './TextContent';
import PropTypes from 'prop-types';
import Divider from '../../Divider';

/** A standard layout for marketing page */
const StandardLayout = props => {
  const { dataHook, image, actions, footer } = props;
  const { size } = useContext(MarketingPageLayoutContext);
  return (
    <div data-hook={dataHook} {...styles('root', { size }, props)}>
      <div {...styles('textContentCell', { size }, props)}>
        <div className={styles.textArea}>
          <TextContent />
          <div className={styles.actionsArea}>{actions}</div>
        </div>
      </div>
      {size !== SIZES['small'] && (
        <div
          data-hook={dataHooks.marketingPageLayoutImageContentCell}
          className={styles.imageContentCell}
        >
          <div className={styles.imageContentWrapper}>{image}</div>
        </div>
      )}
      {footer && (
        <>
          <div className={styles.dividerContentCell}>
            <Divider />
          </div>
          <div
            data-hook={dataHooks.marketingPageLayoutFooterContentCell}
            {...styles('footerContentCell', { size }, props)}
          >
            {footer}
          </div>
        </>
      )}
    </div>
  );
};

StandardLayout.displayName = 'StandardLayout';

StandardLayout.propTypes = {
  dataHook: PropTypes.string,
  actions: PropTypes.node,
  footer: PropTypes.node,
  image: PropTypes.node,
};

StandardLayout.defaultProps = {
  actions: null,
  footer: null,
  image: null,
};

export default StandardLayout;
