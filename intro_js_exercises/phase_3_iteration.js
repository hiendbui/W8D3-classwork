Array.prototype.bubbleSort = function () {
    let sorted = false

    while (!sorted) {
        sorted = true
        for (i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]]
                sorted = false
            }
        }
    }
    return this
}

let arr = [4, 23, 5, 2, 5, 41, 4, 8, 13, 67, 1, 35];
console.log(arr.bubbleSort());

String.prototype.substrings = function () {
    let subStrArr = [];

    for (i = 0; i < this.length - 1; i++) {
        for (j = 0; j < this.length - 1; j++) {
            if (i <= j) subStrArr.push(this.slice(i,j));
        };
    };
    
    return subStrArr
}

let cogito = "I think"
console.log(cogito.substrings())