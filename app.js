let generateColor = document.querySelector('#button');
 let output = document.querySelector('#output');
 let container = document.querySelector('#container');

 generateColor.onclick = function(){
    let hexacode = ['0','1','2','3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';

    for(let i = 0; i < 6; i++){
       
        let num = Math.round(Math.random() * 15);
        let num2 = hexacode[num];

        color+= num2;

        container.style.backgroundColor = color;
        output.style.color = color;
        output.style.innerHTML = color;

    }
 };