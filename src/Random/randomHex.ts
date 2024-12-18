const randomHex = () => {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
};

randomHex(); // '#5f4fca'
