// extract the method from the prototype and use it as a regular function

export const demethodize = Function.prototype.bind.bind(Function.prototype.call);
