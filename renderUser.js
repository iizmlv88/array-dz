"use strict"
const $container = document.querySelector('.container');

import {user} from './data.js';
console.log("-> user", user);

 const getUsers = async () => {
    const users = await fetch ('https://jsonplaceholder.typicode.com/users');
    const result = await users.json()
    if(users.status === 200){
    renderUser($container, result);
    }

}
getUsers();


    // ? each
    

function renderUser(element, users){
  
    users.forEach(user => {
        const {id, name, email, address, phone, company, website} = user;

           element.innerHTML += `
        <div class="user">
            <img src="https://randomuser.me/api/portraits/men/${id}.jpg" alt="user" class="user_img">
            <ul class="user_list">
                <li>name: ${name}</li>
                <li>email: ${email}</li>
                <li>adress: ${address.street}, ${address.suite}</li>
                <li>phone: ${phone}</li>
                <li>website: <a href="" class="list_link">${website}</a></li>
                <li>company: ${company.name}</li>
            </ul>
        </div>
    
    `
    
    })
    element.querySelectorAll('.user').forEach(item =>{
        item.addEventListener('click', (event) =>{
            console.log(event)
            // console.log(event.target.nodeName === 'DIV')

            if(event.target.nodeName === 'DIV'){
                favoriteUser(event.target)
            }
        })
    })
}
    


// ?
let favoriteUserList = []
function favoriteUser (user){


    const ul = user.querySelector(".user_list")
    console.log(ul.firstElementChild.textContent);
    favoriteUserList.push(ul.firstElementChild.textContent)
    console.log(favoriteUserList)

 const favoriteUsersElement = document.getElementById("favorite-users")
  const favoriteUserNames = favoriteUserList.map((name) => name.split(":")[1].trim())
  favoriteUsersElement.textContent = `${favoriteUserNames.join(", ")}`
}





// ! вивести фефоріт юзер на екран та забрати нейм





// // !--------------------
// import {user} from './data.js';
// console.log("-> user", user);
// const $container = document.querySelector('.container');
// console.log($container);

// function renderUser(element, data){

//     console.log("-> data", data[0]);

//     for (let i = 0; i < data.length; i++){
//         const {id, name, email, address, phone, company, website} = data[i];
//         element.innerHTML += `
//         <div class="user">
//             <img src="https://randomuser.me/api/portraits/women/${data[i].id}.jpg" alt="user" class="user_img">
//             <ul class="user_list">
//                 <li>name: ${data[i].name}</li>
//                 <li>email: ${data[i].email}</li>
//                 <li>adress: ${data[i].address.street}, ${data[i].address.suite}</li>
//                 <li>phone: ${data[i].phone}</li>
//                 <li>website: <a href="" class="list_link">${data[i].website}</a></li>
//                 <li>company: ${data[i].phone}</li>
//             </ul>
//         </div>
    
//     `
//     }
// }
// //!  renderUser($container, user);










// ! destruction

// const user = {
// "name": "Leanne Graham",
// "phone": "1-770-736-8031 x56442",
// "username": "Bret"
// }
// console.log(user.phone)

// const {name, phone, username} = user
// console.log(phone);