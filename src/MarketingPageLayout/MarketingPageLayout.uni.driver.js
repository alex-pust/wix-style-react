import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const marketingPageLayoutDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    hasOverline: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentOverline}"]`)
        .exists();
    },

    getOverlineText: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentOverline}"]`)
        .text();
    },

    hasHeader: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentHeader}"]`)
        .exists();
    },

    getHeaderText: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentHeader}"]`)
        .text();
    },

    hasSubtitle: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentSubtitle}"]`)
        .exists();
    },

    getSubtitleText: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentSubtitle}"]`)
        .text();
    },

    getTextContentItemsCount: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutTextContentTextList}"]`)
        .$$(
          `[data-hook="${dataHooks.marketingPageLayoutTextContentTextListItem}"]`,
        )
        .count();
    },

    hasFooter: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutFooterContentCell}"]`)
        .exists();
    },

    hasImage: async () => {
      return base
        .$(`[data-hook="${dataHooks.marketingPageLayoutImageContentCell}"]`)
        .exists();
    },
  };
};
