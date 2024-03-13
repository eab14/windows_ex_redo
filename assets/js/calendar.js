var selected_date = new Date();

const calculateDate = (date, value) => {

    const month = date.getMonth() + 1;

    let shift = false;
    let shift_month;

    if (month === 1 && value === -1) { shift_month = 12; shift = true; }
    else if (month === 12 && value === 1) { shift_month = 1; shift = true; }

    date = (!shift) ? 
        `${date.getFullYear()}-${date.getMonth() + (1 + value)}-1` : 
        `${date.getFullYear() + value}-${shift_month}-1`;

    return date;

}

const addHandlersCal = () => {

    const next_button = document.querySelector(".cal_header #next_month");
    const prev_button = document.querySelector(".cal_header #prev_month");

    next_button.addEventListener("click", () => {

        selected_date = new Date(calculateDate(selected_date, 1));
        createDays(selected_date);
        
    });

    prev_button.addEventListener("click", () => {

        selected_date = new Date(calculateDate(selected_date, -1));
        createDays(selected_date);

    });

}

const createDays = (date) => {

    const content = document.querySelector(".cal_content");
    content.innerHTML = '';

    const leap_year = date.getFullYear() % 4 === 0;

    const month = date.getMonth();
    const days_array = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
    days_array[1] = (leap_year) ? 29 : 28;

    const days = days_array[month];

    const div_month = document.querySelector(".cal_header h2");
    const div_year = document.querySelector(".cal_header h3");

    const str_year = date.toLocaleString("en-US", { year: "numeric" });
    const str_month = date.toLocaleString("en-US", { month: "long" });

    div_month.textContent = str_month;
    div_year.textContent = str_year;
    
    const start_day = new Date(`${date.getFullYear() + "-" + (date.getMonth() + 1) + "-1"}`).getDay();
    const lines_amount = Math.ceil((days + start_day) / 7);

    let day = 1;

    for (let i = 0; i < lines_amount; i++) {

        const line = document.createElement('div');
        line.className = "flex row cal_content_line";
        content.append(line);

        for (let j = 0; j < 7; j++) {

            const box = document.createElement('div');
            box.className = "box";

            if ((i === 0 && j < start_day) || (i === lines_amount - 1 && day > days)) { box.className = "box empty"; line.append(box); }

            else {

                const day_h3 = document.createElement('h3');
                day_h3.textContent = day++;
                box.append(day_h3);
                line.append(box);

            }

        }

    }

    animation();

}

const animation = () => {

    const rows = document.querySelectorAll(".cal_content_line");

    let row_variation = 0.05;

    for (let i = 0; i < rows.length; i++) {

        let blocks = rows[i].querySelectorAll(".box");
        
        let block_variation = 0.10;

        for (let j = 0; j < blocks.length; j++) {

            gsap.to(blocks[j], block_variation, { delay: block_variation + row_variation, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });
            block_variation += 0.10;

        }

        row_variation += 0.05;

    }

}

createDays(selected_date);
addHandlersCal();