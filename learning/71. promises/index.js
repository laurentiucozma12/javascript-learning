// Example1
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 is complete");
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2 is complete");
        }, 1500);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 3 is complete");
        }, 2500);
    });
}

function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 4 is complete");
        }, 500);
    });
}

task1().then(value => {console.log(value); return task2()})
       .then(value => {console.log(value); return task3()})
       .then(value => {console.log(value); return task4()})
       .then(value => {console.log(value)});


// Example 2:
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dogWalked = true;

            if (dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("You didn't walk the dog");
            }

        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dogWalked = true;

            if (dogWalked) {
                resolve("You cleaned the kitchen");
            } else {
                reject("You didn't clean the kitchen");
            }

        }, 1500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dogWalked = true;

            if (dogWalked) {
                resolve("You took out the trash");
            } else {
                reject("You didn't take out the trash");
            }

        }, 1500);
    });
}

// That's how you use promises, instead of using callbacks until you go in callback hell
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the tasks")})
         .catch(error => console.error(error));