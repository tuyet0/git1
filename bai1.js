function Xuandat(){
    var number = 1
    function Con() {
        return number++
    }
    return Con
}

var b = Xuandat();

console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b());