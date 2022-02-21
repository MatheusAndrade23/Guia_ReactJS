function Js() {

    let destructuring = 'const { nome, idade, email } = pessoa;'

    return(
        <div className="containerJS">
        <h1>JS Essencial</h1>

        <article className='promise'>
            <h2>Promise</h2>
            <h4>É utilizado para executar ações assíncronas.</h4>

            <p>É uma das formas de realizar operações assíncronas. Uma promise utiliza o <span>.then()</span> para executar
            comandos depois que os anteriores já terminarem e o <span>.catch()</span>, caso algum erro ocorra. Uma promise
            possui várias propriedades, métodos e formas de ser executada.</p>

        <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise'>Detalhes</a>
        </article>

        <article className='fetch'>
            <h2>Fetch</h2>
            <h4>É utilizado para realizar requisições http.</h4>

            <p>É uma promise (trabalha de forma assíncrona) que recebe alguns parâmetros: O primeiro é o link destino da requisição, o segundo é um objeto 
                que contém as propriedades da requisição, como o método (method), o cabeçalho (headers) e o corpo (body). Os métodos mais comuns
                são: <span>GET, POST, PATCH e DELETE</span>.</p>

            <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch">Detalhes</a>

        </article>

        <article className='async'>
            <h2>Async/Await</h2>
            <h4>Mais um modo de utilizar o JavaScript assíncrono.</h4>

            <p>São recursos qeu visam simplificar a programação assíncrona, que facilita o fluxo de escrita e leitura de seu código.
                Eles trabalham baseados em promises, sendo possível fazer uma ação assíncrona com a estrutura de uma ação síncrona.</p>
            <a href='https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar'>Detalhes</a>

        </article>

        <article className='destructuring'>
            <h2>Desestruturação</h2>
            <h4>Serve para facilitar o acesso às propriedades de um objeto.</h4>

            <p>Facilita o acesso individual à propriedades de objetos, facilitando o fluxo de escrita e leitura de seu código 
                e contribuindo para sua simplicidade. Cada propriedade desestruturada deve ter o exato nome da que o objeto contém, 
                e elas se transformam em variáveis individuais.
            </p>
            <span>{destructuring}</span>

        </article>

        <article className='map'>
            <h2>Map</h2>
            <h4>Método do JavaScript para arrays.</h4>

            <p>É utilizado para percorrer arrays de forma mais simples e intuitiva. Possui 2 parâmetros: Sendo o primeiro 
                correspondente ao item iterado e o segundo o index deste item. Vale lembrar que ele retorna um novo array como resultado.</p>

            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Detalhes</a>
        </article>

        <article className='reduce'>
            <h2>Reduce</h2>
            <h4>Método do JavaScript para arrays.</h4>
            <p>Recebe 4 parâmetros: O acumulador, o valor atual, o index atual e o 
                array original. O <span>reduce</span> retorna um único valor no final, e é relacionado ao acumulador, em que
                seu valor é atualizado a cada iteração pelo array.
            </p>

            <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce'>Detalhes</a>
        </article>

    </div>
    )
}

export default Js;