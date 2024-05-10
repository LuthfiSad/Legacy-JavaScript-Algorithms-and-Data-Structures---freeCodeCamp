function rot13(str) {
  // cari huruf kapital lalu ubah ke ASCII dan ditambah 13 lalu sisa bagikan sesuai banyak huruf(26) 
  return str.replace(/[A-Z]/g, (char) => {
    return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
  });
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // Output: "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // Output: "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
