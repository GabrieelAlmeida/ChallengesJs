/*
Challenge: Transform a years in century
Author: Gabriel
*/

//Inputs Elements
const inputElement = document.querySelector('#txtYear');
const btnElement = document.querySelector('#btnEnviar');
const pragraphElement = document.querySelector('#result');

//Method that capture the year and convert to century;
const centuryFromYears = year =>{
    let txt;
    let century;

    text = year.toString();
    
    if(text.charAt(text.length - 1) == 0 && (text.charAt(text.length - 2)) == 0){
        century = (parseInt(text)/100);
        return `We are in ${century} century`;
    }else{
        century = (year/100) + 1;
        txt = century.toString().split('.');
        return `We are in ${txt[0]} century`;
    }   
}

//Execution;
btnElement.onclick = () =>{
    pragraphElement.innerHTML = centuryFromYears(inputElement.value);
}

