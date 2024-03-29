//1-masala
// let setObj = new Set([1, 3, 5, 56, 54, 1, 3, 5]);
// console.log(setObj);
// 2-masala
// let setObj = new Set([1, 1, 5, 5]);
// let a = 0;
// setObj.forEach((qiymat) => {
//   return (a += qiymat);
// });
// console.log(a);
//3-masala
// function tekshir(arr) {
//   let set = new Set(arr);
//   return set.size == arr.length;
// }
// let arr = [10, 1, 2, 3, 4, 5];
// console.log(tekshir(arr));
//4-masala
// let setObj = new Set([1, 3, 5, 56, 54, 1, 3, 5]);
// let newobj_1 = [...setObj];
// let setObj_2 = new Set([10, 20, 30, 40]);
// let newobj_2 = [...setObj_2];
// let result = newobj_1.concat(newobj_2);
// console.log(result);
//5-masala
// let mapObj = new Map();
// mapObj.set("strain", "kiyim");
// mapObj.set("id", 25);
// mapObj.set("narhi", 3500);
// console.log(mapObj.size);
//6-masala
// let obj = {
//   id: 521,
//   title: "iphone 14-pro max",
//   price: 1050,
//   color: "grey",
// };
// let newobj = {
//   shop: "house_mobile",
//   ...obj,
// };
// console.log(newobj);
//7-masala
// function solishtir(set1, set2) {
//   for (let item of set1) {
//     if (!set2.has(item)) {
//       return false;
//     }
//   }
//   return true;
// }
// let setObj_1 = new Set([1, 3, 4, 5]);
// let setObj_2 = new Set([3, 4, 5]);

// console.log(solishtir(setObj_1, setObj_2));
//8-masala
// let setObj = new Set([1, 3, 5, 56, 54, 1, 3, 5]);
// let newobj_1 = [...setObj];
// let setObj_2 = new Set([10, 20, 30, 40]);
// let newobj_2 = [...setObj_2];
// let result = newobj_1.concat(newobj_2);
// console.log(result);
// 9-misol
// let arr = [1, 2, 3, 4, 5];
// let a = 0;
// let newArr = arr.map((item) => {
//   a += item;
// });
// console.log(a);
//10-masala
let setObj_1 = new Set([1, 3, 4, 5]);
let setObj_2 = new Set([3, 4, 5]);
function solishtir(set1, set2) {
  let newarr = [];
  for (let item of set1) {
    if (set2.has(item)) {
      return newarr.push(item);
    } else {
      return newarr;
    }
  }
}
console.log(newarr);
