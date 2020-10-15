import React from 'react'

import {GlobeIcon, HomeFillIcon, FlameIcon} from '@primer/octicons-react'


const yearNow = new Date().getFullYear();

const Footer = () => {
    return ( 
    <footer className="footer row pt-1 align-items-center">
        <div className="copy col-sm-9 col-12">
            <p className="text-light text-center pt-2">Copyright&copy; {yearNow} | Santos Soffli from 🇦🇷 to the <GlobeIcon size={19} /> </p>
        </div>
        <div className="col-sm-3 social">
            <button className="text-white"><HomeFillIcon size={32} /></button>
            <button className="text-white"><FlameIcon size={32} /></button>
            <button className="text-white"><GlobeIcon size={32} /></button>
        </div>
    </footer> );
}
 
export default Footer;