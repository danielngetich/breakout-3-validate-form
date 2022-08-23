document.addEventListener('DOMContentLoaded', () => {
let btn=document.getElementById("sign_up_button");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    validate();
})
})
const first = document.getElementById('first_name');
const last = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
 
function validate(){
    if (first.value!==""&&last.value!==""&&email.value!==""&&password.value!==""){
        console.log(first.value)
        console.log(last.value)
        console.log(email.value)
        console.log(password.value)
    }else(
        console.log("All input mandatory")
    )
}
























//     let btn = document.getElementById('sign_up_button');
//     btn.addEventListener('submit', (e) => {
//         e.preventDefault();
//         validateInput();
//     })
// })
// const first = document.getElementById('first_name');
// const last = document.getElementById('last_name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// // function validateInput() {
// //     if (first == "" && last == "" && email == "" && password == "") {
// //         alert("Name must be filled out");
// //         return false;
// //     }else {
//        console.log(first.value);
//        console.log(last.value);
//        console.log(email.value);
//        console.log(password.value);
//     }
// }