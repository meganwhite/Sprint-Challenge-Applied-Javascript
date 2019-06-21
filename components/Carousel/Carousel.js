class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        let next = carousel.querySelector('.right-button');
        let prev = carousel.querySelector('.left-button');
        let imgs = carousel.querySelectorAll('.carousel img');
        let counter = 0;
        this.next.addEventListener('click',this.slideRight.bind(this));
        this.prev.addEventListener('click',this.slideLeft.bind(this));
    }

}

let carousel = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
