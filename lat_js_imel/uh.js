function hitungT() {
    let jarak=parseInt(document.getElementById("jarak").value);
    let kelas =parseInt(document.getElementById("kelas").value);
    let jpesan=parseInt(document.getElementById("jpesan").value);

    let tiketekom =jarak*10000+10000;

    if (kelas== "Ekonomi") {
        htotal=tiketekom;    
    }
    if (kelas== "Eksekutif") {
        htotal=tiketekom+10/100*tiketekom
    }
    else 
        htotal=tiketekom+20/100*tiketekom;

    if (jpesan>2) {
        diskon=5/100*htotal
    }

    let totall=htotal*jpesan-diskon

    document.getElementById("totall").value=totall;
    document.getElementById("diskon").value=diskon;
}  