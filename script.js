// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
// console.log(hotel);

// const userData = ['dima',26,'kyiv','yellow','circle']
// const userData = {
//     userName:'marko',
//     userAge:12,
//     userArea: 'Lviv',
//     myFood: 'piza',
//     work: 'Developer',
//     showHello: function () {
//         console.log(`My name is ${this.userName} i'm ${this.userAge} years old, i live in ${this.userArea}, i like  ${this.userColor} ${this.userMathSymbol}`);
        
//        alert(this.userName) 
//     },
    
//     userColor: 'green',
//     userMathSymbol: 'circle',

// }
// userData.showHello()
// delete userData.userAge
// console.log(userData.rich)

//1
//  const hello = {
//      name: 'marko',
//      userAge:12,
//     gender:'Male',
//     showInf:function(){
//         console.log(this.name,userAge,gender)
//     }

//   };
//   hello.showInf();
//  console.log(hello);

//2
// const hello = [
//     {
//         studentName: 'Marcus',
//         age: 20,
//         gender: "male",
//         grade: 200
//     },
//     {
//         studentName: 'Connor',
//         age: 20,
//         gender: "male",
//         grade: 1
//     },
//     {
//         studentName: 'Kara',
//         age: 20,
//         gender: "female",
//         grade: 10
//     },
//     {
//         studentName: 'Anderson',
//         age: 7890,
//         gender: "male",
//         grade: 10
//     }
// ];

// function grade(students) {
//     let totalGrade = 0;
//     for (let index = 0; index < students.length; index++) {
//         console.log(students[index]);
//         totalGrade += students[index].grade;
//     }
//     return totalGrade / students.length;
// }

// console.log(grade(hello));

//3
// const book = {
//          title: 'Wjrt#ZH',
//          author:'marko',
//         year: 1978,
//         genre: 'krimis',
//         changeInf:function(newTitle,newAuthor,newYear,newGenre){
//            this.title = newTitle
//            this.author = newAuthor
//            this.year = newYear
//            this.genre = newGenre
//         }
//     }
// book.changeInf('Avatar','vovchyk',2025,'Sport')
// console.log(book.title,book.author,book.year,book.genre);


//4
// const car = {
//     brand:'PORSCHE',
//     model: 'GT3',
//     color: 'green',
//     showHello: function () {
//         console.log(`My car is ${this.brand} model ${this.model} and its ${this.color}`);
//     },
// }
// car.showHello()

//5
// const book = {
//          name: '3 pigs',
//          cuisine:'Ukrainian',
//        address : 'Los Angeles,ohio street 257' ,
//         rating:'5 star',
//         changeInf:function(newAddress,newRating,){
//            this.address = newAddress
//            this.rating = newRating

//         }
//     }
// book.changeInf('Lviv,Horodotska street 54','100 star')
// console.log(book.address,book.rating);
