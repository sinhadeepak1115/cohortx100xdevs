function counter(a){
    for ( let i=a; i>0;i--){
        console.log(i);
    }
}
let con=30;
console.log(counter(con))

function Clock(){
    const now = new Date();
    const hour = now.getHours().toString();
    const min = now.getMinutes().toString();
    const sec = now.getSeconds()
    
    console.log(`${hour}:${min}:${sec}`);
}
setInterval(Clock,1000)
console.log(Clock())