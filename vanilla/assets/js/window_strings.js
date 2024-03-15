const calendar_string = `

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Calendar</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">

            <div id="cal_spacer" class="flex col center">

                <div class="cal_header_spacer flex col">

                    <div class="cal_header flex row">

                        <span id="prev_month" class="flex center"><i class="fa-solid fa-caret-left"></i></span>
                        <div class="flex center">
                            <h2 class="flex center">September</h2>
                            <h3 class="flex center">Year</h3>
                        </div>
                        <span id="next_month" class="flex center"><i class="fa-solid fa-caret-right"></i></span>

                    </div>

                    <div class="cal_day_header flex row">
                        <span class="flex center">S</span>
                        <span class="flex center">M</span>
                        <span class="flex center">T</span>
                        <span class="flex center">W</span>
                        <span class="flex center">T</span>
                        <span class="flex center">F</span>
                        <span class="flex center">S</span>
                    </div>

                </div>

                <div class="cal_content flex col"></div>

            </div>

        </div>

    </div>

`;

const music_string = `

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Music</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">

            <canvas id="visualizer" class="flex"></canvas>

            <div id="music_controls" class="flex row">

                <div id="music_slider"><input type="range"></div>

                <p id="time_left" class="flex music_time">0:00</p>
                <p id="time_right" class="flex music_time">0:00</p>

                <div id="music_play_button" class="flex center">

                    <span><i class="fa-solid fa-play"></i></span>

                </div>

            </div>

        </div>

    </div>

`;

const settings_string = `

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Settings</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">


            <div class="test_5"></div>

        </div>

    </div>

`;

const video_string = `

    <div class="window flex col video_resize">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Video</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">

            <video src="./assets/video/clean_your_eyes_with_bleach.mp4" controls></video>

        </div>

    </div>

`;

const messages_string = `

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Messages</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">


            <div class="test_2"></div>

        </div>

    </div>

`;

const account_string = `

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Account</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">


            <div class="test_1"></div>

        </div>

    </div>

`;

const database_string = `

    <div class="window flex col">

        <div class="flex row window_header">

            <span class="flex"></span>

            <h2>Database</h2>

            <div class="flex row window_utilities">

                <div class="flex center icon min"><i class="fa-solid fa-minus"></i></div>
                <div class="flex center icon max"><i class="fa-solid fa-window-maximize"></i></div>
                <div class="flex center icon close"><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>

        <div class="flex col window_content">


            <div class="test_3"></div>

        </div>

    </div>

`;