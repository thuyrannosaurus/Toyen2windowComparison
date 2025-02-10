document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById("image-compare");
    const viewer = new ImageCompare(element, {
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
    }).mount();
}); 