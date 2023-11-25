import { useState } from 'react';

function GalleryItem({listItems}) {
    const [description, setDescription] = useState(false)
    

    const toggleDescription = () => {
        setDescription(!description)

    }

    const displayText = () => {
        if (description) {
            return (
                <>
                    lovely
                </>
        )
        } else {
            return (
                <>
                {listItems.url}
                </>
            )
    }
    }
    
    return (
        <li onClick={toggleDescription}>
            {displayText()}
        </li>
    )

}

export default GalleryItem;