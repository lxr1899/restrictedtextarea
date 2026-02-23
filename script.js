const allTextAreas = document.querySelectorAll(".txt");

allTextAreas.forEach((textArea) => {
  const divContainer = textArea.parentElement;
  const span = textArea.nextElementSibling;
  const len = textArea.getAttribute("maxlength");

  span.innerHTML = textArea.value.length + " /" + len;

  textArea.addEventListener("input", () => {
    if (textArea.value.length > len) {
      alert("Maximum length exceeded: " + len);
      textArea.value = textArea.value.slice(0, len);
      return false;
    } 
    else {
      span.innerHTML = textArea.value.length + " /" + len;
      if (textArea.value.length == len) {
        divContainer.classList.remove("correct");
        divContainer.classList.add("error");
        textArea.classList.remove("txt");
        textArea.classList.add("txtError");
      } 
      else {
        divContainer.classList.remove("error");
        divContainer.classList.add("correct");
        textArea.classList.remove("txtError");
        textArea.classList.add("txt");
      }
    }
  });
});
