const fullName = document.getElementById("fullName");
const birthDate = document.getElementById("birthDate");
const male = document.getElementById("male");
const female = document.getElementById("female");
const generate = document.getElementById("generate");
const citizen = document.getElementById("citizen");
const pesel = document.getElementById("pesel");

function calculateMonth(fullBirthDate, yearOfBirth) {
  const monthOfBirth = +fullBirthDate.substring(5, 7);

  if (yearOfBirth >= 1800 && yearOfBirth <= 1899) {
    return `${80 + monthOfBirth}`;
  } else if (yearOfBirth >= 1900 && yearOfBirth <= 1999) {
    return monthOfBirth<=9? `0${monthOfBirth}` : `${monthOfBirth}`;
  } else if (yearOfBirth >= 2000 && yearOfBirth <= 2099) {
    return `${20 + monthOfBirth}`;
  } else if (yearOfBirth >= 2100 && yearOfBirth <= 2199) {
    return `${40 + monthOfBirth}`;
  } else if (yearOfBirth >= 2200 && yearOfBirth <= 2299) {
    return `${60 + monthOfBirth}`;
  } else {
    alert("Wprowadź rok urodzenia jeszcze raz");
    throw new Error("Invalid year of birth");
  }
}

const drawNumbers = (min, max, numLenght=1) => {
    const drawnNum=Math.floor(Math.random() * (max - min) + min);

    return (drawnNum<100 && numLenght===3)? `0${drawnNum}` : `${drawnNum}`;
};

function genderDesignationHandler() {
  let number;
  if (female.checked) {
    number = drawNumbers(0, 9);

    return number % 2 === 0 ? number : 0;
  } else {
    number = drawNumbers(1, 10);

    return number % 2 !== 0 ? number : 1;
  }
}

function liczPesel() {
  const fullBirthDate = birthDate.value;
  const yearOfBirth = +fullBirthDate.substring(0, 4);
  //month of birth after necessary corrections depending on year of birth(see more in the Readme)
  const monthToPesel = calculateMonth(fullBirthDate, yearOfBirth);
  const dayToPesel = fullBirthDate.substring(8, 10);
  const freeRandom = drawNumbers(1, 999, 3);
  console.log({ freeRandom });

  //4th random number which value depends on gender of a citizen; females get even number (0 is treated as even), males get odd
  const genderDesigNumber = genderDesignationHandler();
  console.log({ genderDesigNumber });

  //getting all individual numbers which will be needed to calculate the control number
  const firstPeselNum = +yearOfBirth.toString().substring(2, 3);
  const secondPeselNum = +yearOfBirth.toString().substring(3, 4);
  const thirdPeselNum = +monthToPesel.substring(0, 1);
  const fourthPeselNum = +monthToPesel.substring(1);
  const fithPeselNum = +dayToPesel.substring(0, 1);
  const sixthPeselNum = +dayToPesel.substring(1);
  const seventhPeselNum = +freeRandom.substring(0, 1);
  const eighthPeselNum = +freeRandom.substring(1, 2);
  const ninethPeselNum = +freeRandom.substring(2, 3);
  const tenthPeselNum = genderDesigNumber;

  console.log({ firstPeselNum });
  console.log({ secondPeselNum });
  console.log({ thirdPeselNum });
  console.log({ fourthPeselNum });
  console.log({ fithPeselNum });
  console.log({ sixthPeselNum });

  console.log(
    `${firstPeselNum}${secondPeselNum}${thirdPeselNum}${fourthPeselNum}${fithPeselNum}${sixthPeselNum}${seventhPeselNum}${eighthPeselNum}${ninethPeselNum}${tenthPeselNum}`
  );

  let dziesiatPesel = liczbaOznPlci;

  //weryfikacja czy kolejne liczby z Peselu przemnożone przez kolejną wagę są jedno czy dwu cyfrowe
  let pierwKontr = pierPesel * 1;
  let drugaKontr =
    drugaPesel * 3 >= 10
      ? parseInt((drugaPesel * 3).toString().substring(1, 2), 10)
      : drugaPesel * 3;

  let trzeKontr =
    trzeciaPesel * 7 >= 10
      ? parseInt((trzeciaPesel * 7).toString().substring(1, 2), 10)
      : trzeciaPesel * 7;
  let czwartKontr =
    czwartaPesel * 9 >= 10
      ? parseInt((czwartaPesel * 9).toString().substring(1, 2), 10)
      : czwartaPesel * 9;
  let piataKontr = piataPesel * 1;
  let szostaKontr =
    szostaPesel * 3 >= 10
      ? parseInt((szostaPesel * 3).toString().substring(1, 2), 10)
      : szostaPesel * 3;
  let siodmaKontr =
    siodmaPesel * 7 >= 10
      ? parseInt((siodmaPesel * 7).toString().substring(1, 2), 10)
      : siodmaPesel * 7;
  let osmaKontr =
    osmaPesel * 9 >= 10
      ? parseInt((osmaPesel * 9).toString().substring(1, 2), 10)
      : osmaPesel * 9;
  let dziewKontr = dziewiatPesel * 1;
  let dziesiatKontr =
    dziesiatPesel * 3 >= 10
      ? parseInt((dziesiatPesel * 3).toString().substring(1, 2), 10)
      : dziesiatPesel * 3;

  function liczKontrolna() {
    //dodajemy sumę wszystkich liczb z peselu przemnożonych przez wagę
    let sumaWag =
      pierwKontr +
      drugaKontr +
      trzeKontr +
      czwartKontr +
      piataKontr +
      szostaKontr +
      siodmaKontr +
      osmaKontr +
      dziewKontr +
      dziesiatKontr;
    console.log("TCL: liczKontrolna -> sumaWag", sumaWag);
    //zmiana logiki wyliczania liczby kontrolnej-> strona ministerialna nie podaje co jeśli modulo z 10 dla sumy wag poszczególnych liczb z Peselu wynosi 0-> wtedy odejmowanie od 10 daje 10; według informacji z internetu dla takiej sytuacji jako cyfrę kontrokną należy przyjąć 0
    let sumaWagModulo10 = sumaWag % 10;
    console.log("sumaWagModulo10", sumaWagModulo10);

    if (sumaWagModulo10 == 0) {
      return 0;
    } else {
      return 10 - sumaWagModulo10;
    }
  }

  let liczbaKontrolna = liczKontrolna();
  console.log("liczbaKontrolna:", liczbaKontrolna);

  //wstrzykiwanie obliczonej zawartości do spana 'Pesel'
  pesel.innerText = `${pierwDruga}${trzeciaCzwarta}${piataSzosta}${trzyLos}${liczbaOznPlci}${liczbaKontrolna}`;
}

generate.addEventListener("click", liczPesel);
