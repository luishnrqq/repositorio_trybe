const a = Math.floor(Math.random() * 100);
const b =  Math.floor(Math.random() *100);
const c =  Math.floor(Math.random() *100);

const p = "foram gerados a b, c respectivamente. A é maior";
const q = "foram gerados a b, c respectivamente. B é maior";
const r = "foram gerados a b, c respectivamente. C é maior";

if(a > b && a > c){
    console.log(a); console.log(b); console.log(c);
    console.log(p);
}
else if (b > a && b >c){
    console.log(a); console.log(b); console.log(c);
    console.log( q);
}

else{
    console.log(a); console.log(b); console.log(c);
    console.log(r);
}