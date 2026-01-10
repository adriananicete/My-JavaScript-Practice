let score = 89;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 75) {
  console.log("Grade C");
} else {
  console.log("Failed");
}

switch (score) {
    case 90 :
        console.log('Grade A');
        break;
    case 80 :
        console.log('Grade B');
        break;
    case 75 :
        console.log('Grade C')
        break;
    case 74 :
        console.log('FAILED');
        break;
    default :
    console.log('Nothing is Matched')
}

let day = 7;

switch ( day ) {
    case 1 :
        console.log('Sunday');
        break;
    case 2 :
        console.log('Monday');
        break;
    case 3 :
        console.log('Tuesday');
        break;
    case 4 :
        console.log('Wednesday');
        break;
    case 5 :
        console.log('Thursday');
        break;
    case 6 :
        console.log('Friday');
        break;
    case 7 :
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day')



}

let role = 'basss';

switch (role) {
    case 'guitarist' :
        console.log('Adrian');
        break;
    case 'bass' :
        console.log('Jaymar');
        break;
    case 'piano' :
        console.log('Berna');
        break;
    case 'acoustic' :
        console.log('Trisha');
        break;
    case 'drums' :
        console.log('Philip');
        break;
    default:
        console.log('Invalid')
}

const city = 'San Fernando';

switch (city) {
    case 'Bustos':
    case 'Baliuag':
    case 'Pandi':
    case 'Angat':
    case 'Plaridel':
        console.log('These are in Bulacan');
        break;
    case 'San Fernando':
        console.log('Its in Pampanga')
        break;
        
    default: 
        console.log('invalid')
}