import React from 'react'
import './Main.css';
import Header from './Header';
import WelcomeToUser from './WelcomeToUser';
import SliceBooks from './SliceBooks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Main() {
    React.useEffect(() => {
    }, [])
    return (
        <div className='main'>
           <Header/>
           <Router>
             <Switch>
              <Route path="/">
                <WelcomeToUser/>
                <SliceBooks/>
              </Route>
             </Switch>
           </Router>

        </div>
    )
}

export default Main
