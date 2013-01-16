window.FizzBuzz = FizzBuzz = {
    get: function(start, end, cb) {
        var result = [];
        for (var i = start; i < end; i++) {
            result.push(i);
        }

        cb(result);
    }
}