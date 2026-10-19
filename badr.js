// 1- B
// 2- A
// 3- D
// 4- D
// 5- B
// 6- A
// 7- A
// 8- A
// 9- D





const users =[
    {
        name:"badr",
        password:4567,
    },
    {
       name:"ahmed",
        price:7000,  
    }
]


function careatUser() {
    let newName = prompt("enter new name");
    let newPassword = +prompt("enter new password");

const newUser = {
    name: newName,
    password: newPassword,
}
    users.push(newUser);
    console.log(users);
    showUsers()
}

function showUsers() {
    console.clear()
  for (let i = 0; i < users.length; i++) {
      console.log(`${i +1}- ${users[i].name} => ${users[i].price}`)
  }
}
showUsers();
function deletUser() {
    let indexDel = prompt("enter user") - 1;
    users.splice(indexDel, 1)
  showUsers();

    
}
function updateUser() {
    let indexupdet = prompt("enter user") - 1;
    const newName  = prompt("enter new name");
    const newPassword = prompt("enter new password");

    const newUser = {
        name: newName,
        password:newPassword,
    }
    users.splice(indexupdet, 1,newUser)
    showUsers();

}




