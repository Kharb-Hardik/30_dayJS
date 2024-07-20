// 1 2 3 4 5
const cal= (a=99,b=2)=>{
    console.log(a+b);//16
    console.log(a-b);//4
    console.log(a*b);//60
    if(b!=0){
        console.log(a/b);//1.6667
        console.log(a%b);//4
    }
}
cal(10,6);

//6 7
let a=10;
function ca(b){
    console.log(a+=b)//15
    console.log(a=a-b)//10 as a gets updated to 15 in the line before
}
ca(5)

//8 9 10
function cb(a, b) {
    console.log(a > b);   // true
    console.log(a < b);   // false
    console.log(a >= b);  // true
    console.log(a <= b);  // false
    console.log(a === b); // false
    console.log(a !== b); // true

}
cb(5,3);

//11 12 13
function cc(a, b, c, d) {
    console.log(a > b && c < d); // false
    console.log(a > b || c < d); // false
    console.log(!c < d);//true
}
cc(3,10,7,1)

//14
function sign(num) {
    const result = num>0?"positive":"negative";
    console.log(result);
}
sign(-5)//negative