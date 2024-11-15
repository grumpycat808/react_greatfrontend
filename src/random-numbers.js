export const generateRandomNumbers = (num, upper) => {
    const randomNumbers = []
    let counter = 0;
    while(counter < num) {
        const randomNum = Math.floor(Math.random() * upper)
        if (!randomNumbers.includes(randomNum)) {
            randomNumbers.push(randomNum)
            counter++;
        } 
    }
    return randomNumbers
}
