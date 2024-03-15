function musicPlayer() {

    var song = new Audio('./assets/audio/n_1.mp3');

    const play_button = document.getElementById("music_play_button");
    const time_left = document.getElementById("time_left");
    const time_right = document.getElementById("time_right");
    const slider = document.querySelector("#music_slider input");

    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');

    let rAF = null;
    let audioSource;
    let analyser;

    play_button.addEventListener("click", playMusic);

    slider.addEventListener('input', () => {

        time_left.textContent = calculateTime(slider.value);
        if (!song.paused) cancelAnimationFrame(rAF);

    });

    slider.addEventListener('change', () => {

        song.currentTime = slider.value;
        if (!song.paused) requestAnimationFrame(whilePlaying);

    });

    function whilePlaying() {

        slider.value = Math.floor(song.currentTime);
        time_left.textContent = calculateTime(slider.value);
        rAF = requestAnimationFrame(whilePlaying);

    }

    function playMusic() {

        play_button.removeEventListener("click", playMusic, true);

        song.play();
        playVisual();
        requestAnimationFrame(whilePlaying);

        play_button.innerHTML = `<i class="fa-solid fa-pause"></i>`;

        slider.max = Math.floor(song.duration);
        time_right.textContent = calculateTime(song.duration);

        play_button.addEventListener("click", function() {

            song.pause();

        })

    }

    function playVisual() {

        const audioContext = new AudioContext();

        if (!audioSource) {

            audioSource = audioContext.createMediaElementSource(song);
            analyser = audioContext.createAnalyser();
            audioSource.connect(analyser);
            analyser.connect(audioContext.destination);
            
        }

        canvas.width = 400;
        canvas.height = 140;

        analyser.fftSize = 128;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const barWidth = (canvas.width / bufferLength) * 1.4;
        
        let barHeight;

        let x;

        function animate() {

            x = 0;

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            analyser.getByteFrequencyData(dataArray);

            for(let i = 0; i < bufferLength; i++){

                barHeight = dataArray[i] / 5;

                ctx.fillStyle = '#6b957e';
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth;

                

            }

            requestAnimationFrame(animate);
        }

        animate();

    }

    function calculateTime(time) {
        
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${minutes}:${returnedSeconds}`;

    }

}

musicPlayer();