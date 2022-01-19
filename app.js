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

function hello(){
    if(true){
        let manggil = 'halo mate'
        console.log(manggil)
    }
    console.log(manggil)
}
hello()