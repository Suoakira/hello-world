let raceNumber = Math.floor(Math.random() * 1000);

let early = false;

let age;


if ( age > 18 && early) {
  raceNumber += 1000;
}

if (age > 18 && early) {
  console.log(`Your race will begin at 9:30am, and your race number is ${raceNumber}`)
} else if (age > 18 && !early) {
  console.log(`Your race will begin at 11:00am, and your race number is ${raceNumber}`)
} else if (age < 18) {
  console.log(`You will run later on at 12:30pm, and your race number is ${raceNumber}`)
} else {
  console.log(`Please go an see the registration desk`)
}

