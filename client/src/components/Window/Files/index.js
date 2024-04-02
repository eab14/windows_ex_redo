import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faPlay } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useMemo, useState } from 'react';

import FilesLine from './FilesLine';
import FilesButton from './FilesButton';
import { useAuth } from '../../../context/AuthContext';

const Files = () => {

    const { user, files } = useAuth();
    const [ userFiles, setUserFiles ] = useState([]);

    const array = useMemo(() =>  [ 
        <FilesLine key={1} fileName="static_music_example" fileSize="6.33 MB" ext=".mp3" date={"25/3/2024"} wType="Music" file={{ url: "./music/n_1.mp3", description: { title: "Number One", artist: "Hazel Fernandes feat. Shiro Sagisu"  } }} />,
        <FilesLine key={2} fileName="static_video_example" fileSize="35.2 MB" ext=".mp4" date={"1/4/2024"} wType="Video" file={{ url: "./video/b.mp4"}} />,
        <FilesLine key={3} fileName="static_photo_example" fileSize="141 KB" ext=".jpg" date={"2/4/2024"} wType="Gallery" file={{ url: "./images/gallery/ff7_r.jpg" }} />
    ], []);

    const determineMediaType = (type) => {

        switch (type) {

            case "mp3":
            case "wav":
                return "Music";

            case "mp4":
                return "Video";

            case "jpg":
            case "jpeg":
                return "Gallery";

            default: return null;

        }

    }

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
                        date={"2/4/2024"} 
                        wType={determineMediaType(files[i].type)}
                        file={files[i]}
                    />
    
                )
    
            }
    
            setUserFiles([ ...array, ...filesArray ]);

        }

    }, [ files, setUserFiles, array ])

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
                    <p>Total Files: {user ? userFiles.length : array.length} | Total Size: 41.5 MB</p>
                </div>

            </div>

        </div>

    )

}

export default Files;