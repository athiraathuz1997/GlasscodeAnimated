function openNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '0';
    }
    else {
        console.error('error:side panel not found');
    }
}

function closeNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '-320px';
    }
    else {
        console.error('error:side panel not found');
    }
}

function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    }
    else {
        console.error('error:search panel not found');
    }
}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';

    }
    else {
        console.error('error:search panel not found');
    }
}
//portfolio gallery tab

function open_img(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add('active');
}
// team section

$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinte: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    sliderToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                sliderToScroll: 1,
                infinte: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                sliderToScroll: 1,
            }

        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                sliderToScroll: 1,
            }

        }
    ]
})
// FOOTER
const form = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    footerMessage.innerHTML = '~ Form Submitted Successfully';
    footerMessage.style.display = 'flex';
    footerMessage.reset();
    setTimeout(()=>{
        footerMessage.style.display = 'none'
    },3000)
})

window.onscroll = function(){

}

function scrollFunction(){
    if(document.body.scrollTop > 20||documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    }
    else{
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}
function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior:"smooth"
    })
}

// testimonial section
$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    sliderToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1
        }
    }
    ]
})