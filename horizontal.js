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
    
    // Improved mobile touch handling
    [compare1, compare2, compare3].forEach(viewer => {
        let isDragging = false;
        let startX, startY;
        
        viewer.element.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            isDragging = true;
        }, { passive: true });

        viewer.element.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - startX);
            const deltaY = Math.abs(touch.clientY - startY);
            
            // If horizontal movement is greater than vertical, prevent scrolling
            if (deltaX > deltaY) {
                e.preventDefault();
            }
        }, { passive: false });

        viewer.element.addEventListener('touchend', () => {
            isDragging = false;
        });
    });
}); 