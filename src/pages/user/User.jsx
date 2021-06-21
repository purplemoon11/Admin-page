import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.15752-9/197281184_775111136525160_4191755239038330271_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=GQJU4VluV88AX-7Mavd&_nc_ht=scontent.fktm10-1.fna&oh=433223a1e8b2a93947a6ce8e47401f8f&oe=60D2AE65" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anusha Baniya</span>
                            <span className="userShowUserTitle">Doctor</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">AnushaBaniya</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+977 123 456 789</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">AnushaBaniya@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Biratnagar-11</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input 
                                type="text"
                                placeholder="AnushaBaniya"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input 
                                type="text"
                                placeholder="Anusha Baniya"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input 
                                type="text"
                                placeholder="AnushaBaniya@gmail.com"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input 
                                type="text"
                                placeholder="+977 123 456 789"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input 
                                type="text"
                                placeholder="Biratnagar-11"
                                className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.15752-9/202793942_767496107222361_3809841933229046718_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Bw0oaVJZZ8EAX-2plrQ&_nc_ht=scontent.fktm10-1.fna&oh=c0d5fb298899a35fd8e015eccd5db0ed&oe=60D2F11A" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
