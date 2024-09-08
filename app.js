function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se o campoPesquisa estiver vazio
    if(!campoPesquisa == ""){
        section.innerHTML = "<p> Nada foi encontrado. Você não digitou nada. </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase
        descricao = dado.descricao.toLowerCase
        tags = dados.tags.toLowerCase
        //condicional= se no dado titulo includes campo pesquisa
        // entao, faca...
        if (titulo.includes(campoPsquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Crua um novo elemento HTML para cada resultado
               
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultado) {
       resultados = "<p> Nada foi encontrado </p>"
    }
    

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}