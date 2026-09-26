// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

function calculateSumOfNumbers(array: any[]): number {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      const a: string = (sum += array[i]);
    }
  }
  return sum;
}

console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

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
