//1. charAt mengembalikan karakter pada index tertentu
var data = "BUY BITCOIN NOW";
var charAtIndex3 = data.charAt(3);

console.log(charAtIndex3);

//2. concat adalah metode bawaan yang menggabungkan string di JS
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

//3. replace di JavaScript adalah metode untuk mencari teks tertentu dalam sebuah string dan menggantinya dengan teks lain
var data1 = 'halo, agung';
var data2 = data1.replace('agung', 'tampan');

console.log(data2);

