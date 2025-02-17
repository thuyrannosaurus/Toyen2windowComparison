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

document.addEventListener('DOMContentLoaded', () => {
    let currentViewer = null;

    // Initialize the first comparison
    const firstContainer = document.querySelector('#comparison1 .image-compare');
    currentViewer = new ImageCompare(firstContainer, options).mount();

    // Handle comparison switching
    const selector = document.getElementById('comparison-selector');
    selector.addEventListener('change', (e) => {
        // Hide all containers
        document.querySelectorAll('.comparison-container').forEach(container => {
            container.classList.add('hidden');
        });

        // Show selected container
        const selectedContainer = document.getElementById(e.target.value);
        selectedContainer.classList.remove('hidden');

        // Destroy previous viewer if it exists
        if (currentViewer) {
            currentViewer.unmount();
        }

        // Initialize new viewer
        const newContainer = selectedContainer.querySelector('.image-compare');
        currentViewer = new ImageCompare(newContainer, options).mount();
    });
}); 