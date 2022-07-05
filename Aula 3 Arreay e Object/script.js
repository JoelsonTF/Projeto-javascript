//  o que saão vetores ou arrays

//  como declarar um array
// let array = ["string" , 1 , truel];
// console.log(array)

// pode guardar vários tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]];
// console.log(array[2]);

// forEach
// array.forEach(function(item, index){console.log(item, index)});

// array.push([]);
// console.log(array)

// array.pop()
// console.log(array);

// array.unshift('novo item no inicio')
// console.log(array);

// console.log(array.indexDf(true));

// Array.splice(0, 3);
// console.log(Array);

// let novoArray = Array.slice(0, 3);
// console.log(novoArray);

let object = {string: 'string', number:1, Boolean: true, array: ['array'], objectInterno}
objectInterno: 'objeto interno);'

console.log(obect.objectInterno)

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno)

var { string, Boolean , objectInterno}= object;
console.log(string, Boolean, objectInterno)