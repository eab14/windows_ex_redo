import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faPlay } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

import FilesLine from './FilesLine';
import FilesButton from './FilesButton';
import { useAuth } from '../../../context/AuthContext';

const Files = () => {

    const { user, files } = useAuth();
    const [ userFiles, setUserFiles ] = useState([]);

    const array = [ 
        <FilesLine key={1} fileName="music_example" fileSize="3 MB" ext=".mp3" date={"25/3/2024"} wType="Music" />,
        <FilesLine key={2} fileName="video_example" fileSize="20 MB" ext=".mp4" date={"25/3/2024"} />,
        <FilesLine key={3} fileName="photo_example" fileSize="700 KB" ext=".jpeg" date={"25/3/2024"} />
    ];

    useEffect(() => {

        let filesArray = [];

        // Testing...

        if (files) {

            for (let i = 0; i < files.length; i++) {

                filesArray.push(
    
                    <FilesLine 
                        key={files[i]._id} 
                        fileName={files[i].description.name} 
                        fileSize={files[i].size} ext={"." + files[i].type} 
                        date={"26/3/2024"} wType={files[i].type === "mp3" ? "Music" : null}
                        file={files[i]}
                    />
    
                )
    
            }
    
            setUserFiles(filesArray);

        }

    }, [ files, setUserFiles ])

    return (

        <div className="files_spacer flex row">

            <div className="files_nav flex col">

                <FilesButton text="All Files" selected={true} />
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

                <div className="files_content flex col">

                    { user ? userFiles : array }
                    
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