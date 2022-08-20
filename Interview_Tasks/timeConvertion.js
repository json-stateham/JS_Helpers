// Convert time from AM/PM format to 24-hour format.

const timeConversion = s => {
  let hours = Number(s.substring(0, 2));

  const replaceWith = (str, value) =>
    str.replace(str.substring(0, 2), value).substring(0, 8);

  if (s.endsWith('AM')) {
    if (hours === 12) {
      return replaceWith(s, '00');
    } else {
      return s.substring(0, 8);
    }
  } else {
    if (hours === 12) {
      return s.substring(0, 8);
    } else {
      hours += 12;
      return replaceWith(s, hours);
    }
  }
};

console.log(timeConversion('07:05:45PM')); // 19:05:45
console.log(timeConversion('12:40:22AM')); // 00:40:22
console.log(timeConversion('06:40:03AM')); // 06:40:03
