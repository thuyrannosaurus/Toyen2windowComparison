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
    // Using querySelectorAll to get all comparison containers
    const viewers = document.querySelectorAll("[id^='image-compare-']");
    
    viewers.forEach((element) => {
        new ImageCompare(element, options).mount();
    });
}); 