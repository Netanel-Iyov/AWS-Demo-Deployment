let counter = 1;

function increment() {
  counter++;
  document.getElementById("counter").innerText = counter;
}

function decrement() {
  counter--;
  document.getElementById("counter").innerText = counter;
}
