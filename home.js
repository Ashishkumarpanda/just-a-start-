function age(){
var birthYear=prompt("Enter your birth year");
var days=(2020-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('you are'+ days +'days old');
h1.setAttribute('id','age');
h1.appendChild(textAnswer);
document.getElementById('flex-result').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}
