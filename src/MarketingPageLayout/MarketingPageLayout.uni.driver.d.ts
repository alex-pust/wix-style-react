import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface MarketingPageLayoutUniDriver extends BaseUniDriver {
  hasOverline(): Promise<boolean>;
  getOverlineText(): Promise<string>;
  hasHeader(): Promise<boolean>;
  getHeaderText(): Promise<string>;
  hasSubtitle(): Promise<boolean>;
  getSubtitleText(): Promise<string>;
  getTextContentItemsCount(): Promise<number>;
  hasFooter(): Promise<boolean>;
  hasImage(): Promise<boolean>;
}
