// TASK M:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// const list = [1, 2, 3, 4];
function kvadratOshir(list: number[]) {
  const newList = list.map((ele) => {
    return { number: ele, square: ele * ele };
  });
  return newList;
}
const result = kvadratOshir([1, 2, 3, 4, 5, 6]);
console.log("result:", result);

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
