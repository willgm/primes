function Primes() {
  this.primes = new Array(25000);
};
Primes.prototype.prime_count = 0;
Primes.prototype.getPrimeCount = function() { return this.prime_count; }
Primes.prototype.getPrime = function(i) { return this.primes[i]; }
Primes.prototype.addPrime = function(i) {
  this.primes[this.prime_count++] = i;
}

Primes.prototype.isPrimeDivisible = function(candidate) {
  for (var i = 1; i < this.prime_count; ++i) {
    var current_prime = this.primes[i];
    if (current_prime * current_prime > candidate) {
      return false;
    }
    if ((candidate % this.primes[i]) == 0) return true;
  }
  return false;
}

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
