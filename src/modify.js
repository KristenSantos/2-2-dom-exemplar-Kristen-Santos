const getMainHeadingText = () => {
  const mainHeading = document.querySelector("#main-heading");
  console.log(mainHeading.textContent);
};

const getAllMainText = () => {
  // Grab all elements with class 'main-text' using querySelectorAll
  const allMainTextElements = document.querySelectorAll(".main-text");
  // Convert NodeList to array, map over each element to get text, then join with commas
  const combinedText = Array.from(allMainTextElements)
    .map((element) => element.textContent)
    .join(",");
  console.log(combinedText);
  // Trick: Using Array.from() with map allows us to iterate in one line and join text effectively. You can also use `[...allMainTextElements].map().join()`
};

const setSubtitleText = () => {
  const subTitle = document.querySelector("#subtitle");
  subTitle.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const divToModify = document.querySelector("#modify-classes");
  const classList = divToModify.classList;
  classList.remove("bad-class");
  classList.add("new-class");
  // Best Practice: Use classList for class management as it lets you add/remove specific classes without altering others
};

const addH2 = () => {
  const h2 = document.createElement("h2");
  h2.id = "h2-test";
  h2.textContent = "Another one!";
  const body = document.querySelector("body");
  body.append(h2);
  // Best Practice: Set attributes and content immediately after creating an element to keep code readable
};

const removeOldInfo = () => {
  const removeInfo = document.querySelector("#old-info");
  removeInfo.remove();
  // You could also do this in one line: document.querySelector("#old-info").remove();
};

const makeAlphabet = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetEl = document.querySelector("#alphabet");
  // Loop based on the data-num-letters attribute, automatically comparing to the string value
  for (let i = 0; i < alphabetEl.dataset.numLetters; i++) {
    // Create a new list item element
    let li = document.createElement("li");
    // Adding 1 to `i` to represent that "A" is the 1st letter, not the 0th
    li.textContent = `${letters[i]} is letter #${i + 1} in the alphabet`;
    // Append the list item to the alphabet list
    alphabetEl.append(li);
  }
};

/*
Alternative approach:
const alphabetList = document.querySelector("#alphabet");
// Retrieve and parse the data-num-letters attribute to get the number of letters
const numLetters = parseInt(
  alphabetList.getAttribute("data-num-letters"),
  10
);
// Loop from 0 to numLetters to create list items
for (let i = 0; i < numLetters; i++) {
  // Create a new list item element
  const listItem = document.createElement("li");
  // Set the text content with letter and position
  listItem.textContent = `${String.fromCharCode(65 + i)} is letter #${i + 1} in the alphabet`;
  // Append each list item to the alphabet list
  alphabetList.append(listItem);
}
// Trick: Using String.fromCharCode(65 + i) generates letters A-Z based on ASCII codes
*/

const makeBio = () => {
  const bioDiv = document.querySelector("#my-bio");
  bioDiv.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like to learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>
`;
};
// Use innerHTML only if you fully control the content to prevent security issues.

// "runner" function - DO NOT DELETE
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main();
