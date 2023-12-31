/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(obj){
    for (let key in obj) return (obj[key] === username);
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let i = usersArray.findIndex(function(obj){
    return (obj.username === username);
  })
  if (i !== -1){
    return usersArray.splice(answerIndex, 1)[0];
  }
  

//     return usersArray.find(function(obj){
//     for (i = 0; i < usersArray.length; i++){
//     if (obj.username === username){
//       usersArray.splice(i, 1)
//       return true;
//     }
//   }
// })
 //another option
  // return usersArray.find(function(obj){
  //   let i = usersArray.indexOf(obj);
  //   for (let key in obj)
  //   if (obj[key] === username){
  //     usersArray.splice(i, 1)
  //     return true;
  //   }
  // })
}