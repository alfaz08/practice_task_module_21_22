function onlyPositive(arr){
  let extraArray=[];
  for(let i=0;i<=arr.length;i++){
    if(arr[i]<1){
       break;
    }
   extraArray.push(arr[i]);
  }
  return extraArray;
}
const array = [45,87,96,11,63,-56,71,28,100,-96,96,-698,85,99,90,48]
const finalOutput = onlyPositive(array);
console.log(finalOutput);
