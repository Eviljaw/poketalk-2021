// function favoritesHideAndShow(){
//     const group = document.querySelector(".group-favorites");
//     if(group.style.display==="none"){
//         group.style.display="";
//     }else{
//         group.style.display="none";
//     }
// }

function favoritesHideAndShow(){
    const group = document.querySelector(".group-favorites");
    group.classList.toggle("hide-show")
}

function friendsHideAndShow(){
    const group = document.querySelector(".group-friends");
    group.classList.toggle("hide-show")
}