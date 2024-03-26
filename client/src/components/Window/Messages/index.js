import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Messages = () => {

    return (
        
        <div class="flex col messages_spacer">

            <div class="flex row messages_line">

                <div class="message_avatar flex"></div>
                <div class="message_info flex row">
                    <div class="message_description flex col">
                        <h3>Test User #1</h3>
                        <p>The things I waste my time on, I swear...</p>
                    </div>
                    <div class="message_status flex col">
                        <h4>3:26 AM</h4>
                        <span class="flex center message_notification">1</span>
                    </div>
                    <div class="message_accent flex center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

            </div>

            <div class="flex row messages_line">

                <div class="message_avatar flex"></div>
                <div class="message_info flex row">
                    <div class="message_description flex col">
                        <h3>Test User #2</h3>
                        <p>So when's this website gonna be done?</p>
                    </div>
                    <div class="message_status flex col">
                        <h4>1:23 AM</h4>
                        <span class="flex center message_notification">5</span>
                    </div>
                    <div class="message_accent flex center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

            </div>

            <div class="flex row messages_line">

                <div class="message_avatar flex"></div>
                <div class="message_info flex row">
                    <div class="message_description flex col">
                        <h3>Test User #3</h3>
                        <p>LOL @ that error last night</p>
                    </div>
                    <div class="message_status flex col">
                        <h4>Wednesday</h4>
                        <span class="flex center message_notification">2</span>
                    </div>
                    <div class="message_accent flex center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

            </div>

        </div>
    )
  
}

export default Messages;