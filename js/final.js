document.addEventListener('DOMContentLoaded', function () {
    // Pega a forma de atendimento do local storage e muda o texto no HTML
    const forma_atendimento = localStorage.getItem('forma_atendimento');
    const atendimento = document.getElementById('atendimento');
    atendimento.textContent = `${forma_atendimento}`;

    // Pega o perfil seleciondo e muda o texto no HTML
    const perfilSelecionadoID = localStorage.getItem('perfilSelecionadoID');
    const perfilSelecionado = localStorage.getItem('perfilSelecionado');
    const perfil = document.getElementById("perfil");
    perfil.textContent = `${perfilSelecionado}`;

    // Pega o tipo de atendimento e muda o texto no HTML
    const tipo_atendimento = localStorage.getItem('tipo_atendimento');
    const doc_tipo_atendimento = document.getElementById("tipo_atendimento");
    doc_tipo_atendimento.textContent = `${tipo_atendimento}`;

    // Em primeiro momento, esconde todas as divs que podem estar aparecendo ou não
    const escondiveis = document.querySelectorAll("#esconder");
    escondiveis.forEach(escondivel => {
        escondivel.style.display = "none";
    });

    // Pega a div main para mudar sua margem dependendo do perfil selecionado
    const main = document.querySelector(".main");
    
    // Se o perfil selecionado for empregador
    if (perfilSelecionadoID === "empregador") {

        // Pega o nome, cnpj e telefone do empregador no local storage
        const nome_empregador = localStorage.getItem("nome_empregador");
        const cnpj = localStorage.getItem("cnpj");
        const telefone_empregador = localStorage.getItem("telefone_empregador");

        // Muda o nome no HTML
        const nome = document.getElementById("nome");
        nome.textContent = `${nome_empregador}`;

        // Muda o CNPJ no HTML e faz a div voltar a ser visível
        const document_cnpj = document.getElementById("cnpj");
        document_cnpj.textContent = `${cnpj}`;
        const cnpj_div = document.querySelector("#esconder p#cnpj").parentElement;
        cnpj_div.style.display = "flex";

        // Muda o telefone no HTML e faz a div voltar a ser visível
        const telefone = document.getElementById("telefone");
        telefone.textContent = `${telefone_empregador}`;
        const telefone_div = document.querySelector("#esconder p#telefone").parentElement;
        telefone_div.style.display = "flex";

        // Cria uma margem para a div main já que seu conteúdo ocupará mais espaço
        main.style.padding = "70px 0px";

    } else if (perfilSelecionadoID == "trabalhador") { // se o perfil selecionado for trabalhador

        // Pega o nome, cpf e telefone do trabalhador no local storage
        const nome_trabalhador = localStorage.getItem("nome_trabalhador");
        const cpf = localStorage.getItem("cpf");
        const telefone_trabalhador = localStorage.getItem("telefone_trabalhador");

        // Muda o nome no HTML
        const nome = document.getElementById("nome");
        nome.textContent = `${nome_trabalhador}`;

        // Muda o CPF no HTML e faz a div voltar a ser visível
        const document_cpf = document.getElementById("cpf");
        document_cpf.textContent = `${cpf}`;
        const cpf_div = document.querySelector("#esconder p#cpf").parentElement;
        cpf_div.style.display = "flex";

        // Muda o telefone no HTML e faz a div voltar a ser visível
        const telefone = document.getElementById("telefone");
        telefone.textContent = `${telefone_trabalhador}`;
        const telefone_div = document.querySelector("#esconder p#telefone").parentElement;
        telefone_div.style.display = "flex"; 

        // Cria uma margem para a div main já que seu conteúdo ocupará mais espaço
        main.style.padding = "70px 0px";

    } else {

        // Pega o nome do setor no local storage
        const nome_setor = localStorage.getItem("nome_setor");

        // Muda o nome no HTML
        const nome = document.getElementById("nome");
        nome.textContent = `${nome_setor}`;

        // Retira a margem da div main já que o conteúdo ocupará menos espaço
        main.style.padding = "0px 0px";

    }

    // Pega o botão de editar e adiciona uma ação
    const editButton = document.getElementById("edit_button");
    editButton.addEventListener("click", function () {
        window.history.back(); // volta à última página (de registro)
    });

    // Pega o botão de salvar e adiciona uma ação
    const saveButton = document.getElementById("smaller_margin-top_button");
    saveButton.addEventListener("click", function () {
        alert("Informações salvas com sucesso!") // mostra alerta de sucesso
        window.location.href = "login.html"; // vai para a página de login, reiniciando o programa
    });
});