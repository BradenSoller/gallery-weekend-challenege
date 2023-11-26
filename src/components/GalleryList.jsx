import GalleryItem from "./GalleryItem";
import axios from "axios";


function GalleryList({ listItems, getItems }) {

    const updateLike = (e) => {
       
        const pictureID = e.target.id
        axios({
            method: 'PUT',
            url: `/gallery/like/${pictureID}`
        }).then((response) => {
            console.log("itemID");
            getItems()
        }).catch((error) => {
            console.log("error in put", error)
        })
  
    }


    return (
        
        
        <div data-testid="galleryList" className="map">
            {listItems.map((item) => {
                return (
                    <div key={item.id}>
                        <GalleryItem item={item} updateLike={updateLike} />
                       
                    </div>
                )
            
              
            })}
        </div>
    )
}

export default GalleryList;