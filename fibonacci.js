const fibonacci = upto => {
    if (!upto || upto <= 0) return [0];
    if (upto === 1) return [0, 1];
    if (upto === 2) return [0, 1, 1];

    const fiboArray = [0, 1];

    let n1 = 0;
    let n2 = 1;
    let fiboNum = 1;

    while (fiboNum < upto) {
        fiboNum = n1 + n2;
        fiboArray.push(fiboNum);

        n1 = n2;
        n2 = fiboNum;
    }

    return fiboArray;
};

const fiboResult = fibonacci(55);
console.log(fiboResult);

module.exports = fibonacci;
