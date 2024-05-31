
let dsc=parseInt(prompt("Masukkan jumlah beli: "));

if(dsc>=1000000){
    diskon=0.1*dsc;
    
}
else if(dsc>=500000){
    diskon=0.05*dsc;
}
else{
    diskon=0;
}

document.write("Jumlah beli "+dsc+"<br>")
document.write("Diskon "+diskon)