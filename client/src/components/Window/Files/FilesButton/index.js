import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faMusic, faImage, faVideo, faUpload } from "@fortawesome/free-solid-svg-icons";

const FilesButton = (props) => {

    return (
        <div className={props.type === "sub" ? "files_link files_sub flex center row" : "files_link flex center row"}>

            <span className="flex center">
                { props.text === "All Files" && <FontAwesomeIcon icon={faFolderOpen} /> }
                { props.text === "Music" && <FontAwesomeIcon icon={faMusic} /> }
                { props.text === "Photos" && <FontAwesomeIcon icon={faVideo} /> }
                { props.text === "Videos" && <FontAwesomeIcon icon={faImage} /> }
                { props.text === "Upload" && <FontAwesomeIcon icon={faUpload} /> }
            </span>

            <li className="flex files_link_text">{props.text}</li>
            <div className={props.selected ? "files_nav_accent selected" : "files_nav_accent"}></div>
        </div>
    )

}

export default FilesButton;