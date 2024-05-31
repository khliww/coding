let fsk=parseInt(prompt("Masukkan nilai fisika: "));
let mtk=parseInt(prompt("Masukkan nilai matematika: "));
let ing=parseInt(prompt("Masukkan nilai bahasa inggris: "));

let hasil=(fsk+mtk+ing)/3;

if(hasil>=90){
    nilai="A"
}
else if(hasil>=80){
    nilai="B"
}
else if(hasil>=70){
    nilai="C"
}
else{
    nilai="D"
}

document.write("Nilai matematika= "+mtk+"<br>")
document.write("Nilai fisika= "+fsk+"<br>")
document.write("Nilai bahasa inggris= "+ing+"<br>")
document.write("Nilai rata-rata= "+hasil+"<br>")
document.write("Nilai konversi= "+nilai)