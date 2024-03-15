const addHandlersWindow = (str) => {

    const minimizeButton = document.querySelectorAll('.window_utilities .min');
    const closeButton = document.querySelectorAll('.window_utilities .close');

    const maximizeButton = document.querySelectorAll('.window_utilities .max');

    for (let i = 0; i < minimizeButton.length; i++) {

        let input = minimizeButton[i].parentNode.parentNode.parentNode;
        let title = input.querySelector("h2").textContent;
        

        if (title === str) {
            
            minimizeButton[i].addEventListener("click", function() {
                
                minimizeWindow(input, input.offsetWidth);
                maximizeButton[i].style.pointerEvents = "none";
                console.log(this);

            });

        }

    }

    for (let i = 0; i < closeButton.length; i++) {

        closeButton[i].addEventListener("click", function() {

            let input = this.parentNode.parentNode.parentNode;
            let title = input.querySelector("h2").textContent;

            input.parentNode.removeChild(input);

            switch (title) {

                case "Account": account_clicked = false; break;
                case "Calendar": calendar_clicked = false; break;
                case "Database": database_clicked = false; break;
                case "Messages": messages_clicked = false; break;
                case "Music": music_clicked = false; break;
                case "Settings": settings_clicked = false; break;
                case "Video": video_clicked = false; break;

            }

        });

    }

}

const minimizeWindow = (input, initial_width) => {

    let content = input.querySelector(".window_content");
    let content_height = content.offsetHeight;

    let minimizeButton = input.querySelector(".min");
    let maximizeButton = input.querySelector(".max");

    let taskbar = document.getElementById("taskbar_placer");

    gsap.to(input, 0.2, { width: 280 });
    gsap.to(content, 0.2,  { opacity: 0, height: 0, transformOrigin: "50% 50%" });
    gsap.to(input, 0.2, { opacity: 0 });
    gsap.to(input, 0.2, { delay: 0.2, opacity: 1 });
    

    minimizeButton.style.pointerEvents = "none";

    if (input.classList.contains('video_resize')) input.style.resize = "none";

    let finish = setTimeout(() => {

        maximizeButton.style.pointerEvents = "all";
        maximizeButton.addEventListener("click", function() { maximizeWindow(input, initial_width, content_height); });
        input.style.margin = "0 5px";
        taskbar.appendChild(input);

        clearTimeout(finish);
        
    }, 200);

}

const maximizeWindow = (input, initial_width, initial_height) => {

    let content = input.querySelector(".window_content");
    let content_spacer = document.getElementById("content_spacer");
    let minimizeButton = input.querySelector(".min");
    let maximizeButton = input.querySelector(".max");

    content_spacer.appendChild(input);
    input.style.margin = "0 10px 20px 10px";
    input.style.transform = "translate(0px,0px)";

    gsap.to(input, 0.2, { width: initial_width });
    gsap.to(content, 0.2,  { opacity: 1, height: initial_height, transformOrigin: "50% 50%" });

    maximizeButton.style.pointerEvents = "none";

    setTimeout(() => minimizeButton.style.pointerEvents = "all", 200);

}

addHandlersWindow("Database");
addHandlersWindow("Messages");
addHandlersWindow("Settings");
addHandlersWindow("Account");