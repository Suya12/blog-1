import './Dropdown.css';
import { Link } from 'react-router-dom';

const links = [
    { address: '/category/html', category: "HTML" },
    { address: '/category/css', category: "CSS" },
    { address: '/category/js', category: "JS" },
    { address: '/category/react', category: "REACT" },
];

function Dropdown(props) {

    const DevelopMenu = () => (
        <ul className='dropdown-develop-menu'>
            <Link to='/category/html'>
                <li>
                    <img src='/html-icon.png' alt='html'/>
                    HTML</li>
            </Link>
            <Link to='/category/html'>
                <li>CSS</li>
            </Link>
            <Link to='/category/html'>
                <li>JS</li>
            </Link>
            <Link to='/category/html'>
                <li>REACT</li>
            </Link>
        </ul>
    );

    const DevelopMenu2 = ({links}) => (
        <ul className='dropdown-develop-menu'>
            {links.map((link) => (
                <Link to={link.address}>
                    <li>{link.category}</li>
                </Link>
            ))}
        </ul>
    );

    const PageMenu = () => (
        <ul className='dropdown-develop-menu'>
            <li>홈</li>
            <li>방명록</li>
            <li>전체 글</li>
        </ul>
    );


    return (
        props.value==="dev" ?  <DevelopMenu2 links={links}/> : <PageMenu /> 
    );
}

export default Dropdown;