// TASK L:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(text) {
  const word = text.split(" ");
  const chappaWord = word.map((word) => word.split("").reverse().join(""));
  const chappaGap = chappaWord.join(" ");
  return chappaGap;
}

console.log(reverseSentence("we like coding"));
