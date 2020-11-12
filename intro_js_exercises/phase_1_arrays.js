Array.prototype.uniq = function () {
    const newArray = [];
    this.forEach(function (el) {
        if (!newArray.includes(el)){
            newArray.push(el)
        };
    });
    return newArray;
};

console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twoSum = function () {
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        for (let i2 = 0; i2 < this.length; i2++) {
            if ((i2 > i) && (this[i] + this[i2] === 0)){
                newArray.push([i, i2]);
            }
        }
    }
    return newArray;
}

console.log([1,3,-1,5,6,8,-7,7,-5].twoSum())

Array.prototype.transpose = function () {
    const newArray = [];
    this[0].forEach( function () {
        newArray.push([]);
    });
    for (let i = 0; i < this.length; i++){
        this[i].forEach(function (el, idx) {
            newArray[idx].push(el);
        });
    };


    return newArray;
}

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose());
console.log([[1, 2, 3, 4, 3, 5], [4, 5, 6, 7, 8, 10]].transpose());