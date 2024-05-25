/**
 * Generates an array containing localized month names according to the given parameters.
 * @param {Object} [options] - The options object.
 * @param {string} [options.locale='en'] - The locale to use for month names. Default: 'en' (English).
 * @param {string} [options.variant='long'] - The format variant for month names. Default: 'long'.
 * Possible values: 'long', 'short', or 'narrow'.
 * @returns {string[]} The resulting array containing localized month names.
 */

export const getMonths = ({ locale, variant } = { locale: 'en', variant: 'long' }) =>
  Array.from({ length: 12 }, (_, index) =>
    new Date(0, index).toLocaleDateString(locale, { month: variant })
  );
