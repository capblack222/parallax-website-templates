window.addEventListener('scroll', function (e) {
    const target = document.querySelectorAll('.scroll');

    // to know what css properties you can change or access or whatever, like just to know all the css properties use
    //console.log(target.style)
    // target.style.background = 'black';
    // basically changes the css when we start scrolling, as that's what we are trying to target

    // target.style.transform = 'translateY(50px)'; This was just to check
    // Now this just drops it but we want a parallax effect so for it we need to determine the amount of pixels the scrollbar has scrolled and insert that into a formula so that the rate of this dropping is relative to the scrolling
    //for this we need window.pageYOffset like the scrolling amount

    // var scrolled = window.pageYOffset;
    // var rate = scrolled * -2;

    // target.style.transform = 'translateY(' + rate + 'px)'; 
    //really cool stuff

    // Just iterating to the whole list of elements with that particular classname
    var index = 0;
    var length = target.length;

    for (index; index < length; index++) {

        //to make the rate dynamic, we use the data-whatever = "the actual value" 
        var posx = window.pageYOffset * target[index].dataset.ratex;
        var posy = window.pageYOffset * target[index].dataset.ratey;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translateY(' + posy + 'px)';
        } else {
            target[index].style.transform = 'translate3d(' + posx + 'px,' + posy + 'px, 0px)';
            // target[index].style.transform = 'translateY(' + posy + 'px)';
        }

    }

});