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

const viewers = ['image-compare-1', 'image-compare-2', 'image-compare-3'].map(id => {
    return new ImageCompare(document.getElementById(id), options).mount();
}); 