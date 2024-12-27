let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let text_Item = "";

let buttonArray = Array.from(buttons);

buttonArray.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      input.value = text_Item;
      text_Item = eval(text_Item);

    } else if (buttonText === "AC") {
      text_Item = "";
      input.value = text_Item;
    } else if (buttonText === "DEL") {
      text_Item = text_Item.slice(0, -1);
      input.value = text_Item;
    } else {
      text_Item += buttonText;
      input.value = text_Item;
    }
    
  });
});
