let business = $("#business-header-btn")
let businessModal = $(".business-modal")

let aboutUs = $("#about-us-header-btn")
let aboutUsModal = $(".about-us-modal")

let careers = $("#career-header-btn")
let careersModal = $(".careers-modal")

let social = $("#social-header-btn")
let socialModal = $(".social-impact-modal")

let pick = $("#pick-up-header-btn")
let pickModal = $(".pick-up-modal")

let modalOpen = false;

function footerAnimation ( el, modal) {
 if (!modalOpen) { 
    el.removeClass('collapse').addClass('expand');
    modal.css("display", "flex");
    modalOpen = true;
  } else {
    el.removeClass('expand').addClass('collapse');
    modal.css("display", "none");
    modalOpen = false;
  }
}

aboutUs.click(() => footerAnimation(aboutUs, aboutUsModal));
careers.click(() => footerAnimation(careers, careersModal));
business.click(() => footerAnimation(business, businessModal));
social.click(() => footerAnimation(social, socialModal));
pick.click(() => footerAnimation(pick, pickModal));

let modalMain = $(".mobile-div")
let hamburger = $(".hamburger")
let isHamModalOpen = false
let overlay = $(".overlay")

function hamModal () {
     if (!isHamModalOpen) {
       isHamModalOpen = true;
         modalMain.css("display", "flex")
         $("body").addClass("no-scroll")
         overlay.css("display", "block");
         
     } else {
        isHamModalOpen = false;
         modalMain.css("display", "none")
         $("body").removeClass("no-scroll")
          overlay.css("display", "none")
        
     }
}

hamburger.click(() => hamModal())