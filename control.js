let first = document.getElementById('first');
let second = document.getElementById('sec');
let third = document.getElementById('thi');
let fourth = document.getElementById('fou');
let last = document.getElementById('last');
let points = [first, second, third, fourth, last];
points[0].style.cssText = ` background-color: white; color: #333;`;
let count = 0;

let img = document.getElementById('img');


function next(){
    ++count;
    if(points[count]){
        points[count].style.cssText = ` background-color: white; color: #333; `
        points[count-1].style.cssText = ` background-color: #333; color: #FFF; `
    }
    if(count == 5){
        points[4].style.cssText = ` background-color: #333; color: #FFF; `
        points[0].style.cssText = ` background-color: #FFF; color: #333; `
        count = 0;
    }
    switch(count){
        case 0 : img.src = 'imgaes/1.png'; break;
        case 1 : img.src = 'imgaes/2.png'; break;
        case 2 : img.src = 'imgaes/3.png'; break;
        case 3 : img.src = 'imgaes/4.png'; break;
        case 4 : img.src = 'imgaes/5.png'; break;
    }
    console.log(count);
}