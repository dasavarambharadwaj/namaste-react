var root = document.getElementById("root");
var heading1 = document.createElement("h1")
heading1.innerHTML = "Namaste React!"
var heading2 = document.createElement("h2")
heading2.innerHTML = "Namaste React!"
root.replaceChildren(heading1,heading2)