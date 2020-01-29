let btn=document.getElementById('generate');

function pesel(){
    let namePerson=document.getElementById('namePerson');
    let imieNazwisko=document.getElementById('imieNazwisko');
    namePerson.innerText=imieNazwisko.value
    let date=document.getElementById('dataUrodzenia').value
    let pesel=document.getElementById('pesel');
    let pierwDruga=date.substring(2,4);
    let trzeciaCzwarta=parseInt(date.substring(5,7),10);
    pesel.innerText=`${pierwDruga}${trzeciaCzwarta+20}`
}





btn.addEventListener('click', pesel);