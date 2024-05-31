let JP=parseInt(prompt("Masukkan jumlah pembelian: "));
let UD=parseInt(prompt("Masukkan uang yang dikeluarkan: "));

if(JP>=1000000){
    diskon=0.25*JP;
    
}
else if(JP>=500000){
    diskon=0.1*JP;
}
else{
    diskon=0;
}
let susuk=UD-(JP-diskon)
document.write("Diskon "+diskon+"<br>")
document.write("Uang kembalian "+susuk)