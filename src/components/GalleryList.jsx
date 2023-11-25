import GalleryItem from "./GalleryItem";
function GalleryList({ listItems }) {
    return (

        <p>
            {
                listItems.map((item) => {
                    return (
                        <GalleryItem key={item.id} listItems={listItems} />
                    )
                    
                
            })

            }
</p>


    )
}

export default GalleryList;