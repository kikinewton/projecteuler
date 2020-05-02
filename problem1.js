// Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiple3and5Sum(upperLimit){
    const set3 = new Set();
    const set5 = new Set();
    //check if number is higher than 3 or 5
    if(upperLimit < 3 || upperLimit < 5){
        return 'The upper limit is invalid';
    }
    //for multiples of 3 add to set3
    for(let i = 3; i < upperLimit; i = i + 3){
        if (i % 3 === 0){
            set3.add(i);
        }
    }
    //for multiples of 5 add to set5
    for (let i = 5; i < upperLimit; i = i + 5) {
        if (i % 5 === 0) {
            set5.add(i)
        }
    }
    //append elements of set3 to set5
    for (const x of set3) {
        set5.add(x);
    }
    //destructure set5 into and array and find sum of elements
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return [...set5].reduce(reducer, 0);
    
}

console.log(multiple3and5Sum(1000));
