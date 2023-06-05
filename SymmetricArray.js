const isSymmetricArray=(myArray)=> {
    const { data } = myArray;
    const length = data.length;
    for (let i = 0; i < length / 2; i++) {
      if (data[i] !== data[length - 1 - i]) {
        return ("El arreglo es asimétrico y su longitud es "+length);
      }
    }
    return ("El arreglo es simétrico y su longitud es "+length);
  }
  const numberArray = {
    data: [2, 8, 5, 11, 4, 25,25,4,11,5,8,2],
  };
  console.log(isSymmetricArray(numberArray)); 
  const stringArray = {
    data: [1, 2, 3, 4, 5, 6,9,5],
    };
  console.log(isSymmetricArray(stringArray)); 
  const nonSymmetricArray = {
    data: ["abc", "def", "ghi", "ghi", "def", "abc"],
  };
  console.log(isSymmetricArray(nonSymmetricArray)); 