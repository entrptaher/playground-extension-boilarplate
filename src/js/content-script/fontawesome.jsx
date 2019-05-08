const styles = {
  solid: `@font-face { 
    font-family: 'Font Awesome 5 Free';
    src: url("${chrome.extension.getURL("fonts/fa-solid-900.woff")}")  format('woff');
  }`,
  regular: `@font-face { 
    font-family: 'Font Awesome 5 Free';
    src: url("${chrome.extension.getURL("fonts/fa-regular-400.woff")}")  format('woff');
  }`
}
var fa = document.createElement("style");
fa.type = "text/css";
fa.textContent = styles.solid;
document.head.appendChild(fa);