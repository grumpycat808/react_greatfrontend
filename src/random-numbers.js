export const generateRandomNumbers = (num, upper) => {
    const randomNumbers = []
    let counter = 0
    while (counter < num) {
        const randomNum = Math.floor(Math.random() * upper)
        if (!randomNumbers.includes(randomNum)) {
            randomNumbers.push(randomNum)
            counter++
        }
    }
    return randomNumbers
}

// const generateRandomNumber = (upper) => {
//     return Math.floor(Math.random() * upper + 1)
// }

export const shuffle = (array) => {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
 