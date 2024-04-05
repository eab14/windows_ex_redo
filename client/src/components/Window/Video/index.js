import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faBackward, faForward, faVolumeHigh, faDownload } from '@fortawesome/free-solid-svg-icons';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';


const Video = (props) => {

    const videoRef = useRef();

    const [sliderValue, setSliderValue] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const revealControls = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".video_controls"), { bottom: 0, duration: 0.2 })

    }

    const hideControls = ({ currentTarget }) => {

        let q = gsap.utils.selector(currentTarget);
        gsap.to(q(".video_controls"), { bottom: -100, duration: 0.2 })

    }

    const formatTime = (time) => {

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    }

    const handlePlayPause = () => {

        const video = videoRef.current;

        if (video.paused) video.play();
        else video.pause();

    };

    const handleSliderChange = (e) => {
        const newTime = parseFloat(e.target.value);
        const video = videoRef.current;
        video.currentTime = newTime;
        setSliderValue(newTime);
    };

    useEffect(() => {

        const video = videoRef.current;

        const handleLoadedMetadata = () => setDuration(video.duration);

        const handleTimeUpdate = () => {

            setCurrentTime(video.currentTime);
            setSliderValue(video.currentTime);

        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };

    }, []);

    return (
        <div className="flex video_spacer">

            <video ref={videoRef} src={props.file.url}></video>

            <div className="flex video_controls_spacer" onMouseEnter={revealControls} onMouseLeave={hideControls}>

                <div className="flex video_controls">
                    <div className="flex row video_controls_overlay"></div>

                    <div id="video_slider">
                        <input type="range" value={sliderValue} max={duration} onChange={handleSliderChange} />
                    </div>

                    <div className="flex video_time_left">{formatTime(currentTime)}</div>
                    <div className="flex video_time_right">{formatTime(duration)}</div>

                    <div className="flex center video_back_button">
                        <span><FontAwesomeIcon icon={faBackward} /></span>
                    </div>

                    <div className="flex center video_play_button">
                        <span onClick={handlePlayPause}><FontAwesomeIcon icon={videoRef.current && videoRef.current.paused ? faPlay : faPause} /></span>
                    </div>

                    <div className="flex center video_next_button">
                        <span><FontAwesomeIcon icon={faForward} /></span>
                    </div>

                    <div className="flex center video_download">
                        <a href={props.file.url} download><span><FontAwesomeIcon icon={faDownload} /></span></a>
                    </div>

                    <div className="flex row center video_volume_controls">
                        <span className="flex center video_volume_icon"><FontAwesomeIcon icon={faVolumeHigh} /></span>
                        <span className="flex video_volume_select"></span>
                        <span className="flex video_volume_select"></span>
                        <span className="flex video_volume_select"></span>
                        <span className="flex video_volume_select volume_grey"></span>
                        <span className="flex video_volume_select volume_grey"></span>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default Video;