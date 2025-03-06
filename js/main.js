 const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
     "#0E4B5A",
     "#36454F",
    "#2C3E50",
     "#800020",
   ];

  const messageArr = [
    "i love you",
    "i think you are great",
    "keep up the good work champ!",
    "a step further to success",
    "you've got guts!!!",
    "you've got this!!!",
    "Go for gold",
    "Beyond greatness!!!",
    "Alackaday!!!",
    "Exceptionally Exceptional",
  ];

  
  const message = document.querySelector("#message");
  const btn = document.querySelector("#btn");
  const msg = document.querySelector("#msg");
    function changeMessage(){
    const randomIndex = Math.floor(Math.random() * messageArr.length);
    const randomColorIndex = Math.floor(Math.random() * darkColorsArr.length);
    
    message.innerText = messageArr[randomIndex];
    msg.style.backgroundColor = darkColorsArr[randomColorIndex];
    message.style.setProperty("color", "white", "important");
  }

    btn.onclick = changeMessage;

    