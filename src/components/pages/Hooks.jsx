function Hooks (){

    let useState = '{ useState }';
    let useEffect = '{ useEffect }';
    let useCallback = '{ useCallback }';
    let useMemo = '{ useMemo }';
    let useRef = '{ useRef }';
    let useContext = '{ useContext }';
    let useReducer = '{ useReducer }';
    let useImperativeHandle = '{ useImperativeHandle }';
    let useLayoutEffect = '{ useLayoutEffect }';
    let useDebugValue = '{ useDebugValue }';

    let basicUseEffect = 'useEffect(() => { console.log(state) }, [state]);';
    let basicUseCallback = 'useCallback(() => { console.log(state) }, [state]);';
    let basicUseMemo = 'useMemo(() => { console.log(state) }, [state]);';
    let inputRef = '<input ref={input1} type="number"/>';
    let basicUseLayoutEffect = 'useLayoutEffect(() => { console.log(state) }, [state]);';

    return(
        <div className="containerHooks">
            <h1>React Hooks</h1>

            <article className='state'>
                <h2>useState</h2>
                <h4>Serve para controlar os estados da sua aplicação.</h4>
                <p>Para importar: <span>import {useState} from 'react';</span></p>
                <p>Recebe um parâmetro (o valor inicial do estado) e retorna um array com dois argumentos, sendo o primeiro
                    a variável que armazena o valor e o segundo a função que atualiza o estado</p>
                <span>const [state, setEstate] = useState(null);</span>
                <p>Para, por exemplo, atualizar o valor de state para 1, o comando é:</p>
                <span>setState(1);</span>
            </article>

            <article className='effect'>
                <h2>useEffect</h2>
                <h4>Executa uma função de acordo com as dependências.</h4>
                <p>Para importar: <span>import {useEffect} from  'react';</span></p>
                <p>Recebe dois parâmetros: uma função e um array de dependências. Quando o estado de uma das dependências mudar,
                    a função é imediatamente executada. </p>
                <p>Syntax básica:</p>
                <span>{basicUseEffect}</span>
                <p>Se o array de dependências estiver vazio, 
                    a função será executada toda vez que o componente for montado.</p>
            </article>

            <article className='callback'>
                <h2>useCallback</h2>
                <h4>Útil para otimizações no seu projeto.</h4>
                <p>Para importar: <span>import {useCallback} from 'react';</span></p>
                <p>É parecido com o useEffect. A diferença é que o useCallback não é resetado quando o componente é desmontado e montado novamente.
                    Assim, funções e renderizações pesadas não são executadas o tempo todo. Mas, como o useEffect, executa a função de novo se uma das 
                    dependências mudar.
                </p>
                <p>Syntax básica:</p>
                <span>{basicUseCallback}</span>
            </article>

            <article className='memo'>
                <h2>useMemo</h2>
                <h4>Também é útil para otimizações no seu projeto.</h4>
                <p>Para importar: <span>import {useMemo} from 'react';</span></p>
                <p>Sua diferença com o useCallback se consiste em: O useCallback "salva" funções, já o useMemo "salva"
                    valores. Possui as mesmas regras para dependências.
                </p>
                <p>Syntax básica:</p>
                <span>{basicUseMemo}</span>
            </article>
            
            <article className='ref'>
                <h2>useRef</h2>
                <h4>É utilizado para acessar o DOM.</h4>
                <p>Para importar: <span>import {useRef} from 'react';</span></p>
                <p>Tem função parecida com a do <span>document.querySelector()</span> do JavaScript padrão, criando uma
                referência para qualquer componente do DOM com o intuito de manipulá-lo.</p>
                <p>Você deve começar com: <span>const input1 = useRef(null)</span></p>
                <p>Depois, você deve adicionar uma <span>ref</span> no seu componente:</p>
                <span>{inputRef}</span>
            </article>

            <article className='context'>
                <h2>useContext</h2>
                <h4>É uma espécie de estado global da sua aplicação.</h4>
                <p>Para importar: <span>import {useContext} from 'react';</span></p>
                <p>Permite que mais de um componente tenha acesso a funcionalidades e estados de seu projeto. E para 
                    isso, criamos um componente que atua com provider com <span>React.createContext</span>.</p>
                <p>O componente provedor deve ter como filhos todos os componentes com acesso ao estado. Depois,
                    para acessar o contexto, o comando é:</p>
                <span>const myContext = useContext(globalContext);</span>
            </article>

            <article className='reducer'>
                <h2>useReducer</h2>
                <h4>É uma alternativa para o useState.</h4>
                <p>Para importar: <span>import {useReducer} from 'react';</span></p>
                <p>É recomendado quando os estados de sua aplicação são muito complexos. Recebe até 3 parâmetros: O primeiro
                     é a função que atualiza o estado, o segundo é o estado inicial e o terceiro é uma função que executa 
                    assim que o estado é criado. Assim como o useState, retorna um array com os mesmos dois argumentos: O estado
                    e a função que atualiza o estado.</p>
                <span>const [state, setEstate] = useReducer(reducer, null);</span>
            </article>

            <article className='imperative'>
                <h2>useImperativeHandle</h2>
                <h4>É utilizado para passar uma <span>ref</span> para um componente pai.</h4>
                <p>Para importar: <span>import {useImperativeHandle} from 'react';</span></p>
                <p>Recebe 3 parâmetros: O primeiro é a referência a ser passada, o segundo é uma função
                    e o terceiro é um array de dependências. E deve ser combinado com o <span>forwardRef</span>:</p>
                <span>export default forwardRef(Imperative);</span>
            </article>

            <article className='layout'>
                <h2>useLayoutEffect</h2>
                <h4>Dispara um evento quando a DOM é atualizada.</h4>
                <p>Para importar: <span>import {useLayoutEffect} from 'react';</span></p>
                <p>É idêntico ao useEffect, com a diferença de que a função é executada quando ocorre alguma atualização
                    na DOM. Fique atento! Se houver a necessidade de utilizar este hook, provavelmente seu código está com problemas.
                </p>
                <p>Syntax básica:</p>
                <span>{basicUseLayoutEffect}</span>
            </article>

            <article className='debug'>
                <h2>useDebugValue</h2>
                <h4>É utilizado para debug do seu código.</h4>
                <p>Para importar: <span>import {useDebugValue} from 'react';</span></p>
                <p>É como o <span>console.log</span> do JavaScript padrão, já que mostra algum valor no console e,
                como o próprio nome indica, serve para ajudar na resolução de problemas.</p>
                <p>Syntax básica:</p>
                <span>useDebugValue(state)</span>
            </article>
        </div>
    )
};

export default Hooks;