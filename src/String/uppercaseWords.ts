const uppercaseWords = (text: string) => {
  return text.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
};

uppercaseWords("hello world"); // 'Hello World'
