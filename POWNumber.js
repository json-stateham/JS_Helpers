const pow = (base, power) => power === 1 ? base : pow(base, power - 1) * base;

pow(2, 3); // -> 8