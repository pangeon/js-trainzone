var a = 1;

function* incr() {
    yield;
    console.log(++a);
}
function* decr() {
    yield;
    console.log(--a);
}
var var_incr = incr();
var var_decr = decr();

var_incr.next();
var_decr.next();
var_incr.next();
var_decr.next();





