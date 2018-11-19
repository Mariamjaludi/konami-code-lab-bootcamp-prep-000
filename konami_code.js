const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  //your code here
  const body = document.getElementByTagName("body");
  body.addEventListener('keydown', function(e) { 
    let i = 0;
    const key = e.key;
    if (key === codes[i]) {
      i++;

      if (i === codes.length) {
        alert("Konami!");
        i = 0;
      }
    } 
    else {
      i = 0;
    }
  });

}
