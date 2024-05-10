
function palindrome(str) {
  // hapus non-alphanumeric characters dan underscore menjadi string kosong and ubah menjadi huruf kecil(lowercase)
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  // di pisakhkan per karakter lalu reverse dan gabungkan lagi
  const reversedStr = cleanStr.split('').reverse().join('');
  // cek apakah cleanStr sama dengan reversedStr
  return cleanStr === reversedStr;
}

// Test cases
console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
console.log(palindrome("five|\_/|four")); // false