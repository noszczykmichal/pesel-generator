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
    return monthOfBirth <= 9 ? `0${monthOfBirth}` : `${monthOfBirth}`;
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

const drawNumbers = (min, max, numLenght = 1) => {
  const drawnNum = Math.floor(Math.random() * (max - min) + min);

  return drawnNum < 100 && numLenght === 3 ? `0${drawnNum}` : `${drawnNum}`;
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

function calculateControlNum(...allNums) {
  //summing up all numbers that were got from multiplying individual numbers from Pesel number by their weight; sum that was calculated is then devided by modulo of 10; on the Government's' site there is no clear info what happens if modulo of 10 from sum gives 0; according to the info found on the Internet then the control number equals 0
  const sumByModule10 = allNums.reduce((curr, prev) => curr + prev) % 10;

  return sumByModule10 === 0 ? 0 : 10 - sumByModule10;
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
  const ninthPeselNum = +freeRandom.substring(2, 3);
  const tenthPeselNum = genderDesigNumber;

  console.log(
    `${firstPeselNum}${secondPeselNum}${thirdPeselNum}${fourthPeselNum}${fithPeselNum}${sixthPeselNum}${seventhPeselNum}${eighthPeselNum}${ninthPeselNum}${tenthPeselNum}`
  );

  //caclulation of the control number- each of ten previously calculated numbers that make up Pesel number has to be multiplied by given weight

  const firstToControl = firstPeselNum * 1;
  const secondToControl =
    secondPeselNum * 3 >= 10
      ? +(secondPeselNum * 3).toString().substring(1)
      : secondPeselNum * 3;
  const thirdToControl =
    thirdPeselNum * 7 >= 10
      ? +(thirdPeselNum * 7).toString().substring(1)
      : thirdPeselNum * 7;
  const fourthToControl =
    fourthPeselNum * 9 >= 10
      ? +(fourthPeselNum * 9).toString().substring(1)
      : fourthPeselNum * 9;
  const fithToControl = fithPeselNum * 1;
  const sixthToControl =
    sixthPeselNum * 3 >= 10
      ? +(sixthPeselNum * 3).toString().substring(1)
      : sixthPeselNum * 3;
  const seventhToControl =
    seventhPeselNum * 7 >= 10
      ? +(seventhPeselNum * 7).toString().substring(1)
      : seventhPeselNum * 7;
  const eighthToControl =
    eighthPeselNum * 9 >= 10
      ? +(eighthPeselNum * 9).toString().substring(1)
      : eighthPeselNum * 9;
  const ninthToControl = ninthPeselNum * 1;
  const tenthToControl =
    tenthPeselNum * 3 >= 10
      ? +(tenthPeselNum * 3).toString().substring(1)
      : tenthPeselNum * 3;

  console.log({ firstToControl });
  console.log({ secondToControl });
  console.log({ thirdToControl });
  console.log({ fourthToControl });
  console.log({ fithToControl });
  console.log({ sixthToControl });
  console.log({ seventhToControl });
  console.log({ eighthToControl });
  console.log({ ninthToControl });
  console.log({ tenthToControl });

  const controlNum = calculateControlNum(
    firstToControl,
    secondToControl,
    thirdToControl,
    fourthToControl,
    fithToControl,
    sixthToControl,
    seventhToControl,
    eighthToControl,
    ninthToControl,
    tenthToControl
  );

  console.log({ controlNum });

  //wstrzykiwanie obliczonej zawartości do spana 'Pesel'
//   pesel.innerText = `${pierwDruga}${trzeciaCzwarta}${piataSzosta}${trzyLos}${liczbaOznPlci}${liczbaKontrolna}`;
}
generate.addEventListener("click", liczPesel);
