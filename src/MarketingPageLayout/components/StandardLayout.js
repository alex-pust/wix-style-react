import React, { useContext } from 'react';
import styles from './StandardLayout.st.css';
import { SIZES, dataHooks } from '../constants';
import MarketingPageLayoutContext from '../MarketingPageLayoutContext';
import TextContent from './TextContent';
import PropTypes from 'prop-types';
import Divider from '../../Divider';
import TextButton from '../../TextButton';

/** A standard layout for marketing page */
const StandardLayout = React.forwardRef((props, ref) => {
  const { dataHook, image, actions, footer, showMoreInfo, onMoreInfo } = props;
  const { size } = useContext(MarketingPageLayoutContext);

  const footerRef = React.createRef();

  const handleMoreInfo = e => {
    e.stopPropagation();
    e.preventDefault();
    if (onMoreInfo) {
      onMoreInfo(footerRef.current);
    }
  };

  return (
    <div ref={ref} data-hook={dataHook} {...styles('root', { size }, props)}>
      <div {...styles('textContentCell', { size }, props)}>
        <div className={styles.textArea}>
          <TextContent />
          <div className={styles.actionsArea}>{actions}</div>
          {showMoreInfo && (
            <div className={styles.loadMoreActionArea}>
              <TextButton size="medium" onClick={handleMoreInfo}>
                More info...
              </TextButton>
            </div>
          )}
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
            ref={footerRef}
            data-hook={dataHooks.marketingPageLayoutFooterContentCell}
            {...styles('footerContentCell', { size }, props)}
          >
            {footer}
          </div>
        </>
      )}
    </div>
  );
});

StandardLayout.displayName = 'StandardLayout';

StandardLayout.propTypes = {
  dataHook: PropTypes.string,
  actions: PropTypes.node,
  footer: PropTypes.node,
  image: PropTypes.node,
  showMoreInfo: PropTypes.bool,
  onMoreInfo: PropTypes.func,
};

StandardLayout.defaultProps = {
  actions: null,
  footer: null,
  image: null,
};

export default StandardLayout;
