const display = document.getElementById('display');

    function append(value) {
      if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    function clearDisplay() {
      display.innerText = '0';
    }

    function deleteLast() {
      let text = display.innerText;
      if (text.length > 1) {
        display.innerText = text.slice(0, -1);
      } else {
        display.innerText = '0';
      }
    }

    function calculate() {
      try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
      } catch (e) {
        display.innerText = 'Error';
      }
    }