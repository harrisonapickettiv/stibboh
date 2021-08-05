// Get the string from the user
const getValues = () => {
  const str = document.querySelector("#userString").value;
  return str;
};

// Reverse the string
const reverseString = (str) => {
  let reversedString = "";

  for (const char of str) {
    reversedString = char + reversedString;
  }

  return reversedString;
};

// Display the reversed string to the user
const displayString = (str) => {
  const alert = document.querySelector("#alert");
  const msg = document.querySelector("#msg");

  msg.innerHTML = `Your string reversed is: ${str}`;
  alert.classList.remove("invisible");
};

// put it all together in a single controller
const stibboh = () => {
  const userString = getValues();
  const reversedString = reverseString(userString);

  displayString(reversedString);
};

export { stibboh };
