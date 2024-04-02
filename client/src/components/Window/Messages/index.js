import './index.css';

import { useAuth } from '../../../context/AuthContext';
import MessageLine from './MessageLine';

const Messages = () => {

    const { user, messages } = useAuth();
    
    return (
        
        <div className="flex col messages_spacer">

            { user ? <>

                { messages && messages.map((message, index) => <MessageLine key={index} user={`${"Test User #" + (index + 1)}`} date="12:00 AM" msg={message.body} /> ) }

            </>  
            
            :

            <>

            <MessageLine key={8} user="Test User #1" date="3:26 AM" msg="The things I waste my time on, I swear..." />
            <MessageLine key={9} user="Test User #2" date="1:23 AM" msg="So when's this website gonna be done?"/>
            <MessageLine key={10} user="Test User #3" date="Wednesday" msg="LOL @ that error last night" />

            </>
            
            }

        </div>
    )
  
}

export default Messages;