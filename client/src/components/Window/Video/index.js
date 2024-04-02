import './index.css';

const Video = (props) => {



    return (
        <div className="flex video_spacer">

            <video src={props.file.url} controls></video>

        </div>
    )

}

export default Video;