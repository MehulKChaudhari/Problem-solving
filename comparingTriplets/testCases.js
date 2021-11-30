module.exports = [
    {
      a: [10,15,12],
      b: [ 10,25,36],
      expectedOutput: [0,2]
    },
    {
      a: [15,20,115],
      b: [ 10,25,36],
      expectedOutput: [2,1]
    },
    {
      a: [10,15,8],
      b: [10,15,8],
      expectedOutput: [0,0]
    },
    {
      a: [12,13,15],
      b: [10,13,16],
      expectedOutput:[1,1]
    }
  ]