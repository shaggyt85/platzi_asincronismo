const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 5000);
    });

const cows = 15;

const countCow = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`we have ${cows} cows on the farm`);
    } else {
        reject('there is not cows on the farm');
    }
});

countCow.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('This is the end of the promise');
});