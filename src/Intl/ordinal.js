/**
 * Returns the ordinal representation of a number.
 * @param {number} num - The number for which to generate the ordinal representation.
 * @returns {string} The ordinal representation of the input number.
 * @example
 * ordinal(1); // "1st"
 * ordinal(2); // "2nd"
 * ordinal(3); // "3rd"
 */
export const ordinal = num => {
  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th',
  };

  const plural = new Intl.PluralRules('en-US', { type: 'ordinal' });
  return `${num}${ordinals[plural.select(num)]}`;
};
