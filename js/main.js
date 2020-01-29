let btn=document.getElementById('generate');

function pesel(){
    let namePerson=document.getElementById('namePerson');
    let imieNazwisko=document.getElementById('imieNazwisko');
    namePerson.innerText=imieNazwisko.value
    let date=document.getElementById('dataUrodzenia').value
    let pesel=document.getElementById('pesel');
    let pierwDruga=date.substring(2,4);
    pesel.innerText=`${pierwDruga}`
}





btn.addEventListener('click', pesel);