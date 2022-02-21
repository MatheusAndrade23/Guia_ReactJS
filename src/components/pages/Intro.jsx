import exemple from '../../images/exemple.jpg'
import extension from '../../images/extension.png'

function Intro() {
    return(

        <div className="containerIntro">
            <h1>Introdução</h1>
            <article className="exp">
                <h2>O que é?</h2>
                <p>
                    O React é uma biblioteca JavaScript declarativa para criar interfaces de usuário
                    e baseada em componentes.
                </p>
                <p>
                    Com ele, é possível componentizar toda a sua página e trabalhar em cada uma das
                    partes de forma individual, facilitando o trabalho.
                </p>
            </article>

            <article className="why">
                <h2>Por que utilizar?</h2>
                <p>
                    O React simplifica o desenvolvimento de um site, simplificando o que chamamos de <span>Estado</span>,
                    e também facilita a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página.
                </p>
                <p>
                    Além disso, existem os <span>Hooks</span>, que são funcionalidades que o React traz muito úteis,
                    tanto para coisas simples, quanto para coisas mais complexas.
                </p>
            </article>

            <article className="jsx">
                <h2>O que é JSX?</h2>
                <p>
                    O JSX é uma forma de criar elementos para serem utilizadas como templates de aplicações React. 
                    Basicamente, os elementos criados com o JSX são bem similares ao código HTML e fornecem aos desenvolvedores uma forma mais simples e intuitiva de 
                    criar os componentes de uma aplicação. 
                </p>
                <p>
                    Porém, apesar de muito similar ao HTML, o JSX não é interpretado pelo navegador. Por este motivo, 
                    deve-se utilizar um “transpilador” para essa conversão. Atualmente, o mais conhecido deles é o Babel.
                </p>
            </article>

            <article className="how">
                <h2>Como começar?</h2>
                <ul>
                    <li><p>1- Primeiramente, você deve instalar o <span><a href="https://nodejs.org/en/">NodeJS</a></span>.</p></li>
                    <li><p>2- Abra o seu terminal preferido e digite: <span className='code'>npm install react</span></p></li>
                    <li><p>3- E por fim, crie seu projeto utilizando o comando: </p></li>
                    <li><span className='code'>npx create-react-app nome-do-projeto</span></li>
                    <li><p>E para inciar o projeto em localhoost, digite:</p></li>
                    <li><span className='code'>npm start</span></li>
                    <li><p>Você também pode utilizar o <span><a href="https://www.npmjs.com/">npm</a></span> para instalar todas as dependências que quiser.</p></li>
                </ul>
            </article>

            <article className="components">
                <h2>Estrutura básica de um Componente</h2>
                <p>
                    Existem várias maneiras de criar um componente, 
                    mas aqui será mostrada apenas uma delas, a que é baseada em funções. 
                </p>
                <p>
                    Basicamente, devemos escrever uma função JavaScript normal, que deve retornar o JSX.
                </p>
                <p>
                    Devemos importar os recurso utilizados com o <span>@import</span> e exportar o componente criado,
                    com <span>export default nome-do-componente;</span>
                </p>
                <p>
                    Veja abaixo o código da Home deste site:
                </p>
                <img src={exemple} alt="Código Exemplo"/>

            </article>

            <article className='extra'>
                <h2>Extra</h2>
                <p>
                    A instalação da <span><a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'>extensão</a></span> do React para desenvolvedores é recomendada.
                </p>
                <p>
                    Ela te permite saber se um site é feito com React e caso for, ver os seus componentes.
                </p>
                <img src={extension} alt="Extensão React"/>
                <p>
                    E caso queira entender o React melhor, segue alguns links que podem ser úteis.
                </p>
                <ul>
                    <li><a href='https://pt-br.reactjs.org/'>Documentação Oficial</a></li>
                    <li><a href='https://blog.geekhunter.com.br/um-guia-para-usar-react-js/'>Guia ReactJs GeekHunter</a></li>
                    <li><a href='https://www.devmedia.com.br/react/'>DevMedia React</a></li>
                    <li><a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/'>Curso recomendado</a></li>
                    <li><a href="https://github.com/rafaballerini/ReactHooks">React Hooks - Ballerini</a></li>
                </ul>
            </article>
        </div>
    )
};

export default Intro;