// TASK S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

function missingNumber(arr: number[]): number {
  const a = arr.sort();
  for (let i = 1; i < a.length; i++) {
    if (a[i] - a[i - 1] !== 1) {
      return a[i - 1] + 1;
    }
  }
  return -2;
}

const result = missingNumber([3, 0, 1, 4]);
console.log(result);

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(a: string): number {
//   const b = a
//     .split("")
//     .filter((ele) => ele !== " ")
//     // 2. map endi funksiya emas, qiymat qaytaradi: raqam bo'lsa songa aylantiradi
//     .map((ele) => (ele === "+" || ele === "-" ? ele : Number(ele)));

//   // 3. reduce amalni eslab qoladi va sonlarni qo'shadi/ayiradi
//   let operator: "+" | "-" = "+";

//   return b.reduce<number>((total, currentValue) => {
//     if (currentValue === "+" || currentValue === "-") {
//       operator = currentValue;
//       return total;
//     }
//     return operator === "+" ? total + currentValue : total - currentValue;
//   }, 0);
// }
// const result = calculate("1 + 3");
// console.log(result);

// console.log("============================ 2-usul ============================");

// const hisobla = (a: string): number =>
//   a.split("+").reduce((total, n) => total + Number(n), 0);

// console.log(hisobla("1 + 3")); // 4
// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// function hasProperty(a: object, b: string): boolean {
//   let list = Object.keys(a);
//   console.log(list);
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === b) return true;
//   }
//   return false;
// }
// const result = hasProperty({ name: "bmw", model: "m4" }, "model");
// console.log(result);

/** 
 Traditional FD => SSR(adminka)=> EJS bilan quriladi
 Modern FD => SPA =>REACT(user) bilan quriladi
*/

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: object) {
//   const x = Object.keys(obj).map((key) => [key, (obj as any)[key]]);

//   return x;
// }

// const result = objectToArray({ a: 10, b: 20, c: 30 });
// console.log(result);

/*
  Traditional API
  Rest API
  GraphQL API
  ...
*/

/* Project Standarts:
  -Logging standarts
  -Naming standarts
    functin,method,variable =>CAMEL
    class =>PASCAL
    folder => KEBAB
    css =>SNAKE
  -Error HAndling
  

*/

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSumOfNumbers(array: any[]): number {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//       const a: string = (sum += array[i]);
//     }
//   }
//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// function calculateSumOfNumbers(array: unknown[]): number {
//   return array.reduce<number>((total, value) => {
//     return typeof value === "number" ? total + value : total;
//   }, 0);
// }
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function getString(string: string) {
//   const string1 = string.split("").reverse().join("");

//   if (string === string1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(getString("level"));
// TASK M:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// const list = [1, 2, 3, 4];
// function kvadratOshir(list: number[]) {
//   const newList = list.map((ele) => {
//     return { number: ele, square: ele * ele };
//   });
//   return newList;
// }
// const result = kvadratOshir([1, 2, 3, 4, 5, 6]);
// console.log("result:", result);

// TASK L:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(text: string) {
//   const word = text.split(" ");
//   const chappaWord = word.map((word) => word.split("").reverse().join(""));
//   const chappaGap = chappaWord.join(" ");
//   return chappaGap;
// }

// console.log(reverseSentence("we like coding"));
