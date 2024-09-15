import GradationBack from "./GradationBack";
import './Content.css';
import { Link } from "react-router-dom";
function Content() {

    const SideButton = () => (
        <div className="side-button">
            hi!
        </div>
    );

    return (
        <div className="content">
            <SideButton />
            <GradationBack value={"Hello World!"}/>

            <div className="empty-space">

            </div>

            <div className="board-title">
                <h1>최신 글 <img src='/board-icon.png' alt="icon"/></h1>
                <p>따끈따끈하게 올라온 새 포스팅을 구경해보세요!</p>
            </div>

            <ul>
                <li>
                    <div>
                        <h1>title1</h1>
                        <p>한울</p>
                        <p>날짜-2024.9.13</p>
                        <Link to='/category/1'><li>1번 포스팅</li></Link>
                    </div>
                </li>
                <li>
                    <div>
                        <h1>title2</h1>
                        <p>한울</p>
                        <p>날짜-2024.9.14</p>
                        <Link to='/category/2' ><li>2번 포스팅</li></Link>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}

export default Content;