const options = {
    controlColor: "#FFFFFF",
    controlShadow: true,
    addCircle: true,
    addCircleBlur: true,
    showLabels: true,
    labelOptions: {
        before: 'Før',
        after: 'Etter',
        onHover: false
    },
    smoothing: true,
    smoothingAmount: 100,
    startingPoint: 50,
    verticalMode: false
};

window.addEventListener('load', function() {
    const viewers = document.querySelectorAll(".image-compare");
    
    // Prevent default touch behavior on the entire container
    document.querySelector('.max-w-3xl').addEventListener('touchmove', (e) => {
        if (e.target.closest('.image-compare')) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, { passive: false });

    viewers.forEach((element) => {
        let view = new ImageCompare(element, options).mount();
        
        // Prevent focus and scroll on touch start
        element.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Prevent focus
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        }, { passive: false });
    });
}); 