var should = chai.should()
  
describe('Test fizzBuzz function', function () {
  it('if test number can be divisible by 3, return Fizz.', function () {
    let testData = 12
    let result = fizzBuzz (testData)
    let results = 'Fizz'
      result.should.be.deep.equal(results)
    })
  it('if test number can be divisible by 5, return Buzz.', function () {
    let testData = 25
    let result = fizzBuzz (testData)
    let results = 'Buzz'
    result.should.be.deep.equal(results)
  })

  it('if test number can be divisible by 3 and 5 , return FizzBuzz.', function () {
    let testData = 15
    let result = fizzBuzz (testData)
    let results = 'FizzBuzz'
    result.should.be.deep.equal(results)
  })

  it('if test number cannot be divisible by any numbers, return itself. ', function () {
    let testData = 2
    let result = fizzBuzz (testData)
    let results = 2
    result.should.be.deep.equal(results)
  })

})



