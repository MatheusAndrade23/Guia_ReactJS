function Hooks (){

    let useState = '{ useState }';
    let useEffect = '{ useEffect }';

    let basicUseEffect = 'useEffect(() => { console.log(state) }, [state])';

    return(
        <div className="containerHooks">
            <h1>React Hooks</h1>

            <article className='state'>
                <h2>useState</h2>
                <h4>Serve para controlar os estados da sua aplicação:</h4>
                <p>Para importar: <span>import {useState} from 'react';</span></p>
                <p>Recebe um parâmetro (o valor inicial do estado) e retorna um array com dois argumentos, sendo o primeiro
                    a variável que armazena o valor e o segundo a função que atualiza o estado</p>
                <span>const [state, setEstate] = useState(null);</span>
                <p>Para, por exemplo, atualizar o valor de state para 1, o comando é:</p>
                <span>setState(1);</span>
            </article>

            <article className='effect'>
                <h2>useEffect</h2>
                <h4>Executa uma função de acordo com as dependências:</h4>
                <p>Para importar: <span>import {useEffect} from  'react';</span></p>
                <p>Recebe dois parâmetros: uma função e um array de dependências. Quando o estado de uma das dependências mudar,
                    a função é imediatamente executada. 
                </p>
                <p>Syntax básica:</p>
                <span>{basicUseEffect}</span>
                <p>Se o array de dependências estiver vazio, 
                    a função será executada toda vez que o componente for montado.</p>
            </article>

            <article className='state'>
                
            </article>
        </div>
    )
}

export default Hooks;