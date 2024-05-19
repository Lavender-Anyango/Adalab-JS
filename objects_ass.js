books = [
    {title:'The Catcher in the Rye', author:'J.D', puplicationYear: 1951, isAvailable: true},
    {title:'Great Expectations', author:'J.D', puplicationYear: 1861, isAvailable: false}
]

 
// function getBooksByAuthor(books, name){
//     let array = []
//     for (i in books){
//         console.log(i)
//         if (i.author == name){
//             array.push(i)
//         }
//         return array
//     }
   
// }

// console.log(getBooksByAuthor(books, 'J.D'))

function getAvailableBooks(books){
    let availabe = books.filter(item => item.isAvailable == true).map(item => item)
    return availabe
}
console.log(getAvailableBooks(books))