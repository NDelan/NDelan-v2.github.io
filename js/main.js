
// Menu show Y hidden
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// MENU SHOW
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// MENU HIDDEN
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each list, we remove show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======================== ACCORDION SKILLS===========================*/

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*================== QUALIFICATION TABS =================*/
const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')

        // tabs.forEach(tab => {
        //     tab.classList.remove('qualification_active')
        // })
        // tab.classList.add('qualification_active')
    })
})

/*================== SERVICES MODAL =================*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

/*========================== PORTFOLIO SWIPER ======================= */
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  /*========================== TESTIMONIAL SWIPER ======================= */
let swiperTestimonial = new Swiper('.testimonial_container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }

  });

//   ================ Scroll Sections Active Link ============//

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const menuLink = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuLink.classList.add('active-link');
        } else {
            menuLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===================== SHOW SCROLL UP =================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// =========================== DARK LIGHT THEME ===============================//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})






const h1Text = "Hi there, I'm Delanyo";
const h2Text = "a computer science and Mathematics student";
const pText = "at Colby College with a passion for innovation and problem-solving. I like writing code and exploring new technologies. I'm thrilled to make a connection with you!";

const h1Section = document.getElementById('home_title');
const h2Section = document.getElementById('home_substitle');
const pSection = document.getElementById('home_description');

function typeText(element, text, speed) {
  let i = 0;
  const typingInterval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}


typeText(h1Section, h1Text, 100);
setTimeout(() => {
  typeText(h2Section, h2Text, 50);
  setTimeout(() => {
    typeText(pSection, pText, 30);
  }, h2Text.length * 50);
}, h1Text.length * 100);








function validateForm() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // If all validations pass, you can submit the form here
    // For example: document.getElementById("form").submit();

    // Show a pop-up success message
    alert("Form submitted successfully!");

    // Prevent the form from actually submitting
    return false;
}


// function typeCombinedText(className, title, description, typingSpeed = 100, blinkSpeed = 500, callback) {
//     const typingElement = document.getElementsByClassName(className)[0];
//     let index = 0;
  
//     function type() {
//       if (index < title.length) {
//         typingElement.innerHTML += title.charAt(index);
//         index++;
//         setTimeout(type, typingSpeed);
//       } else {
//         setTimeout(() => {
//           if (callback) callback();
//         }, typingSpeed);
//       }
//     }
  
//     function blinkCursor() {
//       typingElement.lastChild.remove();
//       type();
//     }
  
//     type();
//   }
  
//   typeCombinedText("home_combined", " My journey.", "at Colby College interested in learning new technologies and solving problems efficiently.");
  


// function typeText(className, text, typingSpeed = 100, blinkSpeed = 500) {
//     const typingElement = document.getElementsByClassName(className)[0];
  
//     function type(index) {
//       if (index < text.length) {
//         typingElement.innerHTML += text.charAt(index);
//         index++;
//         setTimeout(() => type(index), typingSpeed);
//       } else {
//         setTimeout(blinkCursor, blinkSpeed);
//       }
//     }
  
//     function blinkCursor() {
//       typingElement.lastChild.remove();
//       setTimeout(() => type(0), typingSpeed);
//     }
  
//     type(0);
//   }
  
//   // Example usage:
//   typeText("home_title", " and solving problems efficiently.");

//   typeText("home_description", "at Colby College interested in learning new technologies and solving problems efficiently.");

  




// const text = "at Colby College interested in learning new technologies and solving problems efficiently."; // The text you want to type out
// const typingSpeed = 100; // Speed of typing (in milliseconds)
// const blinkSpeed = 500; // Blinking cursor speed (in milliseconds)

// const typingElement = document.getElementsByClassName("home_description")[0];

// function typeText(index) {
//   if (index < text.length) {
//     typingElement.innerHTML += text.charAt(index);
//     index++;
//     setTimeout(() => typeText(index), typingSpeed);
//   } else {
//     setTimeout(blinkCursor, blinkSpeed);
//   }
// }

// function blinkCursor() {
//   typingElement.lastChild.remove();
//   setTimeout(() => typeText(0), typingSpeed);
// }

// typeText(0);
