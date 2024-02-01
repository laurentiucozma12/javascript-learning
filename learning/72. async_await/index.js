function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dogWalked = false;

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
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the tasks")})
//          .catch(error => console.error(error));

// But you can use async and await
async function doChores() {

    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finished all the chores")
    }
    catch(error) {
        console.error(error);
    }
}

doChores();