import React from 'react'
import image from '../images/santos-profile.jpg'

const Picture = () => {
    return ( 
    <div className="picture mt-sm-3">
        <img src={image}
            className="img-fluid rounded-circle p-2"
            alt="Profile pic of Santos Soffli"
        />
    </div>
     );
}
 
export default Picture;