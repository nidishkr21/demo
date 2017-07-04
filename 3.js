var a="asdhcnmeryuadsfjnbzxcv";

 var freq = {};
    for (var i=0; i<a.length;i++) {
        var c = a.charAt(i);
        if (freq[c]) {
           freq[c]++;
        } else {
           freq[c] = 1;
        }
    }

    console.log(freq);
