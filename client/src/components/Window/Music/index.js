import './index.css';
import n1 from './n_1.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faBackward, faForward, faVolumeHigh, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const Music = () => {

    const [ song ] = useState(new Audio(n1));
    const [ info ] = useState({ title: "Number One", artist: "Hazel Fernandes feat. Shiro Sagisu" }) 
    const [ sliderValue, setSliderValue ] = useState(0);
    const [ timeLeft, setTimeLeft ] = useState('0:00');
    const [ timeRight, setTimeRight ] = useState('0:00');

    const canvasRef = useRef(null);
    const rAF = useRef(null);
    const audioSource = useRef(null);
    const analyser = useRef(null);

    const calculateTime = (time) => {

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;

    };

    const whilePlaying = () => {

        setSliderValue(song.currentTime);
        setTimeLeft(calculateTime(song.currentTime));
        rAF.current = requestAnimationFrame(whilePlaying);

    };

    const playVisual = () => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const audioContext = new AudioContext();

        if (!audioSource.current) {
            audioSource.current = audioContext.createMediaElementSource(song);
            analyser.current = audioContext.createAnalyser();
            audioSource.current.connect(analyser.current);
            analyser.current.connect(audioContext.destination);
        }

        canvas.width = 400;
        canvas.height = 140;
        analyser.current.fftSize = 128;

        const bufferLength = analyser.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        let x = 0;

        const animate = () => {
            x = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            analyser.current.getByteFrequencyData(dataArray);
            const barWidth = (canvas.width / bufferLength) * 1.4;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 3;
                ctx.fillStyle = '#6b957e';
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth;
            }

            requestAnimationFrame(animate);
        };

        animate();

    };

    const playPauseMusic = () => {

        if (song.paused) {

            song.play();
            playVisual();
            requestAnimationFrame(whilePlaying);

        } 
        
        else {

            song.pause();
            cancelAnimationFrame(rAF.current);

        }

    };

    const handleSliderChange = (e) => {

        const newValue = parseFloat(e.target.value);
        setSliderValue(newValue);
        song.currentTime = newValue;
        setTimeLeft(calculateTime(newValue));

    };

    useEffect(() => {

        const interval = setInterval(() => {

            setSliderValue(song.currentTime);
            setTimeLeft(calculateTime(song.currentTime));
            setTimeRight(calculateTime(song.duration));

        }, 1000);

        return () => clearInterval(interval);

    }, [song]);

    return (
        <>
            <canvas id="visualizer" ref={canvasRef} className="flex"></canvas>

            <div id="music_controls" className="flex row">

                <div id="music_slider">
                    <input type="range" value={sliderValue} max={`${song.duration}`} onChange={handleSliderChange} />
                </div>

                <p id="time_left" className="flex music_time">{timeLeft}</p>
                <p id="time_right" className="flex music_time">{timeRight}</p>

                <div id="music_main_controls" className="flex row">

                    <div id="music_back_button" className="flex center">

                        <span><FontAwesomeIcon icon={faBackward} /></span>

                    </div>

                    <div id="music_play_button" className="flex center" onClick={playPauseMusic}>

                        <span>

                            <span>{song.paused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}</span>

                        </span>

                    </div>

                    <div id="music_next_button" className="flex center">

                        <span><FontAwesomeIcon icon={faForward} /></span>

                    </div>

                </div>

                <div id="music_info" className="flex col">
                    <p>{info.title}</p>
                    <p>{info.artist}</p>
                </div>

                <div id="music_utils" className="flex row">
                    <span><FontAwesomeIcon icon={faRepeat} /></span>
                    <span><FontAwesomeIcon icon={faShuffle} /></span>
                </div>

                <div id="music_volume" className="flex">
                    <div className="volume_icon">
                        <span><FontAwesomeIcon icon={faVolumeHigh} /></span>
                    </div>
                    <div className="volume_block"></div>
                    <div className="volume_block"></div>
                    <div className="volume_block block_grey"></div>
                </div>

            </div>
        </>
    );
};

export default Music;