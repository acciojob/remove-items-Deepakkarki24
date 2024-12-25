//your JS code here. If required.
let options = document.querySelector("#colorSelect");
      let button = document.querySelector("input");

      button.addEventListener("click", () => {
        let index = options.selectedIndex;
        options.remove(index);
      });