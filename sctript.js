let array = [
    [{ value: 500 }, 1, 2, 3, 4, 5],
    [{ value: 150 }, { value: 10 }, { value: 50 }],
    [
        ["123", { value: 500, ne_nado: 20 }],
        "{value:20}",
        { ne_nado: 10 },
        [1, 2, 3, 5]
    ],
    [5, [1, [2, [3, [4, [5, [6, 100, "{'value':'50', 'ne_nado':70}"]]]]]]]
];

var arr = [3, 2, 5, 6];
function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr);


// // let array = [
// //   1, '2', [3, 4, '5', [4, 6, '7' ]]
// // ]

// let sum = 0

// let nerArray = []

// array = array.flat(Infinity);

// array.reduce((acc, val) => acc.concat(val), [])



// // function sdf() {
// //   array.forEach(el )
// //   if (el === Number){
// //     sum += el
// //   }
// //   else if(el === String){
// //     sum += +el
// //   }
// //   else if(el === Array){
// //     sdf(el)
// //   }
// // }

// console.log(array)
// // const sumall = array.map(item => item.value).reduce((prev, curr) => prev + curr, 0)
// // console.log(sumall);