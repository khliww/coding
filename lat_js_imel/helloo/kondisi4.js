let jbtn=prompt("Masukkan jabatan pegawai");

switch (jbtn) {
    case "direktur":
        gaji=20000000;
        break;
    case "manager":
        gaji=10000000;
    break;
    
    default:
        gaji=7500000

        break;
}

document.write("Jadi gaji "+jbtn+" adalah "+gaji)