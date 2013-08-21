#!/usr/bin/env node

// Prime Number
//http://es.wikipedia.org/wiki/N%C3%BAmero_primo#Teorema_fundamental_de_la_aritm.C3.A9tica
var prime = function(n) {
    if(n < 1) { return 0;}
    else if(n == 1 || n == 2) { return 1;}
    else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
};



// Find first 100 Prime numbers via basic for loop
var firstprime = function(k) {
    var i = 1;
    var arr = [];
    for(i = 1; i < k+1; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(" ");
};
