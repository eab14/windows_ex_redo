import { useWindowsEX } from '../../../../context/WindowContext';

const FilesLine = (props) => {

    const { openWindow } = useWindowsEX();

    const clickHandler = () => (["Music", "Video", "Gallery"].includes(props.wType)) && openWindow(props.wType, props.file);

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