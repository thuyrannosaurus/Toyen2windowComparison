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
    // Initialize each comparison separately
    const compare1 = new ImageCompare(document.getElementById("image-compare-1"), options).mount();
    const compare2 = new ImageCompare(document.getElementById("image-compare-2"), options).mount();
    const compare3 = new ImageCompare(document.getElementById("image-compare-3"), options).mount();
    
    // Add touch event listeners with scroll prevention
    [compare1, compare2, compare3].forEach(viewer => {
        const handleTouch = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        viewer.element.addEventListener('touchstart', handleTouch, { passive: false });
        viewer.element.addEventListener('touchmove', handleTouch, { passive: false });
    });
}); 