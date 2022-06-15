import { isPrime } from './isPrime.js';

const modInverse = (e, phi) => {
    let m0 = phi, t = 0, q = 0;
    let x0 = 0, x1 = 1;

    if (phi === 1) return 0;

    while (e > 1) {
        // q is quotient
        q = (e / phi) | 0;
        t = phi;

        // phi is remainer now, process same as Euclid's algo
        phi = e % phi;
        e = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }

    // make x1 positive
    if (x1 < 0) x1 += m0;
    
    return x1;
}

const keyPairRSA = (p, q) => {
    if (!isPrime(p) && !isPrime(q)) return;
    if (p === q) return;

    const n = p * q;
    const phi = (p - 1) * (q - 1);
    const e = 3;
    const d = modInverse(e, phi);

    // public key: [e, n], private key: [d, n]
    return [[e, n], [d, n]];
}

console.log(keyPairRSA(5, 11));