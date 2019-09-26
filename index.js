function writeCards(names, event_name) {
  for (let i = 0; i < names.length; i++) {
    names.push('Thank you, ${names[i]}, for the wonderful ${event_name} gift!');
  }
  return
}

function countdown(num) {
  while (num >= 0) {
    console.log(num--);
  }
  return num
}
