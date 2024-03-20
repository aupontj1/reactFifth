import SearchBar from "./components/searchBar";
import ShowList from "./components/showList";
import searchImages from "./api";
import { useState } from "react";

function App(){
    const [images, setImages] = useState([]);

    const handleSubmit =  async term => {
        const result = await searchImages(term);

        setImages(result);
    };

    return(
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ShowList images={images}/>
        </div>
    ) 

}


export default App;