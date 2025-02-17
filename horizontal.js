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
    viewers.forEach((element) => {
        let view = new ImageCompare(element, options).mount();
    });
}); 