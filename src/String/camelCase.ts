const camelCase = (text: string) => {
  return text
    .trim()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
};

camelCase("background-color"); // backgroundColor
camelCase("-webkit-scrollbar-thumb"); // WebkitScrollbarThumb
camelCase("_hello_world"); // HelloWorld
camelCase("hello_world"); // helloWorld
