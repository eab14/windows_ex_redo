var exp_click = false;

const addHandlersNav = () => {

    const logo = document.querySelector(".logo_spacer");
    const nav_links = document.querySelectorAll("li");

    logo.addEventListener("mouseenter", function() {

        hoverLogo(this);

    });

    logo.addEventListener("click", function() {

        exp_click = (exp_click) ? false : true;
        clickLogo(this, exp_click);

    })
    
    for (let i = 0; i < nav_links.length; i++) {

        nav_links[i].addEventListener("mouseenter", function() {

            const icon = this.querySelector('.nav_icon');
            (!icon.classList.contains("selected")) && hoverNavLink(this);

        });

        nav_links[i].addEventListener("mouseleave", function() {

            const icon = this.querySelector('.nav_icon');
            (!icon.classList.contains("selected")) && exitNavLink(this);

        });

        nav_links[i].addEventListener("click", function() {

            const icon = this.querySelector('.nav_icon');
            clickNavLink(nav_links, this);

        });

    }

}

const hoverNavLink = (input) => {

    const accent = input.querySelector('.accent');
    gsap.to(accent, 0.3, { width: 4, ease:Power1.easeInOut });

}

const exitNavLink = (input) => {

    const accent = input.querySelector('.accent');
    gsap.to(accent, 0.3, { width: 0, ease:Power1.easeInOut });

}

const clickNavLink = (array, input) => {
    
    if (!input.parentNode.parentNode.classList.contains("nav_footer_spacer")) {

        for (let i = 0; i < array.length; i++) {

            let accent = array[i].querySelector('.accent');
            let icon = array[i].querySelector('.nav_icon');
            let nav_text = array[i].querySelector('.nav_text p');

            accent.classList.remove("accent_selected");
            accent.style.width = 0;
            icon.classList.remove("selected");
            nav_text.classList.remove("text_selected");

        }

        const selected_accent = input.querySelector('.accent');
        const selected_icon = input.querySelector('.nav_icon');
        const selected_text = input.querySelector('.nav_text p');

        selected_accent.classList.add("accent_selected");
        selected_icon.classList.add("selected");
        selected_text.classList.add("text_selected");

    }

}

const hoverLogo = (input) => {

    const diamond = input.querySelectorAll(".diamond");
    const indicator = input.querySelector(".logo_indicator");

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(diamond[0], { scale: 1 }, { duration: 0.3, scale: 1.05, background: "#6b957e" }, 0);
    tl.fromTo([ diamond[2], diamond[3] ], { scale: 1 }, { duration: 0.3, delay: 0.15, scale: 1.1, background: "#19ac5b" }, 0);
    tl.fromTo(diamond[1], { scale: 1 }, { duration: 0.3, delay: 0.3, scale: 1.05, background: "#6b957e" }, 0);
    // tl.fromTo(indicator, { opacity: 0 }, { duration: 0.3, delay: 0.25, opacity: 1, ease:Power1.easeInOut }, 0);
    tl.play();

    input.addEventListener("mouseleave", function() {
        tl.reverse();
    })

}

const clickLogo = (input, selected) => {

    const nav = document.querySelector("nav");
    const icon = input.querySelector(".logo_indicator");
    const text = input.querySelector(".logo_text");
    const logo_p = text.querySelector("p");

    const nav_links = document.querySelectorAll('.nav_text');

    if (selected) {

        icon.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
        gsap.to(icon, 0.2, { opacity: 0 })
        gsap.to(icon, 0.2, { delay: 0.2, opacity: 1, background: "#19ac5b" })
        gsap.to(nav, 0.3, { width: 200 })
        gsap.to(text, 0.3, { width: "calc(100% - 60px)" })
        gsap.to(logo_p, 0.3, { delay: 0.15, left: "-19px", opacity: 1 })

        let variation = 0.07;

        for (let i = 0; i < nav_links.length; i++) {

            let nav_p = nav_links[i].querySelector('p');
            gsap.to(nav_links[i], 0.3, { width: "calc(100% - 60px)" })
            gsap.to(nav_p, 0.3, { delay: variation, left: "-19px", opacity: 1 })

            variation += 0.07;

        }

    }

    else {

        icon.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
        gsap.to(icon, 0.2, { opacity: 0 })
        gsap.to(icon, 0.2, { delay: 0.2, opacity: 1, background: "#6b957e" })
        gsap.to(nav, 0.3, { width: 60 })
        gsap.to(text, 0.3, { width: 0 })
        gsap.to(logo_p, 0.2, { opacity: 0, left: "-30px" })

        for (let i = 0; i < nav_links.length; i++) {

            let nav_p = nav_links[i].querySelector('p');
            gsap.to(nav_links[i], 0.3, { width: 0 })
            gsap.to(nav_p, 0.2, { left: "-30px", opacity: 0 })

        }

    }

}

addHandlersNav();