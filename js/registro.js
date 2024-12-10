const usuario = localStorage.getItem('usuario');
const saudacao = document.getElementById('saudacao');
saudacao.textContent = `Olá, ${usuario}!`;

document.addEventListener('DOMContentLoaded', function () {
    // Pega perfil de atendimento selecionado
    const perfil = document.getElementById("perfil");

    function atualizarCampos() {
        // Pega o valor do perfil selecionado
        const perfilSelecionado = perfil.value;

        // Esconde todos os textfields
        const campos = document.querySelectorAll(".textfield");
        campos.forEach(campo => {
            campo.style.display = "none";
        });

        // Apresenta os textfields correspondentes ao perfil de atendimento selecionado
        const camposDoPerfil = document.querySelectorAll(`#${perfilSelecionado}`);
        camposDoPerfil.forEach(campo => {
            campo.style.display = "flex";
        });
        
        // Atualizar padding da div "main" dependendo do número de textfields visíveis
        const main = document.querySelector(".main");
        if (perfilSelecionado === "setor_fgtas") { // esse perfil não tem tantos textfields (main sem padding)
            main.style.padding = "0px 0px";
        } else { /// os outros perfis têm mais textfields (main com padding)
            main.style.padding = "50px 0px";
        }
    }

    // Chama quando a view é carregada
    atualizarCampos()

    // Chama quando o perfil é mudado
    perfil.addEventListener("change", atualizarCampos);
});

const button = document.querySelector("button");
button.addEventListener("click", irParaFinal);

function irParaFinal() {
    // Pega perfil de atendimento selecionado
    const perfil = document.getElementById("perfil");

    // Pega o valor do perfil selecionado
    const perfilSelecionado = perfil.value;
    const camposDoPerfil = document.querySelectorAll(`#${perfilSelecionado}`);

    // Itera sobre os campos relacionados a esse perfil e confere se estão vazios
    let valido = true;
    for (let i = 0; i < camposDoPerfil.length; i++) {
        const campo = camposDoPerfil[i];
        const input = campo.querySelector("input");
        
        if (input.value === "") {
            alert('Você não preencheu todos os campos necessários');
            valido = false;
            break;
        } 
    }

    if (valido) {
        const atendimento = document.getElementById("atendimento").selectedOptions[0].text;
        localStorage.setItem("forma_atendimento", atendimento);

        localStorage.setItem("perfilSelecionadoID", perfilSelecionado);
        localStorage.setItem("perfilSelecionado", perfil.selectedOptions[0].text);

        const tipo_atendimento = document.getElementById("tipo_atendimento").selectedOptions[0].text;
        localStorage.setItem("tipo_atendimento", tipo_atendimento);

        camposDoPerfil.forEach(campo => {
            const input = campo.querySelector('input');
            localStorage.setItem(input.id, input.value);
        });

        window.location.href = "final.html";
    }
}