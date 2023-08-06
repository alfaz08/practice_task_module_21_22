function paperRequirments(book1Quantity,book2Quantity,book3Quantity){
  const book1total = book1Quantity * 100;
  console.log(book1total)
  const book2total = book2Quantity * 200;
  console.log(book2total)
  const book3total = book3Quantity * 300;
  console.log(book3total)
  const booktotal = book1total+book2total+book3total;
  return booktotal;
} 
let totalQuantity = paperRequirments(3,5,7);
console.log(totalQuantity);

