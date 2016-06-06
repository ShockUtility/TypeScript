function f1(x,) {}

f1(1,);

function f2(...args,) {}

f2(...[],);

// Not confused by overloads
declare function f3(x, ): number;
declare function f3(x, y,): string;

<number>f3(1,);
<string>f3(1, 2,);

// Works for constructors too
class X {
    constructor(a,) { }
    // *Not* allowed in getter
    get x(,) { return 0; }
    set x(value,) { }
}
interface Y {
    new(x,);
    (x,);
}

new X(1,);
