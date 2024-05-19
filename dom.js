document.getElementById('container')
console.log('parent', container.parentElement)
console.log('nextSibling', container.nextElementSibling)
console.log('previousSibling', container.previousElementSibling)
console.log(container.children);
console.log('firstChild', container.firstElementChild);
console.log('lastChild', container.lastElementChild);

const html = document.documentElement;
console.log({ html });

console.log(document.body);

//UPDATING DOM

const heading = document.getElementById("heading")
heading.innerHTML = 'Introduction to DOM Manipulation'
heading.style.color = "red"


// CREATE DOM
const textChild = document.createElement('p')
container.appendChild(textChild)
textChild.innerHTML = 'This is the new Child'


// DELETE DOM
heading.remove()

const button = document.getElementById('button');
button.style.border = 'none'
button.style.padding  = "10px 15px"
button.style.borderRadius = '5px'
button.style.cursor = "pointer"
button.style.backgroundColor ='#0096FF'
button.style.color = "#FFFFFF"



button.addEventListener('click' ,function(){
    button.innerHTML='clicked'
    button.style.backgroundColor = "#50C878"
});
