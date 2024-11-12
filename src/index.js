const mainHeading = document.createElement("h1");
mainHeading.id = "main-heading";
mainHeading.textContent = "Hello World!";
document.body.append(mainHeading);

// 1. Create the new element
const mainText = document.createElement("p");

// 2. Modify the element
mainText.id = "main-text";
mainText.className = "boring-text";
mainText.classList.add("boring-text");
// If you want to set the entire class value at once, you can also write this:
// mainText.className = "boring-text";

mainText.textContent = "Look, I'm some text!";

// 3. Append the element
document.body.append(mainText);
