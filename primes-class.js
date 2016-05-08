class Primes {
  constructor(){
    this.prime_count = 0;
    this.primes = new Array(25000);
  }
  getPrimeCount() {
    return this.prime_count;
  }
  getPrime(i) {
    return this.primes[i];
  }
  addPrime(i) {
    this.primes[this.prime_count++] = i;
  }

  isPrimeDivisible(candidate) {
    for (var i = 1; i < this.prime_count; ++i) {
      var current_prime = this.primes[i];
      if (current_prime * current_prime > candidate) {
        return false;
      }
      if ((candidate % current_prime) == 0) return true;
    }
    return false;
  }
};

function main() {
  p = new Primes();
  var c = 1;
  while (p.getPrimeCount() < 25000) {
    if (!p.isPrimeDivisible(c)) {
      p.addPrime(c);
    }
    c++;
  }
  console.log(p.getPrime(p.getPrimeCount()-1));
}

main();
