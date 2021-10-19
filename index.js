// Your code goes here
console.log("dfg")
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    // debugger;
    const p = document.querySelector("#text")
    p.textContent = "This is really cool!"
    p.addEventListener("click", console.log("The DOM has loaded"));



    
  });
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

