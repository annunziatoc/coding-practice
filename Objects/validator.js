const validator = {
    minimum: 10,
    test: function (numbers) {
        return numbers.every(function (num) {
            return num > this.minimum
        }, this)
    }
}



console.log(validator.test([11, 12, 13]))
console.log(validator.test([9, 12, 13]))



