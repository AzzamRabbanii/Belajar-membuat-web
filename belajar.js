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

// const riyad = 'azzam'
// function ngenal() {
//     console.log(riyad)
//     if(true){
//         const santri = 'rabbani'
//         console.log(santri)
//     }
// }
// ngenal()

// tipe data di javascript ada 7
// - null 
// - undefined
// - boolean
// - number
// - bigInt
// - string
// - Symbol
// note : js merupakan salah satu loosely typed language (variable tidak terikat dengan 
// tipe data tersebut). Namun, nilai dari variable yg memiliki tipe data

// example :

// let name
// name = 'pak joko' sudah bisa langsung mengetahui tipe data tersebut
// name = 20


// pengecekan tipe data

// untuk pengecekan tipa data bisa menggunakan operator typeoof :
// eg :

//  let name
//  console.log(typeof name)

//  name = 'susan'
//  console.log(typeof name)

// Undifined

// Undifined merupakan tipe data primitive yg nilainya undifined atau tidak terdifinisikan
// ini merupakan tipe data default untuk variable yg tidak ada nilai

// contoh nya di baris ke 87

// null

// tipe data null adalah tipe data primitif yg nilainya null. bedanya hanya di letaknya saja dengan undifined

// let obj = null
// console.log(typeof obj)

// looping
 // contoh looping
//  let word = "hello"
//  for (let i = 0; i < word.length; i++){
//      console.log(word[i])
//  }

// Number

// tipe data yg mewakili angka, biasanya bilangan bulat, floating atau desimal

// eg :

// let num  = 100
// let nim = -100
// let des = 10.2

// NaN (Not a Number)

// NaN (Not a Number) merupakan nilai numeric spesial 

// String

// tipe data string merupakan salah satu tipe data yg berhubungan denga karakter
// cirinya menggunakan 'contoh' atau "contoh"

// Boolean

// let belajar = true
// if (belajar){
//     console.log('10 rpl b sedang belajar webbpjs')
// }

// Object

// let emptyObject = {}

// let identitas = {
//     id = 1,
//     firstName = 'not',
//     lastName = 'nots',
//     age = 18
// }

// object lengkap
// let biodata = {
//     firstName : 'azzam',
//     lastName : 'rabbani',
//     email : 'contoh12@gmail.com',
//     phone : '0504588408',
//     address : {
//         city : 'cilegon',
//         state : 'banten',
//         country : 'indonesia'
//     }
// }

// console.log(biodata.firstName)

// Template Literal

// const firstName = 'azzam'
// const lastName = 'rabbani'

// console.log(`Hello ${firstName} ${lastName}, samlong ni kha rpl b`)

// Shorthand Property Names

// let a = 1
// let b = 2
// let c = 3

// cara singkat
// let a = 1, b = 2, c = 3

// shorthand property names
// let [a,b,c] = [3,4,5]

// console.log(`${a} + ${b} = ${c}`)

// Function

// merupakan sebuah kode yang digunakan untuk membungkus suatu proses agar tidak ditulis kembali secara berulang

// penulisan function, ada yg memiliki parameter dan ada yg tidak memiliki parameter

// contoh function dengan parameter
// function example(parameter) {
//     console.log(parameter)
// }
// example('ini function dengan parameter')

// Arrow function

// const example = (parameter) =>{
//     console.log(parameter)
// }
// example('ini function dengan parameter menggunakan arrow function')

// cara simple dengan menggunakan back tis
// let hitung = (angka1, angka2) => `${angka1} dikali ${angka2} = ${angka1 * angka2}`
// console.log(hitung(10, 3)) 

// high order
// function yang menerima argumen berupa function lain

// callback function
// function yg akan menjadi argumen dalam pemanggilan high order funtion 

//  function genap(number) {
//      return number % 2 == 0
//  }
//  function printGenap(number) {
//      const isTrue = genap(number)
//      if(isTrue){
//          console.log(`bilangan ${number} adalah bilangan genap`)
//      }else {
//          console.log(`bilangan ${number} adalah bilangan ganjil`)
//      }
//  }
//  printGenap(12)

//  function color(car) {
//      car == 'merah'
//  }

//  function warna(car, callback) {
//      let isTrue = callback(car)
//      if(isTrue){
//          console.log(` mobil ${car} itu punya saya`)
//      }else{
//          console.log(` mobil ${car} itu bukan punya saya`)
//      }
//  }
//  warna('merah',color)

function genap(number) {
    return number % 2 == 0
}
function printGenap(number, callback) {
    const isTrue = callback(number)
    if(isTrue){
        console.log(`bilangan ${number} adalah bilangan genap`)
    }else {
        console.log(`bilangan ${number} adalah bilangan ganjil`)
    }
}
printGenap('10', genap )
