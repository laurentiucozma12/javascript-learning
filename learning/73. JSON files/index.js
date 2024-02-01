//////////////// JSON.stringify ////////////////
// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name" : "Spongebob",
//     "age" : "30",
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// };
// const people = [
//     {    
//         "name" : "Spongebob",
//         "age" : "30",
//         "isEmployed": true
//     },
//     {    
//         "name" : "Patrick",
//         "age" : "34",
//         "isEmployed": false
//     },
//     {    
//         "name" : "Squidward",
//         "age" : "50",
//         "isEmployed": true
//     },
//     {    
//         "name" : "Sandy",
//         "age" : "27",
//         "isEmployed": false
//     }
// ];
//
// console.log(people);
// const jsonString = JSON.stringify(people);
// console.log(jsonString);


//////////////// JSON.parse ////////////////
// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name" : "Spongebob", "age" : "30","isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
// const jsonPeople = `[{"name" : "Spongebob", "age" : "30", "isEmployed": true},
//                      {"name" : "Patrick", "age" : "34", "isEmployed": false},
//                      {"name" : "Squidward", "age" : "50", "isEmployed": true},
//                      {"name" : "Sandy", "age" : "27", "isEmployed": false}]`;
//
// console.log(jsonPeople);
// const parseData = JSON.parse(jsonPeople);
// console.log(parseData);


//////////////// FETCH a JSON file ////////////////
// fetch("person.json")
//     .then(response => response.json())
//     .then(value => console.log(value));
//
// fetch("names.json")
//     .then(response => response.json())
//     .then(value => console.log(value));
//
//
fetch("people.json")
    .then(response => response.json())
    // .then(values => values.forEach(value => console.log(value)))
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));