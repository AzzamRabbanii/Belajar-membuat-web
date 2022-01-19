// let nama1 = 'john doe' //pendeklarasian variable
// let nama2 = 'johan'
// console.log(nama) //statement
// console.log(nama2)

// expresion

// expresion adalah code js untuk menghasilkan nilai tertentu

// let a = 10
// let b = 20
// let c = a * b   //statement yg berisi expresion / menghasilkan nilai tertentu
// console.log(c)

// block scope 

// function hello(){
//     if(true){
//         let manggil = 'halo mate'
//         console.log(manggil)
//     }
//     console.log(manggil)
// }
// hello()

// closure

// function hello(nama, kelas){
//     var a = 'nama :' +nama // nama adalah nama dari parameter
//     return function () {
//         console.log(a)
//     }
//     var b = 'kelas :' +kelas
//     return function () {
//         console.log(b)
//     }
// }
// var azzam = hello("  Muhammad Azzam Rabbani")
// azzam()

// var kelas = hello("  x rpl b")
// kelas()
 
// closure

// function tidur(nama, kelas){
//     console.log("Nama :", nama, "\nKelas :", kelas)
// }

// tidur("Muhammad Azzam Rabbani", "X RPL B")

// scope

let riyad = 'azzam'
function ngenal() {
    console.log(riyad)
    if(true){
        const santri = 'rabbani'
        console.log(santri)
    }
}
ngenal()