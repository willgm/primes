"use strict";

function Primes() {
  this.prime_count = 0;
  this.primes = new Array(25000);
  this.getPrimeCount = function() { return this.prime_count; }
  this.getPrime = function(i) { return this.primes[i]; }
  this.addPrime = function(i) {
    this.primes[this.prime_count++] = i;
  }

  this.isPrimeDivisible = function(candidate) {
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
  var p = new Primes();
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
