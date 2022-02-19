import logo from "../../images/logo512.png"

function Home() {
    return (
        <div className='HomeContainer'>
            <h1>ReactJS</h1>
            <img src={logo} alt="logo_react"/>
            <p>Guia básico sobre como utilizar essa biblioteca em seus projetos.</p>
            <a href="https://pt-br.reactjs.org/">Acessar a Documentação Oficial</a>
        </div>
    )
}

export default Home;