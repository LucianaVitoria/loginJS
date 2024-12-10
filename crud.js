document.addEventListener('DOMContentLoaded', function () {
    const listaFormas = document.getElementById('listaFormas');
    const formForma = document.getElementById('form-forma-atendimento');
    const novaForma = document.getElementById('novaForma');

    // Função para carregar as formas de atendimento do localStorage
    function carregarFormas() {
        const formas = JSON.parse(localStorage.getItem('forma_atendimento')) || [];
        listaFormas.innerHTML = '';
        formas.forEach((forma, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${forma} 
                <button data-index="${index}" class="editar">Editar</button>
                <button data-index="${index}" class="excluir">Excluir</button>
            `;
            listaFormas.appendChild(li);
        });
    }

    // Adicionar nova forma de atendimento
    formForma.addEventListener('submit', function (e) {
        e.preventDefault();
        const novasFormas = JSON.parse(localStorage.getItem('formasAtendimento')) || [];
        const forma = novaForma.value.trim();

        if (forma) {
            novasFormas.push(forma);
            localStorage.setItem('formasAtendimento', JSON.stringify(novasFormas));
            novaForma.value = ''; // Limpar o campo de entrada
            carregarFormas(); // Atualizar a lista
        } else {
            alert('Por favor, insira uma forma de atendimento.');
        }
    });

    // Editar ou excluir forma de atendimento
    listaFormas.addEventListener('click', function (e) {
        const index = e.target.dataset.index;
        const formas = JSON.parse(localStorage.getItem('formasAtendimento')) || [];

        if (e.target.classList.contains('editar')) {
            const novaFormaEditada = prompt('Editar forma de atendimento:', formas[index]);
            if (novaFormaEditada && novaFormaEditada.trim() !== '') {
                formas[index] = novaFormaEditada.trim();
                localStorage.setItem('formasAtendimento', JSON.stringify(formas));
                carregarFormas(); // Atualizar a lista
            }
        } else if (e.target.classList.contains('excluir')) {
            if (confirm('Deseja excluir esta forma de atendimento?')) {
                formas.splice(index, 1);
                localStorage.setItem('formasAtendimento', JSON.stringify(formas));
                carregarFormas(); // Atualizar a lista
            }
        }
    });

    // Inicializar
    carregarFormas();
});
