import React from 'react';
import './WelcomeToUser.css';

function WelcomeToUser(props) {
    return (
        <div class="welcomeToUser">
            <div className="container">
                <div className="welcome">
                    <h3>Welcome</h3>
                    <br/>
                    <p>
                        Hello <b>Denis Rodríguez</b>.
                        Thanks for visiting 
                        us. Welcome to BookWise where you will find 
                        the best books. If you are that person who loves 
                        reading and filled with knowledge, then BookWise is 
                        for you. We have many books in several categories. BookWise 
                        expects you to have a lot of fun. 
                    </p>
                </div>
                <div className="favoriteBookOfUsers">
                    <h3>Outstanding</h3>
                    <div className="favoriteImgOfUsers">
                       <img src="/images/imgTest.jpg" alt=""/>
                       <figcaption>
                            <small><b>Title:</b> Los gatos guerreros.<br/>
                               <b>Author:</b> Erin Hunter.
                            </small> 
                        </figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeToUser
