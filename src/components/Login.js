import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { instanceUsers } from './axios';
import { store } from '../reducer/store';
import { useSelector, connect } from 'react-redux';
import Main from './Main';

function Login(props) {
    const [visivility, setVisivility] = React.useState(false);
    const [logged, setLogged] = React.useState(false);
    const togglePassword = React.useRef();
    const emailValue = React.useRef();
    const errorDisplay = React.useRef();
    const dataUserStore = useSelector(state => state);
    const [dataUserMongoDB, setDataUserMongoDB] = React.useState([]);

console.log(dataUserStore)
    React.useEffect(() => {
        const postDataUSerToMongoDB = async (infoUserPost) =>
        {
            console.log(infoUserPost)
            if(infoUserPost.type === 'true')
            {
                console.log('hola')
                await instanceUsers.post('/v2/users',{
                    firstName: infoUserPost.infoUser.fName,
                    lastName: infoUserPost.infoUser.lName,
                    age: infoUserPost.infoUser.age,
                    city: infoUserPost.infoUser.city,
                    email: infoUserPost.infoUser.email,
                    password: infoUserPost.infoUser.password,
                    whyReason: infoUserPost.infoUser.why,
                    timeCreate: "time....."
                });
                store.dispatch({type: 'false'})
            }
           
        }
        postDataUSerToMongoDB(dataUserStore);
        const getDataUserOfMongoDB = async () => {
            const AllDataUsers = await instanceUsers.get('/v1/users');
            setDataUserMongoDB([AllDataUsers.data]);
        }
        getDataUserOfMongoDB();

        
    }, [])
    const changeIcon = (v) => {
        setVisivility(v);
        if(v)
        {
            togglePassword.current.attributes[0].nodeValue = "text";
        }
        else
        {
            togglePassword.current.attributes[0].nodeValue = "password";
        }
    }
    const uploadInfo = (e) => {
        e.preventDefault();
        let email = emailValue.current.value;
        let password = togglePassword.current.value;
        console.log("Sending")

        if(email === "" || password === "")
        {
            console.log("Please fill all fields")
            errorDisplay.current.style.display = "flex";
            console.log(errorDisplay)
        }
        else
        {
            console.log('You can continue..')
            console.log('This is email -> ' + emailValue.current.value)
            console.log('this is password -> ' + togglePassword.current.value)
            dataUserMongoDB[0].forEach(e => {
                console.log(e.email)
                 if(e.email === emailValue.current.value && e.password ===  togglePassword.current.value)
                {
                    setLogged(true);
                }
                else 
                {
                    setLogged(false);
                }
            })
        }

    }
    const hiddenError = (e) => {
        let test = e.target.value;
        if(test !== "")
        {
            errorDisplay.current.style.display = "none";
        }
    }
    console.log(dataUserMongoDB)
    console.log(logged)
    return <>
        {
            logged ? (<Main /> )
            :
            (
            <div className="login-c">
            <div className="login">
            <div className="error" ref={errorDisplay}>
                <p>Please enter something</p>
            </div>
            <div className="logo">
                <img src="/images/logo.jpg" alt=""/>
            </div>
            <form className="form__login" onSubmit={(e) => uploadInfo(e)}>
                <div className="email">
                    <label >Email</label>
                    <input type="email" name="email" onKeyUp={(e) => hiddenError(e)} ref={emailValue}/>
                </div>
                <div className="password">
                    <label>Password</label>

                    {visivility ? (<><input type="password" name="pasword" onKeyUp={(e) => hiddenError(e)}  ref={togglePassword}/><div className="show__password" onClick={() =>  changeIcon(false)}><img src="/images/ayeShow.png" alt=""/></div></>): 
                    (<><input type="password" name="password" onKeyUp={(e) => hiddenError(e)}  ref={togglePassword}/><div className="show__password" onClick={() => changeIcon(true)}><img src="/images/ayeHidden.png" alt=""/></div></>)}
                </div>

                <div className="btn__login">
                    <button type="submit" >Login</button>
                </div>
            </form>
            <div className="info">
                <p>Do you have account? click <Link className="registerTo" to="/register">here</Link></p>
            </div>
          </div>
        </div>
            )
        }

    </>
}
/*const mapStateToProps = (store) => ({
   type: store.type,
   infoUser: store.infoUser
})
export default connect(mapStateToProps)(Login)*/
export default Login;
