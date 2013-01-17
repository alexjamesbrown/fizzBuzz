window.FizzBuzz = FizzBuzz = {
    fizzNum: 3, 
    buzzNum: 5,
    get: function(start, end, cb) {
        var result = [];

        for (var i = start; i <= end; i++) {
            if (i % (FizzBuzz.fizzNum*FizzBuzz.buzzNum) === 0)
                result.push("fizzBuzz");
            else if (i % FizzBuzz.fizzNum===0)
                result.push("fizz");
            else if(i % FizzBuzz.buzzNum===0)
                result.push("buzz");
            else
                result.push(i);
        }

        cb(result);
    }
}