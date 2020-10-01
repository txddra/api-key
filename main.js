// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.


// // Weather API- https://openweathermap.org/api
// // Weather/Air Quality API-  https://www.airvisual.com/dashboard/api
// // Recipe API- https://developer.edamam.com/ (uses two key code)
// // Superheroes API- https://superheroapi.com/index.html
// // Movies API- https://www.omdbapi.com/
// // Sports API - https://allsportsapi.com/
// // News API - https://newsapi.org/
// // Harvard Art Museum API - https://www.harvardartmuseums.org/collections/api


// If you want to make your project a little more robust and dynamic you could use tools like the ones below:
// Read the docs to see how it works. Not hard.


// Readline: https://nodejs.org/api/readline.html
// OR
// Inquirer: https://www.npmjs.com/package/inquirer
// Read the docs to find out how to use. Pretty intuitive.



const fetch = require('node-fetch');
// const axios = require('axios');

//security reasons
let key = require('./key.js');
let id = require('./id.js');
//whatever string given 
let ingredient = 'chicken';
let url = `https://api.edamam.com/search?q=${ingredient}&app_id=${id}&app_key=${key}`;





fetch(url)
.then((data) => data.json())
.then((newData) =>{
    //gives me the hits
    let arr = newData.hits
    arr.map((a)=>{
console.log(`Tonight you should have some: ${a.recipe.label}`);
console.log(' ')
// console.log(`All you need is: ${a.recipe.ingredientLines}/n`)
console.log(`Here's a link for this recipe: ${a.recipe.url}`)
    })}

)

















//     arr.forEach(element => {
//     if(element.hits){

//         console.log({element});
//     //     console.log(`Description: ${element.Description}`)
//     //     console.log(`Link: ${element.Link}`);
//     //     console.log(`Category: ${element.Category}`);
//     //     console.log('')
//     //     console.log('---')
//     //     console.log('')
//         }    });
// }
//     )
// .catch(error => console.log('error'))







// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question(`Give me an ingredient, and I'll give you a recipe `, (ingredient) => {
  // TODO: Log the answer in a database
// fetch(url)
//  .then((data)=> data.json())
     
 

// .then((newData)=> console.log(newData/*`you submitted: ${newData}`*/))

//   console.log(`Thank you for your valuable feedback: ${ingredient}`)
// .catch(error => console.log('Error!'))
//   rl.close();
// });


// // let whatsForDinner = new Promise


// function axiosGet(url){
//     axios.get(url).then((users)=> console.log(users.data))
//     .catch((err)=> console.log(err));

// }

// axiosGet(url)