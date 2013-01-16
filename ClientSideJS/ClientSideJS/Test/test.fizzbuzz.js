describe("FizzBuzz", function () {

    describe("when asking for numbers 1-10", function () {
        it("returns 10 items", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result.length = 10);
            });
        });

        it("third item should be fizz", function() {
            FizzBuzz.get(1, 10, function(result) {
                assert(result[2] === "fizz");
            });
        });
        
        it("fifth item should be buzz", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result[4] === "buzz");
            });
        });

        it("has correct sequence", function() {
            FizzBuzz.get(1, 10, function (result) {
                result[0] == "1";
                result[1] == "2";
                result[2] == "fizz";
                result[3] == "4";
                result[4] == "buzz";
                result[5] == "fizz";
                result[6] == "7";
                result[7] == "8";
                result[8] == "fizz";
                result[9] == "buzz";
            });
        });
    });
});
