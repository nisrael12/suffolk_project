const headerAnimation = () => {
    
    let tl = gsap.timeline()
    
    tl.fromTo('.logo', {
        x:-50,
        opacity: 0,
    },{
        x:0,
        opacity:1,
        delay:.5,
        duration:1.3
    })
    
    tl.fromTo('.menu', {
        x:50,
        opacity: 0,
    },{
        x:0,
        opacity:1,
        delay:.5,
        duration:1.3
    }, 
    '>-1.8'
    )
}
const homeAnimation = () => {
    
    let tl = gsap.timeline()
    
    headerAnimation();
    loadingEnter();
    

    tl.fromTo('.photo-1', {
        opacity: 0,
    },{
        opacity:1,
        delay:.5,
        duration:2
    }, 
    '>-1'
    )
    tl.fromTo('.book', {
        opacity: 0,
    },{
        opacity:1,
        delay:.5,
        duration:1
    }, 
    '>-1.5'
    )

    homeController();
    controller();
}

// Delay
const delay = (n) => {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

// transition timeline
const loadingEnter = () => {
    let timeline = gsap.timeline();
    timeline.fromTo('.fade-bg', {
        y:0
    }, {
        y:'100%',
        duration: 1
    });
};
const loadingLeave = () => {
    let timeline = gsap.timeline();
    timeline.fromTo('.fade-bg', {
        y:'100%'
    }, {
        y:0,
        duration: 1
    });
};

// gallery transition timeline
const galleryEnter = () => {
    let timeline= gsap.timeline();
    timeline
    .fromTo(
        '.white-bg',
        {
            y:50,
            opacity: 0
        },{
            y:0,
            opacity:1,
            duration: .8,
            ease: 'power1.inOut'
        }
    )
    timeline
    .fromTo(
        '.photo ,.white-bg',
        {
            y:50,
            opacity: 0
        },{
            y:0,
            opacity:1,
            duration: .4,
            stagger: .2,
            ease: 'power1.inOut'
        }
    )
}

// Barba page fade
barba.init({
    sync: true,
    transitions: [
        {
            name: 'page-wipe',
            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();
                homeAnimation();
                console.log('Entering Page Animation')
            }

            
        },
        {
            name: 'home-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['home']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();
                homeAnimation();
                console.log('Entering Page Animation')
            },
            // To make the page load the animation once
            async once(data){
                homeAnimation();
            }

        },
        {
            name: 'amenties-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['amenties']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();;
                console.log('Entering Page Animation')
            }

        },
        {
            name: 'room-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['room']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();;
                console.log('Entering Page Animation')
            }

        },
        {
            name: 'visit-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['visit']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();;
                console.log('Entering Page Animation')
            }

        },
        {
            name: 'contact-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['contact']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();;
                console.log('Entering Page Animation')
            }

        },
        {
            name: 'book-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['book']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();
                galleryEnter();
                console.log('Entering Page Animation')
            }

        },
        {
            name: 'gallery-transition',

            from: {
                namespace: ['home', 'amenties', 'gallery', 'room', 'visit', 'contact', 'book']
            },
            to: {
                namespace: ['gallery']
            },

            async leave(data){
                console.log('Leaving Page Animation')
                await delay(1500);
                loadingLeave();
            },
            async enter(data){
                loadingEnter();;
                console.log('Entering Page Animation')
            }

        }
    ],
    views: [{
        namespace: 'home',
        afterEnter(data) {
          homeAnimation();;
        }
      }, {
        namespace: 'gallery',
        afterEnter(data) {
        loadingEnter();
          headerAnimation();
        }
        }, {
        namespace: 'amenties',
        afterEnter(data) {
          loadingEnter();
          
        }  
        }, {
        namespace: 'room',
        afterEnter(data) {
          loadingEnter();
          
        }
        }, {
        namespace: 'visit',
        afterEnter(data) {
          loadingEnter();
          
        }
        }, {
        namespace: 'contact',
        afterEnter(data) {
          loadingEnter();
          
        }
        }, {
        namespace: 'book',
        afterEnter(data) {
          loadingEnter();
          
        }
      }
    ]
});


// Scroll Animation
const tlServicesScroll = new gsap.timeline({
    onUpdate: debugPercentage
})

function debugPercentage(){
    console.log(tlServicesScroll.progress())
}

tlServicesScroll.fromTo('#hotel-content', {
    opacity: 0,
},{
    opacity: 1
})

const serviceElement = document.querySelector('#hotel-content');


let homeController = new ScrollMagic.Controller();

let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: 150 // this works just fine with duration 0 as well
        // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
        // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
});

const slides = document.querySelectorAll("section.panel");

for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: slides[i]
        });
    }

let serviceScene = new ScrollMagic.Scene({
    triggerElement: '#hotel-content',
    triggerHook: .2,
    duration: 200,
    reverse: false
})

.setPin(slides[i], {pushFollowers: false})
.setTween(tlServicesScroll)
.addIndicators()
.addTo(homeController)
.addTo(controller)

let galleryController = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("photo", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(galleryController);