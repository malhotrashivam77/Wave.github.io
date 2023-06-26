var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ------readmore-------

function toggleContent() {
    var moreContent = document.getElementById("more-content");
    var readMoreLink = document.getElementById("read-more-link");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        readMoreLink.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        readMoreLink.textContent = "Read More";
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby-Ivfp1uj7-dPd0NuhqZXSzSteNuEd05kFiJET4lWFtU83HUYDSlCa5a50DWLy6Dgk/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  form.classList.add("loading"); // Add loading class to show loading state
  msg.innerHTML = ""; // Clear previous message

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      form.classList.remove("loading"); // Remove loading class
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 1000);
      form.reset(); // Reset the form
    })
    .catch(error => {
      form.classList.remove("loading"); // Remove loading class
      console.error('Error!', error.message);
    });
});
