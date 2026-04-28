import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io'];

  let container = document.querySelector("#domains");
  let domains = "";

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extensions) {
          let domain = p + a + n + e;
          domains += `<p>${domain}</p>`;
        }
      }
    }
  }
  container.innerHTML = domains;
};
