document.addEventListener('DOMContentLoaded', function() {
    let isVertical = false;
    let viewer = null;
    
    function initializeViewer() {
        const element = document.getElementById("image-compare");
        
        viewer = new ImageCompare(element, {
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
            verticalMode: isVertical,
            hoverStart: false
        }).mount();
    }

    // Initialize the viewer on page load
    initializeViewer();

    // Handle direction toggle
    const toggleButton = document.getElementById('toggleDirection');
    toggleButton.addEventListener('click', function() {
        if (viewer) {
            viewer.destroy();
        }
        isVertical = !isVertical;
        initializeViewer();
    });
}); 