window.FizzBuzz = FizzBuzz = {
    get: function(start, end, cb) {
        var result = [];
        var fizzNum = 3;
        var buzzNum = 5;

        for (var i = start; i <= end; i++) {
            if (i % (fizzNum*buzzNum) === 0)
                result.push("fizzBuzz");
            else if (i % fizzNum===0)
                result.push("fizz");
            else if(i % buzzNum===0)
                result.push("buzz");
            else
                result.push(i);
        }

        cb(result);
    }
}