// generate an array of months

export const getMonths = (variant = 'long') =>
  Array.from({ length: 12 }, (_, index) =>
    new Date(0, index).toLocaleDateString('en-US', { month: variant })
  );
