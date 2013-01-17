describe("FizzBuzz", function () {

    describe("when asking for numbers 1-10", function () {
        it("returns 10 items", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result.length = 10);
            });
        });

        it("item in result with index of specified fizzNum should be fizz", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result[FizzBuzz.fizzNum - 1] === "fizz");
            });
        });

        it("item in result with index of specified buzzNum should be buzz", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result[FizzBuzz.buzzNum - 1] === "buzz");
            });
        });
    });

    describe("when asking for numbers 1-10, specifying fizzNum as 3, and buzzNum as 5", function () {
        it("item 3 should be fizz", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result[2] === "fizz");
            });
        });

        it("item 5 should be buzz", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result[4] === "buzz");
            });
        });

        it("has correct sequence", function () {
            FizzBuzz.fizzNum = 3;
            FizzBuzz.fizzNum = 5;
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

    describe("when asking for numbers 1-15", function () {
        it("item 15 is fizzBuzz", function () {
            FizzBuzz.get(1, 15, function (result) {
                assert(result[14] === "fizzBuzz");
            });
        });
    });

    describe("when asking for numbers 1-150", function () {
        it("item 150 is fizzBuzz", function () {
            FizzBuzz.get(1, 150, function (result) {
                assert(result[149] === "fizzBuzz");
            });
        });
    });
});
