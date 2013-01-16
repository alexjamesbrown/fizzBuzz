window.FizzBuzz = FizzBuzz = {
    get: function(start, end, cb) {
        var result = [];
        
        for (var i = start; i < end; i++) {
            if (i % 3===0)
                result.push("fizz");
            else if(i%5===0)
                result.push("buzz");
            else
                result.push(i);
        }

        cb(result);
    }
}