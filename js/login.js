const button = document.querySelector("button");

button.addEventListener("click", irParaRegistro);

function irParaRegistro() {
    const usuario = document.getElementById("usuario").value;

    localStorage.setItem("usuario", usuario);

    if (!usuario) {
        alert('Você precisa estar logado para acessar esta página!');
        return;
    }

    window.location.href = "registro.html"
}
