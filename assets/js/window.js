const addHandlersWindow = () => {

    const minimizeButton = document.querySelectorAll('.window_utilities .min');

    for (let i = 0; i < minimizeButton.length; i++) {

        minimizeButton[i].addEventListener("click", function() {

            let input = this.parentNode.parentNode.parentNode;

            minimizeWindow(input, input.offsetWidth, input.offsetHeight);

        });

    }

}

function minimizeWindow(input, initial_width, initial_height) {

    let content = input.querySelector(".window_content");
    content.style.opacity = 0;

    gsap.to(input, 0.3, { y: window.innerHeight - 70, width: initial_width - 20 })

}

addHandlersWindow();