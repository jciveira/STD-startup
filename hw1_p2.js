#!/usr/bin/env node

// Prime Number
//http://es.wikipedia.org/wiki/N%C3%BAmero_primo#Teorema_fundamental_de_la_aritm.C3.A9tica
var prime = function(n) {
    if(n < 1) { return 0;}
    else if(n == 1 || n == 2) { return 1;}
    else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
};



// Find first k Prime numbers via basic for loop, k > 4
var firstkprime = function(k) {
    var i = 1;
    var j = 5;
    var cienprimes = [];
    cienprimes.push("2","3","5","7"); 
    for (j = 5; j < k; i++) 
    {
     var n = cienprimes[j - 1];
     if (sqrt(j) )
    }
};
    
    
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(" ");
};

var k = 20;
console.log("firstkfib(" + k + ")");
console.log(fmt(firstkfib(k)));
