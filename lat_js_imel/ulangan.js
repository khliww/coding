function total_bli() {
    let harga=parseInt(document.getElementById("harga").value);
    let jumlahbr=parseInt(document.getElementById("jumlahbr").value);

    let hargaTotal=harga*jumlahbr

    if (jumlahbr>=100) {
        diskon=10/100*hargaTotal;
    }
    else if (jumlahbr>=50) {
        diskon=5/100*hargaTotal;
    }
    else if (jumlahbr>=5){
        diskon=1/100*hargaTotal;
    }
    else
        diskon=0;

    let total=hargaTotal-diskon;

    document.getElementById("total").value=total;
    document.getElementById("diskon").value=diskon
}