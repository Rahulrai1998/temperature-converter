const calculate = () => {
  const input = document.getElementById("temp").value;
  const selectedOptions = document.getElementById("units").value;
  const resultArea = document.getElementById("result");

  const celToFar = (input) => {
    return Math.round((input * 9) / 5 + 32);
  };
  const farToCel = (input) => {
    return Math.round(((input - 32) * 5) / 9);
  };

  let result;

  if (selectedOptions === "cel") {
    console.log(selectedOptions);
    result = celToFar(input);
    resultArea.innerHTML = `${result} FAhremheit`;
  } else {
    result = farToCel(input);
    resultArea.innerHTML = `${result} Celsius`;
  }
};
