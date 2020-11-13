const range = function (start, end) {
    if (start === end) return [start];
    return [start].concat(range(start+1,end));
}

// console.log(range(1,10))

const sumRec = function (arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] + sumRec(arr.slice(1, arr.length));
}

// console.log(sumRec([0,3,7,1,5,1,5]))

const exponent1 = function (base, exp) {
    if (exp === 0) return 1;
    return base * exponent1(base, exp-1)
}

const exponent2 = function (base, exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;

    return (exp % 2 === 0) ? exponent2(base, exp / 2) ** 2 : base * (exp(base, (exp - 1) / 2) ** 2)
}

// console.log(exponent1(2,0));
// console.log(exponent1(3,4));
// console.log(exponent2(2, 0));
// console.log(exponent2(3, 4));

const fibonacci = function (n) {
    if (n === 1) return [0];
    if (n === 2) return [0,1];

    const prevFib = fibonacci(n - 1);
    const lastIdx = prevFib.length-1;
    return prevFib.concat(prevFib[lastIdx] + prevFib[lastIdx-1])
}

// console.log(fibonacci(12));

const deepDup = function (arr) {
    if (arr === [] || arr.length === 1) return arr;
    return [arr[0]].concat(deepDup(arr.slice(1,arr.length)));
}

// console.log(deepDup([5,6,7]))
