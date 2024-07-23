const apiBaseUrl = "http://18.203.100.180/:3000";

DisplayInitialCounterValue();

async function increment() {
  const apiUrl = `${apiBaseUrl}/counter/increase`;
  response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  document.getElementById("counter").innerText = data.counter;
}

async function decrement() {
  const apiUrl = `${apiBaseUrl}/counter/decrease`;
  response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  document.getElementById("counter").innerText = data.counter;
}

async function DisplayInitialCounterValue() {
  const apiUrl = `${apiBaseUrl}/counter`;
  response = await fetch(apiUrl);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  document.getElementById("counter").innerText = data.counter;
}
