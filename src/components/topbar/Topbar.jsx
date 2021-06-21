import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className= 'topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Dallo</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="TopIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="TopIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.15752-9/200934682_2874318842829136_2563679603441496654_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=v7ET10h6nKgAX_TzpuJ&_nc_oc=AQnoQhxKVqh62NbFLfqFVA06QBjAGyekXd1zaaGA-mTzoR1CrC9csTn8CQ12LPRpw_4&_nc_ht=scontent.fktm10-1.fna&oh=2cb7e90807f47a5cf1ce185f3c78b0ec&oe=60D08E96" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
