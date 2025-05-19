  const text = "There is a tiny Sherlock Holmes embedded in your countertop.";
  const target = document.getElementById("typed-text");
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      target.textContent += text[index];
      index++;
      setTimeout(typeLetter, 70);
    }
  }

  window.onload = () => {
    setTimeout(typeLetter, 500); // Delay the typing start by 250ms
  };