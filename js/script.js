// ===============================
// BANCO DE DADOS LOCAL
// ===============================

let objetos = JSON.parse(localStorage.getItem("objetos")) || [

    {
        nome: "Mochila Azul",
        local: "Biblioteca",
        data: "28/07/2026",
        descricao: "Mochila escolar azul."
    },

    {
        nome: "Celular Samsung",
        local: "Pátio",
        data: "27/07/2026",
        descricao: "Celular preto."
    },

    {
        nome: "Garrafa Verde",
        local: "Quadra",
        data: "26/07/2026",
        descricao: "Garrafa térmica."
    }

];

const lista = document.getElementById("listaObjetos");
const formulario = document.getElementById("formObjeto");

// ===============================
// MOSTRAR OBJETOS
// ===============================

function mostrarObjetos(listaObjetos){

    lista.innerHTML = "";

    if(listaObjetos.length === 0){

        lista.innerHTML = `
            <div class="card">
                <h3>Nenhum objeto encontrado</h3>
                <p>Tente outra pesquisa.</p>
            </div>
        `;

        return;

    }

    listaObjetos.forEach((objeto,index)=>{

        lista.innerHTML += `

            <div class="card">

                <h3>${objeto.nome}</h3>

                <p><strong>📍 Local:</strong> ${objeto.local}</p>

                <p><strong>📅 Data:</strong> ${objeto.data}</p>

                <p>${objeto.descricao}</p>

                <button onclick="removerObjeto(${index})">
                    Remover
                </button>

            </div>

        `;

    });

}

mostrarObjetos(objetos);

// ===============================
// CADASTRAR OBJETO
// ===============================

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const objeto = {

        nome: document.getElementById("nome").value,

        local: document.getElementById("local").value,

        data: document.getElementById("data").value,

        descricao: document.getElementById("descricao").value

    };

    objetos.push(objeto);

    localStorage.setItem("objetos", JSON.stringify(objetos));

    mostrarObjetos(objetos);

    formulario.reset();

    alert("Objeto cadastrado com sucesso!");

});

// ===============================
// PESQUISA
// ===============================

function pesquisar(){

    const texto = document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const resultado = objetos.filter(objeto =>

        objeto.nome.toLowerCase().includes(texto) ||

        objeto.local.toLowerCase().includes(texto) ||

        objeto.descricao.toLowerCase().includes(texto)

    );

    mostrarObjetos(resultado);

}

// ===============================
// REMOVER OBJETO
// ===============================

function removerObjeto(indice){

    if(confirm("Deseja remover este objeto?")){

        objetos.splice(indice,1);

        localStorage.setItem("objetos", JSON.stringify(objetos));

        mostrarObjetos(objetos);

    }

}