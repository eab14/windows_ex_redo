import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faPlay } from '@fortawesome/free-solid-svg-icons';

import FilesLine from './FilesLine';
import FilesButton from './FilesButton';

const Files = () => {

    return (

        <div className="files_spacer flex row">

            <div className="files_nav flex col">

                <FilesButton text="All Files" selected />
                <div className="files_divider"></div>

                <FilesButton text="Music" type="sub" />
                <div className="files_divider"></div>

                <FilesButton text="Photos" type="sub" />
                <div className="files_divider"></div>

                <FilesButton text="Videos" type="sub" />
                <div className="files_divider"></div>

                <div className="flex col files_upload_spacer">

                    <div className="files_divider"></div>
                    <FilesButton text="Upload" type="sub" />

                </div>

            </div>
            <div className="files_content_spacer flex col">

                <div className="files_content_header flex row">
                    <div className="flex files_content_sub_header">File name<span className="files_sort_icon"><FontAwesomeIcon icon={faSortUp} /></span></div>
                    <div className="flex files_content_sub_header">Size<span className="files_sort_icon"><FontAwesomeIcon icon={faSortUp} /></span></div>
                    <div className="flex files_content_sub_header">Extension<span className="files_sort_icon"><FontAwesomeIcon icon={faSortUp} /></span></div>
                    <div className="flex files_content_sub_header">Date<span className="files_sort_icon"><FontAwesomeIcon icon={faSortUp} /></span></div>
                </div>

                <div class="files_content flex col">

                    <FilesLine fileName="music_example" fileSize="3 MB" ext=".mp3" date={"25/3/2024"} />
                    <FilesLine fileName="video_example" fileSize="20 MB" ext=".mp4" date={"25/3/2024"} />
                    <FilesLine fileName="photo_example" fileSize="700 KB" ext=".jpeg" date={"25/3/2024"} />
                    
                </div>

                <div className="flex center files_total">
                    <div className="flex files_total_play"><span><FontAwesomeIcon icon={faPlay} /></span>Play all</div>
                    <p>Total Files: 3 | Total Size: 23.7 MB</p>
                </div>

            </div>

        </div>

    )

}

export default Files;