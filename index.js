const names = ['Charlie', 'Samip', 'Ali'];

function writeCards(names, event) {
  let birthday =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
  }
  return birthday;
}
var countDown = function(value) {
  if (value >= 0) {
      console.log(value);
      return countDown(value - 1);
  } else {
      return value;
  }
};
countDown(10);