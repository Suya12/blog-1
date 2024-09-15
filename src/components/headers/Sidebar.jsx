import { useEffect, useRef } from "react";
import './Sidebar.css';

function Sidebar({SidebarIsOpen, setSidebarIsOpen}) {

    const outside = useRef();

    useEffect(() => {
        const handlerOutside = (e) => {
            if (!outside.current.contains(e.target)) {
                toggleSide(); 
            }
        };

        document.addEventListener('mousedown', handlerOutside);
        console.log("Sidebar 이벤트 생성!");
        // 클린업 함수 반환
        return () => {
            document.removeEventListener('mousedown', handlerOutside);
            console.log("Sidebar 이벤트 해제!!");
        };
    },[]); // 빈 배열을 의존성 배열로 지정하여 컴포넌트 마운트 및 언마운트 시에만 실행됨

    const toggleSide = () => {
        setSidebarIsOpen(false);
    }

    return (
        <div ref={outside} className={SidebarIsOpen ? 'sidebar-wrap open' : 'sidebar-wrap'}>
            <p>hi</p>
            <ul>
                <li>메뉴1</li>
                <li>메뉴2</li>
                <li>메뉴3</li>
            </ul>
        </div>
    );
}

export default Sidebar;