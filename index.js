function scuberGreetingForFeet(trip){
  if (trip <= 400) {
    return 'This one is on me!';
  } if (trip <= 2000){
    return 'That will be twenty bucks.';
  } if (trip > 2000 && trip <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else if (trip > 2500);{
    return 'No can do.'; }
  }

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC" ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
  case 'generous':
    return ('Thank you so much.');
  case 'not as generous':
      return ('Thank you.');
  default:
    return ('Bye.');
}
} 