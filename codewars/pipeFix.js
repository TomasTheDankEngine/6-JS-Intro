const numbers = [1, 3, 4, 6, 9, 11, 17];


function pipeFix(numbers){
    const from = numbers[0];
    const to = numbers[numbers.length - 1];
    let newList = [];
    for (let i = from; i <= to; i++) {      
        newList.push(i);
    }
    //console.log(newList);
    return newList;
  }
console.log(pipeFix(numbers));