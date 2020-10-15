import React from 'react';

import Picture from './Picture'
import Name from './Name'
import {PersonIcon, RepoIcon, TerminalIcon, HomeIcon, MailIcon} from '@primer/octicons-react'

const MobileHeader = () => {
    return ( 
        <section className="row d-sm-none">
            <div className="mobileHeader d-flex col-12">
                <button className="flex-fill text-white"><HomeIcon size={32} /></button>
                <button className="flex-fill text-white"><PersonIcon size={32} /></button>
                <button className="flex-fill text-white"><RepoIcon size={32} /></button>
                <button className="flex-fill text-white"><TerminalIcon size={32} /></button>
                <button className="flex-fill text-white "><MailIcon size={32} /></button>
            </div>
            <div className="picname d-flex col-12 align-items-center">
                <Picture/>
                <Name/>
            </div>
        </section>
    )
}
 
export default MobileHeader;