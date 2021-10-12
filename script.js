const cell = document.querySelectorAll('.in');
const time = document.querySelector('.time-out');
let blurtime = 10;
let content, incontent, tl;

// One cell selected, deselect other.
const clearSelect = (event) => {
  try {
    for (let i = 1; i < cell.length; i++) {
      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
    }
  } catch {
    event.target.classList.add('active');
  }
};

const selectCell = (event) => {
  event.target.readOnly = true;
  clearSelect(event);
  incontent = event.target.value;
  event.target.style.cursor = ('');
};

const editCell = (event) => {
  event.target.readOnly = false;
  tl = event.target.value.length * 12;
  event.target.style.minWidth = (tl.toString() + 'px');
  event.target.style.cursor = ('text');
  event.target.removeEventListener('click', selectCell);
};

const blurCell = (event) => {
  content = event.target.value;
  if (content !== incontent) {
    event.target.classList.add('mod');
    setTimeout(() => {
      event.target.classList.remove('mod');
    }, blurtime * 1000);
  }
  event.target.readOnly = true;
  event.target.style.cursor = ('cell');
  event.target.style.minWidth = ('300px');
  event.target.addEventListener('click', selectCell);
};

// Add events for cells
cell.forEach((event) => {
  event.addEventListener('click', selectCell);
  event.addEventListener('dblclick', editCell);
  event.addEventListener('blur', blurCell);
  event.value = '';
});

// Blur time changing
time.value = '';
time.addEventListener('blur', () => {
  blurtime = time.value;
});

// Button, clear inputs
// const clr = Array.prototype.slice.call(document.getElementsByClassName('in'));
// const button = document.querySelector('#btn1');
// const clrfld = () => {clr.forEach((elem) => {
//     elem.value = "";
//     elem.classList.remove('mod');
// })};
// button.addEventListener("click", clrfld);
