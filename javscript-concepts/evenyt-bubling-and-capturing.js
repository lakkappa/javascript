const demo = "Hello World";
console.log(demo);

document.getElementById("grand").addEventListener('click', (e) => {
    console.log('grand clicked');

}, false)
document.getElementById("parent").addEventListener('click', (e) => {
    console.log('parent clicked');

}, true)
document.getElementById("child").addEventListener('click', (e) => {
    console.log('child clicked');
}, false)
