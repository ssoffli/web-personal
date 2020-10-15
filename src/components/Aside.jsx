import React from 'react';
import Picture from './Picture'
import Name from './Name'

const Aside = () => {
    return ( 
        <div className="aside col-3">
            <Picture/>
            <Name/>
            <hr/>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active btn text-white" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn text-white" href="#">About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn text-white" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn text-white" href="#">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn text-white" href="#">Contact</a>
                </li>
            </ul>
        </div>
     );
}
 
export default Aside;