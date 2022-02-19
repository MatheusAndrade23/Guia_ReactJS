import logo from "../../images/logo192.png"

function Header(){
    return(
        <header className='header'>
            <a href='/'>
                <img src={logo} alt="logo_react"/>
                <p>Guia ReactJS</p>
            </a>
            <ul>
                <li><a href='/intro'>Introdução</a></li>
                <li><a href='/hooks'>React Hooks</a></li>
                <li><a href='js'>JavaScript</a></li>
            </ul>
        </header>
    )
}

export default Header;