//menuliskan function harus sama perti yang di tulis di input htmlnya yaitu total
function total(){
//pertama membuat variabel untuk menampung nilai hari yaitu variabel "perhari", memakai dom nya document getelment byid
//yang di maksud adalah tolong dokument.geetElement ambilkan elemen inputan yang ber id="hari" dan jam yang di html
var perhari=document.getElementById("hari").value;
var lembur=document.getElementById("jam").value;
var transport=document.getElementById("transport").value;
var makan=document.getElementById("makan").value;
//menghitung gajilembur, untuk variabel lembur menginputkan nilai jumlah jam
var gajiLembur=lembur*50000;
//menghitung gajiperhari, untuk variabel lembur menginputkan nilai jumlah hari
var gajiPerhari=perhari*100000;
//menghitung gajitransport, untuk variabel transport menginputkan nilai jumlah hari
var gajiTransport=transport*25000;
//menghitung gajimakan, untuk variabel makan menginputkan nilai jumlah hari
var gajiMakan=makan*20000;
var total=gajiLembur+gajiPerhari+gajiTransport+gajiMakan;



const btnKirim = Document.getElementById('.btn-kirim');
const btnLoading = Document.getElementById('.btn-loading');
const myAlert = Document.getElementById('.my-alert');

//ambil id bayar innerHTML adalah sebuah atribut di dalam (objek) elemen HTML yang berisi string HTML.
 //Dengan innerHTML , kita dapat menampilkan output ke elemen yang lebih
document.getElementById("bayar").innerHTML=total;
}
