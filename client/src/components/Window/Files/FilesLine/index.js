const FilesLine = (props) => {

    return (
    
        <div class="flex files_file">

            <div class="flex files_file_name">{props.fileName}</div>
            <div class="flex files_file_size">{props.fileSize}</div>
            <div class="flex files_file_ext">{props.ext}</div>
            <div class="flex files_file_date">{props.date}</div>
            
        </div>

    )

}

export default FilesLine;