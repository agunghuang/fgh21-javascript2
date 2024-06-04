//1. charAt(): mengembalikan karakter pada index tertentu
var data = "BUY BITCOIN NOW";
var charAtIndex3 = data.charAt(3);

console.log(charAtIndex3);

//2. concat(): adalah metode bawaan yang menggabungkan string di JS.
function customConcat(...data) {
    return data.join('');
}

var str1 = "aku";
var str2 = " ";
var str3 = "adalah";
var str4 = " ";
var str5 = "anak";
var str6 = " ";
var str7 = "baik";
var concatenatedString = customConcat(str1, str2, str3, str4, str5, str6, str7);

console.log(concatenatedString);

//3. replace(): di JavaScript adalah metode untuk mencari teks tertentu dalam sebuah string dan menggantinya dengan teks lain.
var data1 = 'halo, agung';
var data2 = data1.replace('agung', 'tampan');

console.log(data2);

//4. indexOf(): Mengembalikan indeks dari pertama kali munculnya nilai yang ditentukan dalam sebuah string.
let coin = ["bitcoin", "ethereum", "solana", "manta", "ondo"];
let index = coin.indexOf("bitcoin");
if (index !== -1) {
    console.log("index coin adalah " + index);
} else {
    console.log("tidak ada dalam array");
}

//5. slice(): Mengembalikan potongan dari sebuah string sebagai string baru.
let kata = "aku tidak mau";
let sliceKata = kata.slice(1, 10);
console.log("Potongan string: " + sliceKata);

//6. toUpperCase(): Mengembalikan string dengan huruf besar.
let hurufkecil = "saya adalah anak yang baik pak";
let hurufbesar = hurufkecil.toUpperCase();
console.log("jadi huruf besar gaes " + hurufbesar);

//7. push(): Menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang baru array.
let coinBull = ["bitcoin", "ethereum", "solana"];
coinBull.push("ondo");
console.log("coin sesudah di tambahkan: " + coinBull);

//8. pop(): Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.
let coinBear= ["bitcoin", "ethereum", "solana", "hedera"];
let hapusCoin = coinBear.pop();
console.log("coin setelah dihapus: " + coinBear);
console.log("coin yang di hapus: " + hapusCoin);

//9. splice(): Mengubah konten array dengan menghapus atau mengganti elemen yang ada dan/atau menambah elemen baru.
let coinSide = ["bitcoin", "ethereum", "solana", "renzo"];
let hapusCoinS = coinSide.splice(2, 2, "doge", "shiba");
console.log("coin setelah diubah: " + coinSide);
console.log("coin yang dihapus: " + hapusCoinS);

//10. Math.max(): Mengembalikan angka terbesar dari nol atau lebih angka.
let angka = Math.max(68, 47, 71, 100, 85);
console.log("nilai maksimum adalah: " + angka);


