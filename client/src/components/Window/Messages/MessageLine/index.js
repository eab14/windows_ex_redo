import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { gsap, Power1 } from 'gsap';

const MessageLine = (props) => {

    const enterHandler = ({ currentTarget }) => {

        const accent = currentTarget.querySelector('.message_accent');

        gsap.to(currentTarget, { background: "#333", ease:Power1.easeInOut, duration: 0.3 })
        gsap.to(accent, { opacity: 1, ease:Power1.easeInOut, duration: 0.3 })

    }

    const leaveHandler = ({ currentTarget }) => {

        const accent = currentTarget.querySelector('.message_accent');

        gsap.to(currentTarget, { background: "#242424", ease:Power1.easeInOut, duration: 0.3 })
        gsap.to(accent, { opacity: 0.5, ease:Power1.easeInOut, duration: 0.3 })

    }

    return (

        <div className="flex row messages_line" onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>

            <div className="message_avatar flex"></div>
            <div className="message_info flex row">
                <div className="message_description flex col">
                    <h3>{props.user}</h3>
                    <p>{props.msg}</p>
                </div>
                <div className="message_status flex col">
                    <h4>{props.date}</h4>
                    <span className="flex center message_notification">1</span>
                </div>
                <div className="message_accent flex center">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

        </div>
        
    )

}

export default MessageLine;