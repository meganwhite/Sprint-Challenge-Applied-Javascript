class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.next = carousel.querySelector('.right-button');
        this.prev = carousel.querySelector('.left-button');
        this.imgs = Array.from(carousel.querySelectorAll('.carousel img'));
        this.counter = 0;
        this.amount = this.imgs.length;
        this.current = imgs[0];
        this.next.addEventListener('click',this.slideRight.bind(this));
        this.prev.addEventListener('click',this.slideLeft.bind(this));
    }

    slideRight() {
        this.current.classList.remove('current-index');
        if (this.counter !== this.amount) {
            this.counter += 1;
        }
        else {
            this.counter = 0;
        }
        this.current = this.imgs[counter]
        this.current.classList.add('current-index');
    }

    slideLeft() {
        this.current.classList.remove('current-index');
        if(this.counter !== 0) {
            this.counter -= 1;
        }
        else {
            this.counter = this.amount;
        }
        this.current = imgs[counter]
        this.current.classList.add('current-index');
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
