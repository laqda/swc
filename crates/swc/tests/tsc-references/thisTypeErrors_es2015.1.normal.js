var x1;
var x2;
var x3;
function f1(x) {
    var y;
    return this;
}
class C1 {
}
class C2 {
    static foo(x) {
        return undefined;
    }
}
C2.y = undefined;
var N1;
(function(N11) {
    var x;
    N11.y = this;
    N11.x = x;
})(N1 || (N1 = {
}));
class C3 {
    f() {
        function g(x) {
            return undefined;
        }
        let x2 = {
            h (x) {
                return undefined;
            }
        };
    }
    constructor(){
        this.x1 = {
            g (x) {
                return undefined;
            }
        };
    }
}
