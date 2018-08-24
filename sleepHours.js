function getSleepHours(day) {
  switch(day) {
    case `monday`:
  	  return 8;
  	  break;
    case `tuesday`:
    	return 8;
   		break;
   		case `wednesday`:
    return 8;
    	break;
    	case `thursday`:
    return 8;
    	break;
    case `friday`:
    return 8;
    	break;
    case `saturday`:
    return 8;
    	break;
    case `sunday`:
    	return 8
    	break;
    default:
    	console.log("did you pick a day in lower case?")
  }
}


function getActualSleepHours() {
  return getSleepHours(`monday`) + getSleepHours(`tuesday`) + getSleepHours(`wednesday`) + getSleepHours(`thursday`) + getSleepHours(`friday`) + getSleepHours(`saturday`) + getSleepHours(`sunday`)

}


function getIdealSleepHours() {
  let idealHours = 6;
  return idealHours * 7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours()); // need to include () to invoke the function

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let amount = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log(`Congratz you get enough sleep. ${amount} hours!`)
  } else if (actualSleepHours !== idealSleepHours) {
    console.log(`Oh no, you dont get enough sleep! ${amount} hours!`)
  } else {
    console.log(`You are getting more sleep then you need! ${amount} hours!`)
  }
 }
calculateSleepDebt();