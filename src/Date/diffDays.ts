const diffDays = (date1, date2) => {
  return Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
};

diffDays(new Date("2021-11-3"), new Date("2022-2-1")); // 90
