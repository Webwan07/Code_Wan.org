const copy_one = document.querySelector('#copyCode_one');
copy_one.addEventListener('click', copy_code_one);

function copy_code_one(event) {
  event.preventDefault(); // Prevent default link behavior
  
  const textFile = new XMLHttpRequest();
  textFile.open("GET", "code_one.txt", true);
  textFile.onreadystatechange = function() {
    if (textFile.readyState === 4 && textFile.status === 200) {
      const text = textFile.responseText;
      const dummyInput = document.createElement('textarea');
      dummyInput.value = text;
      document.body.appendChild(dummyInput);
      dummyInput.select();
      document.execCommand('copy');
      document.body.removeChild(dummyInput);
      alert('Code copied to clipboard!');
    }
  };
  textFile.send(null);
}

//code 2
const copy_two = document.querySelector('#copyCode_two');

copy_two.addEventListener('click', copyCode_two);

function copyCode_two(event) {
  event.preventDefault(); // Prevent default link behavior
  
  const textFile = new XMLHttpRequest();
  textFile.open("GET", "http://drive.google.com/uc?export=view&id=18Psu63g22jhB253dmSViGJVjntdv8gIr", true);
  textFile.onreadystatechange = function() {
    if (textFile.readyState === 4 && textFile.status === 200) {
      const text = textFile.responseText;
      const dummyInput = document.createElement('textarea');
      dummyInput.value = text;
      document.body.appendChild(dummyInput);
      dummyInput.select();
      document.execCommand('copy');
      document.body.removeChild(dummyInput);
      alert('Code copied to clipboard!');
    }
  };
  textFile.send(null);
}