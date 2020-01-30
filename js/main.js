let btn=document.getElementById('generuj');

function pesel(){
    //wstrzykiwanie Imienia i nazwiska
    let obywatel=document.getElementById('obywatel');
    let imieNazwisko=document.getElementById('imieNazwisko');
    obywatel.innerText=imieNazwisko.value
    // pierwsza i druga cyfra
    let data=document.getElementById('dataUrodzenia').value
    let pesel=document.getElementById('pesel');
    let pierwDruga=data.substring(2,4);
    //trzecia i czwarta cyfra peselu
    let trzeciaCzwarta=parseInt(data.substring(5,7),10);
    //piąta i szósta
    let piataSzósta=parseInt(data.substring(8,10),10);
    //trzy losowe
    function los(min,max){
        return Math.floor(Math.random()*(max-min)+min)
    }
    let trzyLos=los(100,999);
    pesel.innerText=`${pierwDruga}${trzeciaCzwarta+20}${piataSzósta}${trzyLos}`
}





btn.addEventListener('click', pesel);