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
    let piataSzósta=data.substring(8,10);
    //trzy losowe
    function los(min,max){
        return Math.floor(Math.random()*(max-min)+min)
    }
    let trzyLos=los(100,999);
    
    //oznaczenie płci
    let mezczyzna=document.getElementById('mezczyzna');
    let kobieta=document.getElementById('kobieta');
    let liczba=null;
    let liczba2=null;
    function plec(){
        if(kobieta.checked=== true){
            liczba=los(0,9);
            
            if(liczba % 2 == 0){
                return liczba
            }else{
                return 0
            }
        }else if(mezczyzna.checked===true){
            liczba2=los(1,10);
            console.log(liczba2)
            if(liczba2 % 2 != 0){
                return liczba2
            }else{
                return 1
            }    
    }
}
    let liczbaOznPlci=plec();
    pesel.innerText=`${pierwDruga}${trzeciaCzwarta+20}${piataSzósta}${trzyLos}${liczbaOznPlci}`

    
}




btn.addEventListener('click', pesel);