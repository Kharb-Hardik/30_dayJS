// Task 1: Add a click event listener to a button that changes the text content of a paragraph
const button = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('textParagraph');

button.addEventListener('click', () => {
    paragraph.textContent = 'The text has been changed!';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility
const image = document.getElementById('toggleImage');

image.addEventListener('dblclick', () => {
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
});

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color
const hoverElement = document.getElementById('hoverElement');

hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.backgroundColor = 'lightblue';
});

// Task 4: Add a mouseout event listener to an element that resets its background color
hoverElement.addEventListener('mouseout', () => {
    hoverElement.style.backgroundColor = '';
});

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
const inputField = document.getElementById('keyInputField');

inputField.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
const displayParagraph = document.getElementById('displayParagraph');

inputField.addEventListener('keyup', () => {
    displayParagraph.textContent = `Current value: ${inputField.value}`;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
const selectDropdown = document.getElementById('selectDropdown');
const selectedValueParagraph = document.getElementById('selectedValue');

selectDropdown.addEventListener('change', () => {
    selectedValueParagraph.textContent = `Selected value: ${selectDropdown.value}`;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const list = document.getElementById('myList');

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item:', event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
const parentElement = document.getElementById('parentElement');

parentElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('dynamic-child')) {
        console.log('Clicked dynamic child:', event.target.textContent);
    }
});

// Function to add dynamic children (for demonstration)
function addDynamicChild() {
    const newChild = document.createElement('div');
    newChild.classList.add('dynamic-child');
    newChild.textContent = 'Dynamic Child';
    parentElement.appendChild(newChild);
}

// Feature Request Scripts

// 1. Click Event Script
const changeTextBtn = document.getElementById('changeTextBtn');
const textParagraph = document.getElementById('textParagraph');

changeTextBtn.addEventListener('click', () => {
    textParagraph.textContent = 'Text changed by click event!';
});

// 2. Mouse Events Script
const mouseEventElement = document.getElementById('mouseEventElement');

mouseEventElement.addEventListener('mouseover', () => {
    mouseEventElement.style.backgroundColor = 'yellow';
});

mouseEventElement.addEventListener('mouseout', () => {
    mouseEventElement.style.backgroundColor = '';
});

// 3. Keyboard Events Script
const keyboardInput = document.getElementById('keyboardInput');
const keyDisplayParagraph = document.getElementById('keyDisplay');

keyboardInput.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});

keyboardInput.addEventListener('keyup', () => {
    keyDisplayParagraph.textContent = `Current value: ${keyboardInput.value}`;
});

// 4. Form Events Script
const myForm = document.getElementById('myForm');
const formSelect = document.getElementById('formSelect');
const formSelectedValue = document.getElementById('formSelectedValue');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted:', new FormData(myForm));
});

formSelect.addEventListener('change', () => {
    formSelectedValue.textContent = `Selected: ${formSelect.value}`;
});

// 5. Event Delegation Script
const dynamicList = document.getElementById('dynamicList');

dynamicList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item:', event.target.textContent);
    }
});

function addListItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newItem);
}