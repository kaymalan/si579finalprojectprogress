document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggleEl => {
  new bootstrap.Dropdown(dropdownToggleEl);
});

// Change font dropdown

// document.querySelectorAll('.dropdown-item').forEach(item => {
//   item.addEventListener('click', event => {
//     event.preventDefault();
//     document.querySelectorAll('.dropdown-item').forEach(e => e.classList.remove('active'));
//     item.classList.add('active');
//     const selectedFont = item.getAttribute('data-font');
//     document.body.style.fontFamily = selectedFont;
//   });
// });

const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();

        document.querySelectorAll('.dropdown-item').forEach(e => e.classList.remove('active'));
        item.classList.add('active');
        const selectedFont = item.getAttribute('data-font');
        selectedFont ? styleElement.textContent = `body * { font-family: ${selectedFont} !important; }` :
          styleElement.textContent = '';
      });
    });

// Add/remove italics button

const replaceButton = document.querySelector('#replace-button');
let isItalic = true;

const removeItalics = () => {
  document.querySelectorAll('i, em').forEach(element => {
    const span = document.createElement('span');
    span.textContent = element.textContent;
    span.setAttribute('data-original-italic', element.textContent);
    element.parentNode.replaceChild(span, element);
  });
};

const addItalics = () => {
  document.querySelectorAll('[data-original-italic]').forEach(span => {
    const italic = document.createElement('i');
    italic.textContent = span.getAttribute('data-original-italic');
    span.parentNode.replaceChild(italic, span);
  });
};

replaceButton.addEventListener('click', () => {
  isItalic ? removeItalics() : addItalics();

  isItalic = !isItalic;
  replaceButton.textContent = isItalic ? 'Remove Italics' : 'Add Italics';
});

// add/remove underlined content

const underlineButton = document.querySelector('#toggle-underline-button');
let isUnderlined = true;

const removeUnderlines = () => {
  document.querySelectorAll('u').forEach(element => {
    const span = document.createElement('span');
    span.textContent = element.textContent;
    span.setAttribute('data-original-underline', element.textContent);
    element.parentNode.replaceChild(span, element);
  });
};

const addUnderlines = () => {
  document.querySelectorAll('[data-original-underline]').forEach(span => {
    const underline = document.createElement('u');
    underline.textContent = span.getAttribute('data-original-underline');
    span.parentNode.replaceChild(underline, span);
  });
};

underlineButton.addEventListener('click', () => {
  isUnderlined ? removeUnderlines() : addUnderlines();

  isUnderlined = !isUnderlined;
  underlineButton.textContent = isUnderlined ? 'Remove Underline' : 'Underline Words';
});

// // change background to white

const bgSwitch = document.querySelector('#whiteBgSwitch');

const backgroundColor = document.createElement('style');
document.head.appendChild(backgroundColor);

bgSwitch.addEventListener('change', () => {
  backgroundColor.innerHTML = bgSwitch.checked ? `body, body div {background-color: white!important;}` : '';
});

// // change text color to black

const textSwitch = document.querySelector('#blackTextSwitch');

const textColor = document.createElement('style');
document.head.appendChild(textColor);

textSwitch.addEventListener('change', () => {
  textColor.innerHTML = textSwitch.checked ? `body * {color: black;}` : '';
});

// // change font size

const fontSize = document.body.style.fontSize;

const numericFontSize = fontSize.replace('pt', '');

const rangeInput = document.querySelector('#customRange3');
rangeInput.value = numericFontSize;

rangeInput.addEventListener('input', (event) => {
  document.body.style.fontSize = event.target.value + 'pt';
});

// // remove event listeners on images

// const image = document.querySelector('img');

// // Add event listener for mouse entering the image
// image.addEventListener('mouseenter', () => {
//     image.style.border = '2px solid black';
// });

// // Add event listener for mouse leaving the image
// image.addEventListener('mouseleave', () => {
//     image.style.border = 'none';
// });

// const eventListenerBttn = document.querySelector('#toggle-events');

// const events = ['click', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'wheel', 'touchstart', 'touchmove', 'touchend', 'touchcancel'];

// const removeImageEventListeners = (images) =>
//   images.forEach(img => events.forEach(event => img['on' + event] = null));

// const images = document.querySelectorAll('img');
// removeImageEventListeners(images);