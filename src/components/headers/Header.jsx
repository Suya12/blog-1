import { useEffect, useRef, useState } from 'react';
import './Header.css';
import Sidebar from './Sidebar';
import Dropdown from './Dropdown';


function Header() {
    
    const [ SidebarIsOpen, setSidebarIsOpen ] = useState(false);
    const [ devdropOpen, setDevDropOpen ] = useState(false);
    const [ pageDrop, setPagedrop] = useState(false);
    const outside = useRef();

    useEffect(() => {
        const handlerOutside = (e) => {
            if(!outside.current.contains(e.target)) {
                setDevDropOpen(false);
            }
        }
        
        document.addEventListener('mousedown',handlerOutside);
        console.log("Dev 이벤트 생성!");
        return () => {
            document.removeEventListener('mousedown', handlerOutside);
            console.log("Dev 이벤트 해제!!");
        };
    },[]);

    

    const toggleSide = () => {    
        setSidebarIsOpen(true);  
    };

    return(
        <header>
            
            <Sidebar SidebarIsOpen={SidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen}/>

            <ul className='navbar'>
                <li>
                    <img 
                        src='/rocket2-icon.svg' 
                        alt='사이드바 열기'
                        onClick={toggleSide}
                        onKeyDown={toggleSide}
                    />
                </li>
                <li onMouseOver={() => setDevDropOpen(!devdropOpen)}>
                    Develop</li>
                <li>DevOps</li>
                <li>DevKit</li>
            </ul>

            <a href='/' className='main-title'>Hanul Dev</a>

            <p className='page' onClick={() => setPagedrop(!pageDrop)}>Page</p>

            {/*--------------- Drop down sector --------------- */}

            <div ref={outside} className={`dropdown-dev ${devdropOpen ? "open" : "" }`}>
                <Dropdown value={"dev"}/>
            </div>
            <div className={`dropdown-page ${pageDrop ? "open" : ''}`}>
                <Dropdown value={"page"}/>
            </div>
        
        </header>
    );
}

export default Header;