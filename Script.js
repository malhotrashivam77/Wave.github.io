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

// -----submit----


form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 1000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });