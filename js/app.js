var jun = moment("2014-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

// 5am PDT

const hourMAD = moment.tz('Europe/Madrid').format('h');
const hourNY = moment.tz('America/New_York').format('h');
const hourMDE = moment.tz('America/Bogota').format('h');
const min = moment.tz('Europe/Madrid').format('m');
const seg = moment.tz().format('s');
const deg = ['179deg','210deg','240deg','270deg','300deg','330deg','360deg','25deg','55deg','85deg','115deg','145deg','179deg'];
// console.log(seg);

document.documentElement.style.setProperty('--start-rotate-hourMAD', deg[hourMAD]);
document.documentElement.style.setProperty('--start-rotate-hourNY', deg[hourNY]);
document.documentElement.style.setProperty('--start-rotate-hourMDE', deg[hourMDE]);
// console.log(hourMAD);
// console.log(min); 


const degMin = [];
var degNumber = 180;

for(var i = 0; i < 60 ; i++){
    degMin.push(degNumber);
    degNumber = degNumber + 6;    
}

const endHourMAD = deg[hourMAD] + 360;
const endHourNY = deg[hourNY] + 360;
const endHourMDE = deg[hourMDE] + 360;
const endMin = degMin[min] + 360;
const endSeg = degMin[seg] + 360;

document.documentElement.style.setProperty('--end-rotate-hourMAD', endHourMAD);
document.documentElement.style.setProperty('--end-rotate-hourNY', endHourNY);
document.documentElement.style.setProperty('--end-rotate-hourMDE', endHourMDE);

document.documentElement.style.setProperty('--start-rotate-seg', degMin[seg]+'deg');
document.documentElement.style.setProperty('--end-rotate-seg', endSeg+'deg');
document.documentElement.style.setProperty('--start-rotate-min', degMin[min]+'deg');
document.documentElement.style.setProperty('--end-rotate-min', endMin+'deg');

const section = document.querySelectorAll('.section');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');
const darkLogo = document.querySelector('.header__logo--dark');
const burger = document.querySelector(".header__buns");
const burgerText = document.querySelector(".header__menu-text");
let sectionName= 0;
const particless = document.querySelector('#particles-js');
const particless2 = document.querySelector('#particles2-js');
const footer = document.querySelector('.footer');


// console.log(footer);
for (const sect of section) {
    particulas(); 
    particulas2();
    // console.log(sect);
    sectionName = sect.dataset.class; 
    console.log(sectionName);
    const container = '.'+sectionName; 
    console.log(container);
    const mainColor = 'main--' + sectionName; 
    const elementt = document.querySelector(container).offsetTop; 
    const heightt = document.querySelector(container).clientHeight; 
    
    const limitt = elementt-(heightt/6);   
    const mainnn = document.getElementById('main'); 

    const topFooter = footer.offsetTop;
    const heightFooter = footer.clientHeight;
    const limittFooter = topFooter-(heightFooter/2);

    
    console.log(topFooter);
    console.log(limittFooter);
       
  
    
    
    window.addEventListener('scroll', () =>{
        const pixel = window.pageYOffset; // numero de pixel en el que estoy
        
        
        if(pixel >= limitt){
            
          if (window.innerWidth >= '1036') {
            mainnn.classList.add(mainColor);
          }

            const newColor = '#FF2222';
           

            if(sect.dataset.class == 'section-services'){
                header.classList.add('header--section-services');
                particless2.classList.add('show');
                

                
                
                
                   
              
                
            }else{
                header.classList.remove('header--section-services');
                particless2.classList.remove('show');
                
                
            }
            if(sect.dataset.class == 'section-dailybot' || sect.dataset.class == 'section-services' || sect.dataset.class == 'section-products'){
                particless.classList.add('show');
            }else{
                if(sect.dataset.class == 'section-main'){
                    particless.classList.remove('show'); 
                    particless2.classList.remove('show');
                }
            }

            if(pixel >= limittFooter){
                particless.classList.remove('show'); 
            }
            
        }else{
            if(sect.dataset.class == 'section-main' || pixel >= limittFooter){
                particless.classList.remove('show'); 
            }
            mainnn.classList.remove(mainColor);
        }


        
    } 
    );
}


function particulas(){
    particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,

  });

}

function particulas2(){
  particlesJS('particles2-js',

{
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#25b5e9"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#25b5e9",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,

});

}

let buttonModal = document.querySelector(".header__burger");
let closeModal = document.querySelector(".modal__close");
let modal = document.querySelector(".modal");
let body = document.querySelector("body");

buttonModal.addEventListener('click', function(){
    body.classList.toggle('overflow')
    modal.classList.toggle('modal--active')
})

closeModal.addEventListener('click', function(){
    body.classList.toggle('overflow')
    modal.classList.toggle('modal--active')
})