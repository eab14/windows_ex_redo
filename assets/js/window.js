const addHandlersWindow = () => {

    const minimizeButton = document.querySelectorAll('.window_utilities .min');
    const closeButton = document.querySelectorAll('.window_utilities .close');

    const maximizeButton = document.querySelectorAll('.window_utilities .max');

    for (let i = 0; i < minimizeButton.length; i++) maximizeButton[i].style.pointerEvents = "none";

    for (let i = 0; i < minimizeButton.length; i++) {

        minimizeButton[i].addEventListener("click", function() {

            let input = this.parentNode.parentNode.parentNode;
            minimizeWindow(input, input.offsetWidth);

        });

    }

    for (let i = 0; i < closeButton.length; i++) {

        closeButton[i].addEventListener("click", function() {

            let input = this.parentNode.parentNode.parentNode;
            input.style.display = "none";

        });

    }

}

const minimizeWindow = (input, initial_width) => {

    let content = input.querySelector(".window_content");
    let minimizeButton = input.querySelector(".min");
    let maximizeButton = input.querySelector(".max");

    gsap.to(input, 0.2, { width: 300 });
    gsap.to(content, 0.2,  { opacity: 0, height: 0, transformOrigin: "50% 50%" });

    minimizeButton.style.pointerEvents = "none";

    setTimeout(() => {

        maximizeButton.style.pointerEvents = "all";

        maximizeButton.addEventListener("click", function() {

            maximizeWindow(input, initial_width);
    
        });
        
    }, 200);


}

const maximizeWindow = (input, initial_width) => {

    let content = input.querySelector(".window_content");
    let minimizeButton = input.querySelector(".min");
    let maximizeButton = input.querySelector(".max");

    gsap.to(input, 0.2, { width: initial_width });
    gsap.to(content, 0.2,  { opacity: 1, height: "fit-content", transformOrigin: "50% 50%" });

    maximizeButton.style.pointerEvents = "none";

    setTimeout(() => minimizeButton.style.pointerEvents = "all", 200);

}

addHandlersWindow();