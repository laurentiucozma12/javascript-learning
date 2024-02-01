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