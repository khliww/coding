function hitung() {
    let bil1=parseInt(document.getElementById("angka1").value);
    let bil2=parseInt(document.getElementById("angka2").value);
    let op=document.getElementById("operator").value;
    let hasil=0;
    switch (op) {
        case "+":
            hasil=bil1+bil2;
            break;
        case "-":
            hasil=bil1-bil2;
            break;
        case "*":
            hasil=bil1*bil2;
            break;
        case "/":
            hasil=bil1/bil2;
            break
        default:
            break        
    }
document.getElementById("hasil").value=hasil;
/* document.write(bil1+" "+op+" "+bil2+" = "+hasil); */
}