let btn=document.getElementById('generuj');

function liczPesel(){
    //wstrzykiwanie Imienia i nazwiska
    let obywatel=document.getElementById('obywatel');
    let imieNazwisko=document.getElementById('imieNazwisko');
    obywatel.innerText=imieNazwisko.value
    // pierwsza i druga cyfra
    let data=document.getElementById('dataUrodzenia').value
    console.log('wartość zmienna data:', data)
    let pesel=document.getElementById('pesel');
    let pierwDruga=data.substring(2,4);
    // console.log("TCL: liczPesel -> pierwDruga", pierwDruga)
    
    //trzecia i czwarta cyfra peselu
    let rok=parseInt(data.substring(0,4),10) 
    console.log('zmienna rok:',rok);
    let miesiacDoPeselu=parseInt(data.substring(5,7),10);
    // console.log("miesiacDoPeselu", miesiacDoPeselu)

    let trzeciaCzwarta= rok<2000? data.substring(5,7):miesiacDoPeselu+20
    // console.log("trzeciaCzwarta", trzeciaCzwarta)
    
    //piąta i szósta
    let piataSzosta=data.substring(8,10);
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
            
            if(liczba2 % 2 != 0){
                return liczba2
            }else{
                return 1
            }    
    }
}
    let liczbaOznPlci=plec();
    //wstrzykiwanie obliczonej zawartości do spana 'Pesel'
    pesel.innerText=`${pierwDruga}${trzeciaCzwarta}${piataSzosta}${trzyLos}${liczbaOznPlci}`   

    //liczba kontrolna do Peselu
    //każda liczba jest zamieniana ze stringa na liczbę ponieważ później będzie konieczne wykonanie na niej zadań matematycznych
    let pierPesel=parseInt(pierwDruga.substring(0,1),10);
    let drugaPesel=parseInt(pierwDruga.substring(1,2),10);
    //obliczam trzecią liczbę kontrolną najpierw pobieram liczbę 3-cią i 4-tą, które są przekazywane do wyświetlenia, a później przepuszczam przez metodę toString(), żeby później za pomocą metody subString złapać odpowiednią liczbę na której będę mógł dokonywać obliczeń.Na koniec zamieniam string na number
    let trzeciaPesel=parseInt(trzeciaCzwarta.toString().substring(0,1),10);
    let czwartaPesel=parseInt(trzeciaCzwarta.toString().substring(1,2),10);
    let piataPesel=parseInt(piataSzosta.substring(0,1),10);
    let szostaPesel=parseInt(piataSzosta.substring(1,2),10);
    let siodmaPesel=parseInt(trzyLos.toString().substring(0,1),10);
    let osmaPesel=parseInt(trzyLos.toString().substring(1,2),10);
    let dzwiatPesel=parseInt(trzyLos.toString().substring(2,3),10);
    let dziesiatPesel=liczbaOznPlci;
    
    
    
   
    
    
    

    
    console.log(pierPesel,drugaPesel,trzeciaPesel,czwartaPesel, piataPesel, szostaPesel, siodmaPesel,osmaPesel,dzwiatPesel, dziesiatPesel);

    //wstrzykiwanie obliczonej zawartości do spana 'Pesel'
    pesel.innerText=`${pierwDruga}${trzeciaCzwarta}${piataSzosta}${trzyLos}${liczbaOznPlci}` 
}




btn.addEventListener('click', liczPesel);