/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("oneDropdown").classList.toggle("show");
  }
  
//   // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("one");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function toFunction() {
    document.getElementById("towDropdown").classList.toggle("show");
  }
  
//   // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("tow");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// visiable and hidden list icone2 in asidebar
function start() {
  let x = document.getElementById("div1");
  let o = document.getElementById("lay");
    if(x.style.display === "none") {
      x.style.display = "block";
      o.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
};

function off() {
  let n = document.getElementById("div1");
  let o = document.getElementById("lay");
  n.style.display = "none";
  o.style.display = "none"
};
// visiable and hidden dropdown question mark part2 in heading
function turnon() {
  let y = document.getElementById("div2");
  let o = document.getElementById("lay");
   if(y.style.display === "none") {
      y.style.display = "block";
      o.style.display = "block";
      
   }
   else {
      y.style.display = "none";
   }
};

function turnout() {
  let z = document.getElementById("div2");
  let o = document.getElementById("lay");
  z.style.display = "none";
  o.style.display = "none";
};
// overlay for content
function instul() {
  let r = document.getElementById("div3")
  if(r.style.display === "none") {
    r.style.display = "block";
}
else {
  r.style.display = "none";
}
}


  