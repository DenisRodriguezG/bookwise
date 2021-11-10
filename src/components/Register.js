import React from 'react';
import './Register.css';
import { Link, Redirect } from 'react-router-dom';
import { instanceUsers } from './axios';
import { store } from '../reducer/store';

function Register() {
    const [dataUser, setDataUser] = React.useState([]);
    const [registered, setRegistered] = React.useState(false);
    const [ arrayNumbers, setNumbers] = React.useState([]);
    const [visivilityP1, setVisibilityP1] = React.useState(false);
    const [visivilityP2, setVisibilityP2] = React.useState(false);
    const [arrayCity,setCity] = React.useState([]);
    const firstPassword = React.useRef();
    const changePassword = React.useRef();
    const displayErrorR = React.useRef();
    const dataForm = React.useRef();

    const togglePassword = (v) => {
        

        if(v === "enterPassword-true")
        {
            setVisibilityP1(true);
            firstPassword.current.attributes[0].nodeValue = "text";
            //changePassword.current.attributes[0].nodeValue = "text";
            console.log("Show")
        }
        else if(v === "enterPassword-false")
        {
            setVisibilityP1(false);
            firstPassword.current.attributes[0].nodeValue = "password";
            //changePassword.current.attributes[0].nodeValue = "password";
            console.log("hidden");
        }
        if(v === "verifyPassword-true")
        {
            setVisibilityP2(true);
            changePassword.current.attributes[0].nodeValue = "text";
            //changePassword.current.attributes[0].nodeValue = "text";
            console.log("Show")
        }
        else if(v === "verifyPassword-false")
        {
            setVisibilityP2(false);
            changePassword.current.attributes[0].nodeValue = "password";
            //changePassword.current.attributes[0].nodeValue = "password";
            console.log("hidden");
        }
    }
    React.useEffect(() => {
        
        const numbers = [];
        const city = [ 'AGUASCALIENTES', 'BAJA CALIFORNIA NORTE','BAJA CALIFORNIA SUR', 'COAHUILA', 'CHIHUAHUA','COLIMA','CAMPECHE','CHIAPAS','DISTRITO FEDERAL','DURANGO','GUERRERO','GUANAJUATO','HIDALGO','JALISCO','MICHOACAN','MORELOS','MEXICO','NAYARIT','NUEVO LEON','OAXACA','PUEBLA','QUERETARO','QUINTANA ROO','SINALOA','SAN LUIS POTOSI','SONORA','TAMAULIPAS','TABASCO','TLAXCALA','VERACRUZ','YUCATAN','ZACATECAS'];
        setCity(city);
        for(let i = 1; i <= 100; i++)
        {
            numbers.push(i);
        }
        setNumbers(numbers);
        //hiddenError();
    }, []);
    
    const uploadData = (e) => {
        e.preventDefault();
        const data = new FormData(dataForm.current);
        let jsonUser = {fName: "", lName: "", age: "", city: "", email: "", password: "", passwordV: "", why: ""};
        let i = 0;
        data.forEach(v => {
            if(i === 0)
            {
                jsonUser.fName = v;
            }
            if(i === 1)
            {
                jsonUser.lName = v;
            }
            if(i === 2)
            {
                jsonUser.age = v;
            }
            if(i === 3)
            {
                jsonUser.city = v;
            }
            if(i === 4)
            {
                jsonUser.email = v;
            }
            if(i === 5)
            {
                jsonUser.password = v;
            }
            if(i === 6)
            {
                jsonUser.passwordV = v;
            }
            if(i === 7)
            {
                jsonUser.why = v;
            }
            i++;
        });
        if(jsonUser.fName === "" || jsonUser.lName === "" || jsonUser.age === "" || jsonUser.city === "" || jsonUser.email === "" || jsonUser.password === "" || jsonUser.passwordV === "" || jsonUser.why === "")
        {
            displayErrorR.current.style.visibility = 'visible';
            displayErrorR.current.innerHTML = '<p>Please, you must fill all fields</p>'
        }
        else
        {
            if(jsonUser.password === jsonUser.passwordV)
            {
                console.log("you can continue")
                setDataUser([jsonUser]);
                setRegistered(true)
                store.dispatch(
                    {
                        type: "true",
                        infoUser: jsonUser
                    }
                    
                )
            }
            else
            {
                console.log("Please, password incorrect")
                displayErrorR.current.style.visibility = 'visible';
                displayErrorR.current.innerHTML = '<p>Password incorrect</p>';
                changePassword.current.style.border = "1px solid red";
            }

        }
        //setDataUser([jsonUser]);
    }
    const writingPassword = ( state,e) => {
        console.log(e)
        if(state === "firstPassword" || e !== "")
        {
            changePassword.current.disabled = false;
            console.log(changePassword)
        }
        else if(firstPassword.current.value === "")
        {
            changePassword.current.disabled = true;
        }
    }
    const verifyWritingForm = (e) => {
        console.log('This is form ---->' + e.target.value)
        if(firstPassword.current.value === "")
        {
            changePassword.current.disabled = true;
        }
        if(e)
        {
            displayErrorR.current.style.visibility = 'hidden';
        }
    }
    React.useEffect(() => {
        /*instanceUsers.post('/v2/users',
        {
            firstName: "Jeremias",
            lastName: "Rodríguez García",
            age: "22",
            city: "Tabasco",
            email: "uriaselyuyo@gmail.com",
            password: "123456789",
            whyReason: "I'm loving it",
            timeCreate: "27 october 2021"
        });*/
        /*if(registered)
        {
            instanceUsers.post('/v2/users', dataUser);
        }*/
}, [])
    console.log(dataUser)
    return (
        <>
            {registered ? (<Redirect to='/'/>) :(
                            <div className="register-c">
                            <div className="register">
                                    <Link className="previous" to="/"><img src="/images/previous.png" alt=""/></Link>
                                    <div className="error" ref={displayErrorR}>
                                    </div>
                                    <form className="form__register" ref={dataForm} onSubmit={(e) => uploadData(e)} onKeyUp={e => verifyWritingForm(e)}>
                                        <div className="first__name f">
                                            <label>First Name</label>
                                            <input type="text" name="first__name"/>
                                        </div>
                                        <div className="last__name f">
                                            <label>Last Name</label>
                                            <input type="text" name="last__name"/>
                                        </div>
                                        <div className="give__age__city">
                                            <div className="age s">
                                                <label>Age</label>
                                                <select name="age">
                                                   {arrayNumbers.map(number => {
                                                       return <option value={number}>{number}</option>;
                                                   })}
                                                </select>
                                            </div>
                                            <div className="city s">
                                                <label>City</label>
                                                <select name="city">
                                                    {arrayCity.map(city => {
                                                        return <option value={city}>{city}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="email f">
                                            <label>Email</label>
                                            <input type="email" name="text"/>
                                        </div>
                                        <div className="password f">
                                            {
                                                visivilityP1 ? 
                                                (
                                                    <> 
                                                    <label>Password</label>
                                                    <input type="password" name="password" ref={firstPassword} onKeyUp={(e) => writingPassword("firstPassword", e.target.value)}/>
                                                    <img src="/images/ayeShow.png" alt="" className="toggle__password" onClick={() => togglePassword("enterPassword-false")}/>
                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                    <label>Password</label>
                                                    <input type="password" name="password" ref={firstPassword} onKeyUp={(e) => writingPassword("firstPassword", e.target.value)}/>
                                                    <img src="/images/ayeHidden.png" alt="" className="toggle__password" onClick={() => togglePassword("enterPassword-true")}/>
                                                    </>
                                                )
                                            }
                        
                                        </div>
                                        <div className="verify__password f">
                                        {
                                                visivilityP2 ? 
                                                (
                                                    <> 
                                                    <label>Verify password</label>
                                                    <input type="password" name="verify__password" disabled ref={changePassword}/>
                                                    <img src="/images/ayeShow.png" alt="" className="toggle__password" onClick={() => togglePassword("verifyPassword-false")}/>
                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                    <label>Verify password</label>
                                                    <input type="password" name="verify__password" disabled ref={changePassword}/>
                                                    <img src="/images/ayeHidden.png" alt="" className="toggle__password" onClick={() => togglePassword("verifyPassword-true")}/>
                                                    </>
                                                )
                                            }
                                        </div>
                                        <div className="why f">
                                            <label>Why you like to read?</label>
                                            <textarea name="textarea"></textarea>
                                        </div>
                                        <div className="save">
                                            <button className="btn__save">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
            )}
        </>
    )
}

export default Register
