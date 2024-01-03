/*--LOADER SCREEN ANIMATION--*/
document.addEventListener("DOMContentLoaded", function () {
  // Appending the numbers to the counter-3 digit
  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const nums = counter.querySelectorAll(".num");
    const numHeight = nums[0].clientHeight;
    const totalDistance = (nums.length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.from(".loader-2", {
  width: 0,
  delay: 1.7,
  duration: 2,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  background: "none",
  delay: 6,
  duration: 0.1,
});

gsap.to(".loader-1", {
  rotate: 90,
  y: -20,
  duration: 0.5,
  delay: 6,
});

gsap.to(
  ".loader-2",
  {
    rotate: 80,
    x: -70,
    y: -9,
    duration: 0.5,
  },
  "<"
);

gsap.to(".loader", {
  scale: 40,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  rotate: 45,
  y: 500,
  x: 2000,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

// Fade out the loading screen and set display to 'none' to show the website content
gsap.to(".loading-screen", {
  opacity: 0,
  duration: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
  onComplete: function () {
    document.querySelector(".loading-screen").style.display = "none";
  },
});

// Ensure the website content is visible
document.querySelector(".website-content").style.opacity = 1;


/*--RESPONSIVE NAV BAR--*/
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const menubar = document.querySelector(".menubar");
  // Hamburger menu will appear if mobile screen size
  if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener("click", function () {
      menubar.classList.toggle("mobile");
      menubar.style.left = menubar.classList.contains("mobile") ? "0" : "-100%";
    });

    // Window resize events
    window.addEventListener("resize", function () {
      // Check if the screen size is greater than 768 pixels
      if (window.innerWidth > 768) {
        // Remove the 'mobile' class and reset the style for larger screens
        menubar.classList.remove("mobile");
        menubar.style.left = "auto";
      }
    });
  }
});


/*--ACCOUNT LOGIN FORM--*/
var loginForm = document.querySelector(".account-login-form");
// open subtab
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};
// close subtab with button
document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};


/*--BOOKSHELF SLIDER*/
var swiper = new Swiper(".books-list", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // books shown per breakpoint
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


/*--NEW RELEASES SUB-WINDOWS--*/
function setupBookToggle(bookSelector, buttonSelector, closeButtonSelector) {
  var book = document.querySelector(bookSelector);

  document.querySelector(buttonSelector).onclick = () => {
    book.classList.toggle("active");
  };

  document.querySelector(closeButtonSelector).onclick = () => {
    book.classList.remove("active");
  };
}
// One function call per book
setupBookToggle(".bs-1", "#book-showcase-yf", ".csb-1");
setupBookToggle(".bs-2", "#book-showcase-fw", ".csb-2");
setupBookToggle(".bs-3", "#book-showcase-sh", ".csb-3");
setupBookToggle(".bs-4", "#book-showcase-ikigai", ".csb-4");
setupBookToggle(".bs-5", "#book-showcase-lw", ".csb-5");
setupBookToggle(".bs-6", "#book-showcase-soa", ".csb-6");


/*--BOOK SHOWCASE (360 deg rotation)--*/
// Function to make element rotatable
function makeRotatable(elementSelector) {
  const section = document.querySelector(elementSelector);
  const book = section.querySelector(".book-parts");
  // Drag Sensitivity
  const sensitivity = 2;
  // State for the element's rotation
  let state = {
    prevDeg: 0,
    calcDeg: 0,
  };

  // Function to handle the book rotation
  function rotate(e) {
    state.calcDeg = (e.clientX - this.startX) / sensitivity;
    book.style.transform = `rotateY(${state.calcDeg + state.prevDeg}deg)`;
    document.body.style.cursor = "grabbing";
  }

  // Function to start the rotation
  function startRotate(e) {
    // Get initial mouse X position
    this.startX = e.clientX;
    // Bind the rotate function to mousemove event
    section.addEventListener("mousemove", rotate);
  }

  // Function to stop the rotation
  function stopRotate() {
    // Save the last rotation
    state.prevDeg += state.calcDeg;
    section.removeEventListener("mousemove", rotate);
    document.body.style.cursor = "default";
  }

  // Attach mousedown event to the element to start rotation
  section.addEventListener("mousedown", startRotate);

  // Attach mouseup event to the window to stop rotation
  window.addEventListener("mouseup", stopRotate);
}
// FUnction call for each book
makeRotatable(".bi-1");
makeRotatable(".bi-2");
makeRotatable(".bi-3");
makeRotatable(".bi-4");
makeRotatable(".bi-5");
makeRotatable(".bi-6");


/*--UPCOMING EVENTS SLIDER--*/
var swiper = new Swiper(".events-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  // no. of events shown per breakpoint
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
