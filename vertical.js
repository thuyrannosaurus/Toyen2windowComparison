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
    verticalMode: true
};

window.addEventListener('load', function() {
    const viewers = document.querySelectorAll(".image-compare");
    viewers.forEach((element) => {
        new ImageCompare(element, options).mount();
    });
}); 