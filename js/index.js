const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu_navegacion');

console.log(menu)
console.log(menu_nav)

menu.addEventListener('click',()=>{

menu_nav.classList.toggle("spread")

})

window.addEventListener('click', e=>{

if(menu_nav.classList.contains('spread') && e.target != menu && e.target!= menu_nav)
{
    menu_nav.classList.toggle("spread")

}
})