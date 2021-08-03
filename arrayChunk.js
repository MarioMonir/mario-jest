const arrayChunk = (arr, int) => {
    if (!int) return [arr];
    let newArr = [[]];
    let lim = int;
    let j = 0;
    arr.map((el, idx) => {
        if (idx === lim) {
            lim += int;
            j++;
            newArr.push([]);
        }
        newArr[j].push(el);
    });
    return newArr;
};

module.exports = arrayChunk;
