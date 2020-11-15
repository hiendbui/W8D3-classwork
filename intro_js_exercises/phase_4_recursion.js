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

const bsearch = function (arr, target) {
    if (arr === []) return -1;
    if (arr.length === 1 && arr[0] !== target) return -1;

    const midIdx = Math.floor(arr.length/2);
    const mid = arr[midIdx]

    if (mid === target) {
        return midIdx;
    } else if (target < mid) {
        const left = arr.slice(0, midIdx)
        return bsearch(left, target);
    } else {
        const right = arr.slice(midIdx);
        const result = bsearch(right, target);
        return result === -1 ? -1 : result + midIdx ;
    };
}

// console.log(bsearch([0, 1, 4, 5, 7, 11, 34, 39, 51], 34));
// console.log(bsearch([0, 1, 4, 5, 7, 11, 34, 39, 51], 2));

const mergeSort = function (arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = function (left, right) {
    const newArr = [];

    while (left.length > 0 && right.length > 0) {
        left[0] < right[0] ? newArr.push(left.shift()) : newArr.push(right.shift());
    };

    return newArr.concat(left.concat(right));
}

// console.log(mergeSort([3,1,6,10,43,23,1,4]))

const subsets = function (arr) {
    if (arr.length === 0) {
        return [[]];
    }

    const subSubset = subsets(arr.slice(1));

    const withFirst = subSubset.map(sub => [arr[0]].concat(sub));
    return subSubset.concat(withFirst);
}

console.log(subsets([1,2,3]))
