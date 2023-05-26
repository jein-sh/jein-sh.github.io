export default () => {

  const text = "<I'm a Junior Frontend-developer>";
  const delay = 100;
  const elem = document.querySelector(".js-type");

  const typingText = function(text, elem, delay) {
    if(text.length > 0) {
      elem.innerHTML += text[0];
      setTimeout(
        function() {
          typingText(text.slice(1), elem, delay);
        }, delay
      );
    }
  }

  const clearText = function(text, elem, delay) {
    if(text.length > 0) {
      elem.innerHTML = text;
      setTimeout(
        function() {
          clearText(text.slice(1), elem, delay);
        }, delay
      );
    }
  }

  typingText(text, elem, delay);
}
