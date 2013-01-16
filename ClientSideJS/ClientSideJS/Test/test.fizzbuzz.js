describe("FizzBuzz", function () {

    describe("when asking for numbers 1-10", function () {
        it("returns 10 items", function () {
            FizzBuzz.get(1, 10, function (result) {
                assert(result.length = 10);
            });
        });
    });
});
