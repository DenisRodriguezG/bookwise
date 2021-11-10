import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BookIcon from '@material-ui/icons/Book';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Down from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const subOptions = React.useRef();
    const menu = React.useRef();
    const closeMenuIcon = React.useRef();
    const showMenuIcon = React.useRef();
    React.useEffect(() => {
        window.addEventListener('resize', (e) => {
            if(e.currentTarget.innerWidth >= 768)
            {
                closeMenuIcon.current.style.display = 'none';
                showMenuIcon.current.style.display = 'none';
                menu.current.style.backgroundColor = 'white';
            }
            else
            {
                console.log(menu.current.className)
                menu.current.style.backgroundColor = 'rgb(41, 184, 219)';
                if(menu.current.className === 'header showHeader')
                {
                    closeMenuIcon.current.style.display = 'block';
                }
                else
                {
                    showMenuIcon.current.style.display = 'block';
                }
            }
        })
    }, []);
    const downSubOptions = (value) => {
        console.log(value);
        if(value === "over")
        {
            subOptions.current.style.display = "block";
        }

        if(value === "leave")
        {
            subOptions.current.style.display = "none";   
        }
        if(value === "click")
        {
            subOptions.current.classList.toggle("showSubOptions")
            if(subOptions.current.className === "options__books showSubOptions")
            {
                subOptions.current.style.display = 'block';
            }
            else
            {
                subOptions.current.style.display = 'none';
            }
        }
    }
    const toggleHeader = (value) => {
        console.log(menu)
        if(value === "showMenu")
        {
            menu.current.classList.add('showHeader');
            showMenuIcon.current.style.display = "none"
            closeMenuIcon.current.style.display = 'block';
            menu.current.style.backgroundColor = 'rgb(41, 184, 219)';
        }
        if(value === 'closeMenu')
        {
            menu.current.style.backgroundColor = 'transparent';
            menu.current.classList.remove('showHeader');
            closeMenuIcon.current.style.display = 'none';
            menu.current.style.backgroundColor = 'none';
            showMenuIcon.current.style.display = 'block';
        }
    }
    return (
        <div className="header" ref={menu}> 
            <div className="header__menuIcon" ref={showMenuIcon} onClick={() => toggleHeader('showMenu')}>
                <MenuIcon/>
            </div>
            <div class="header__closeMenuIcon" ref={closeMenuIcon} onClick={() => toggleHeader('closeMenu')}>
                <CloseIcon />
            </div>
            <ul className="header__options">
                <li><a href="#"><HomeIcon clasName="icon"/></a></li>
                <li><a href="#"><PersonIcon clasName="icon"/></a></li>
                <li className="item" onClick={() => downSubOptions("click")} onMouseOver={() => downSubOptions("over")} onMouseLeave={() => downSubOptions("leave")}><a href="#"><BookIcon clasName="icon"/><span ><Down/></span></a>
                    <ul className="options__books" ref={subOptions}>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Poems</a></li>
                        <li><a href="#">Romance</a></li>
                    </ul>
                </li>
                <li><a href="#"><ContactPhoneIcon clasName="icon"/></a></li>
                <li><a href="#"><ExitToAppIcon clasName="icon"/></a></li>
            </ul>
        </div>
    )
}

export default Header
