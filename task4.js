function bestFriend(arr){
   let max_str = arr[0].length;
   let ans = arr[0];
   for(let i=1;i<arr.length;i++){
    let maxi = arr[i].length;
    if(maxi>max_str){
      ans=arr[i];
      max_str =maxi;
    }
   }
   return ans;
}





const array= ['sajid','mamun','kamal','jamal','samal','alfaz  hossain']
let final = bestFriend(array);
console.log(final)

