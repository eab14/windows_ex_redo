import Window from '../../';
import { useWindowsEX } from '../../../../context/WindowContext';

const FilesLine = (props) => {

    const { windows, setStatus, setWindows } = useWindowsEX();

    const clickHandler = () => {

        let w, s;

        if (!windows.find(window => window.props.selected === props.wType)) {

                if (props.wType === "Music" && props.file) {
            
                w = <Window key={props.wType} selected={props.wType} file={props.file} />;
                s = [props.wType, "max"];

                setWindows(prevWindows => [ ...prevWindows, w ]);
                setStatus(prevStatus => [ ...prevStatus, s ]);

            }

        }

    }

    return (
    
        <div className="flex files_file" onClick={clickHandler}>

            <div className="flex files_file_name">{props.fileName}</div>
            <div className="flex files_file_size">{props.fileSize}</div>
            <div className="flex files_file_ext">{props.ext}</div>
            <div className="flex files_file_date">{props.date}</div>
            
        </div>

    )

}

export default FilesLine;