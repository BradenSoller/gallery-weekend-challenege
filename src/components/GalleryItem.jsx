import { useState } from 'react';


function GalleryItem({item, updateLike}) {
    const [description, setDescription] = useState(false)
    

    const toggleDescription = () => {
        setDescription(!description)

    }

    const displayText = () => {
        if (description) {

            return (
                <>
                    <p>{item.description}</p>
                </>
            )
        } else {
            return (
                <>
                    
                        <img width={250} height={250} src={item.url} />
                        
                </>
            )
        }
    
    };
    
    return (
        <>
            <div className='format' data-testid="galleryItem">
                <h2>{item.title}</h2>
        <ul data-testid ="toggle" onClick={toggleDescription}>
            {displayText()}
                </ul>
               <span> <button data-testid="like" id={item.id} onClick={updateLike}>like</button> 
                 <p> {item.likes > 0 ? `${item.likes} people love this !` : `${item.likes}  people like this );`}  </p></span>
            </div>
            </>
    )

}

export default GalleryItem;