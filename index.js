// Your code goes here
console.log("dfg")
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    // debugger;
    document.querySelector("#text").textContent = "This is really cool!"



    
  });
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

