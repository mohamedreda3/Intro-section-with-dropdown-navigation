import React, { useState } from "react";
import logo from '../../assests/images/logo.svg';
import menu from '../../assests/images/icon-menu.svg';
import close from '../../assests/images/icon-close-menu.svg';
import Image from "../../components/image";
import Dropmenu from "../../components/dropmenu";
import HeaderLink from "../../components/link";
import '../../assests/styles/style.css';
import todo from '../../assests/images/icon-todo.svg';
import calender from '../../assests/images/icon-calendar.svg';
import reminders from '../../assests/images/icon-reminders.svg';
import planning from '../../assests/images/icon-planning.svg';
import Dropmenuicon from "../../components/dropmenuicon";
import { Link } from 'react-router-dom';
export default function () {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <header>
            <Image source={logo} />
            <nav className={openSidebar ? "active" : ""}>
                <div className="nav__contents">
                    <div className="close" onClick={() => setOpenSidebar(!openSidebar)}>
                        <Image source={close} />
                    </div>
                    <div className="drop__menu">
                      <div className="drop">
                            <Link to='./todolist'><Dropmenuicon source={todo} /> <HeaderLink name="Todo List" /> </Link>
                            <Link to='./calender'><Dropmenuicon source={calender} /> <HeaderLink name="Calender" /> </Link>
                            <Link to='./reminders'><Dropmenuicon source={reminders} />  <HeaderLink name="Reminders" /> </Link>
                            <Link to='./planning'><Dropmenuicon source={planning} />  <HeaderLink name="Planning" /> </Link>
                        </div> 
                         <Link to='./Features'>
                            <Dropmenu name="Features" />
                        </Link>
                        
                    </div>
                    <div className="drop__menu">
                        <div className="drop">
                            <Link to='./history'> <HeaderLink name="History" /> </Link>
                            <Link to='./ourteam'> <HeaderLink name="Our Team" /> </Link>
                            <Link to='./blog'> <HeaderLink name="Blog" /> </Link>
                        </div>
                        <Link to='./Company'> <Dropmenu name="Company" /> </Link>

                    </div>
                    <Link to='./Careers'> <HeaderLink name="Careers" /> </Link>
                    <Link to='./About'> <HeaderLink name="About" /> </Link>
                </div>
                <div className="rigister">
                    <Link to='./login' > <HeaderLink name="Login" /> </Link>
                    <Link to='./rigister' className="btn rig"> <HeaderLink name="Rigister" /> </Link>
                </div>
            </nav>
            <div className="menu" onClick={() => setOpenSidebar(!openSidebar)}>
                <Image source={menu} />
            </div>
        </header>
    )
}