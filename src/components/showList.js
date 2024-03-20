import './showList.css'
import ShowImage from "./showImage";

function ShowList({images}){
    const renderedImages = images.map((image) => {
        return <ShowImage key={image.id} image={image}/>
    });

    return(
        <div className='image-list'>{renderedImages}</div>
    )
}


export default ShowList;