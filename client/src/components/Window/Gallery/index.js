import './index.css';

const Gallery = (props) => {

    return (
        <div className="flex center gallery_spacer">
            <img src={props.file.url} alt="Description" />
        </div>
    )

}

export default Gallery;