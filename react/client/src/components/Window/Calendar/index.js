import './index.css';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Calendar = () => {

    const [ selectedDate, setSelectedDate ] = useState(new Date());

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

    const createDays = (date) => {

        const current_date = new Date();
        const str_current = `${current_date.getFullYear()}-${current_date.getMonth() + 1}-${current_date.getDate()}`;
    
        const content = document.querySelector(".cal_content");
        content.innerHTML = '';
    
        const window_content = content.parentNode.parentNode;
        window_content.style.height = "fit-content";
    
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
                (`${date.getFullYear()}-${date.getMonth() + 1}-${day}` === str_current) ? box.className = "box current" : box.className = "box";
    
                if ((i === 0 && j < start_day) || (i === lines_amount - 1 && day > days)) { box.className = "box empty"; line.append(box); }
    
                else {
    
                    const day_h3 = document.createElement('h3');
                    day_h3.textContent = day++;
                    box.append(day_h3);
                    line.append(box);
    
                }
    
            }
    
        }

    }

    const prevMonth = () => {

        setSelectedDate(new Date(calculateDate(selectedDate, -1)));
        createDays(selectedDate);

    }

    const nextMonth = () => {

        setSelectedDate(new Date(calculateDate(selectedDate, 1)));
        createDays(selectedDate);

    }

    useEffect(() => {

        createDays(selectedDate);

    }, [selectedDate])

    return (

        <div id="cal_spacer" className="flex col center">

            <div className="cal_header_spacer flex col">

                <div className="cal_header flex row">

                    <span id="prev_month" className="flex center" onClick={prevMonth}><FontAwesomeIcon icon={faCaretLeft} /></span>
                    <div className="flex center">
                        <h2 className="flex center">Month</h2>
                        <h3 className="flex center">Year</h3>
                    </div>
                    <span id="next_month" className="flex center" onClick={nextMonth}><FontAwesomeIcon icon={faCaretRight} /></span>

                </div>

                <div className="cal_day_header flex row">
                    <span className="flex center">S</span>
                    <span className="flex center">M</span>
                    <span className="flex center">T</span>
                    <span className="flex center">W</span>
                    <span className="flex center">T</span>
                    <span className="flex center">F</span>
                    <span className="flex center">S</span>
                </div>

            </div>

            <div className="cal_content flex col"></div>

        </div>

    );

}

export default Calendar;