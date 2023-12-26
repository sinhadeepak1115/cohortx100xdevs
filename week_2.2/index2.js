// learning map function 

const input = [1,2,3,27,34,567,76,23];
function double(arr) {
  return arr * 2;
}

const ans = input.map(double);
console.log(ans)

// arrow funtion


// filter
const ans1  = input.filter(function (n) {
  if (n%2==0){
    return true;
  }else{
    return false;
  }
});

console.log(ans1);
