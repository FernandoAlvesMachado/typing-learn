document.getElementById('iniciarProjeto').addEventListener('click', function() {
    var textos = {
        texto1: 'O rápido rapaz marrom pula sobre o cão preguiçoso.',
        texto2: 'Um pequeno passo para o homem, um salto gigante para a humanidade.',
        texto3: 'A vida é o que acontece enquanto você está ocupado fazendo outros planos.',
        texto4: 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.',
        texto5: 'Nada na vida deve ser temido, apenas compreendido.',
        texto6: 'A imaginação é mais importante que o conhecimento.'
    };

    var chaves = Object.keys(textos);
    var indice = Math.floor(Math.random() * chaves.length);
    var chaveAleatoria = chaves[indice];
    var textoGerado = textos[chaveAleatoria];

    document.getElementById('textoGerado').innerText = textoGerado;
});



function iniciarContagemRegressiva() {

    contador = 20000; // 20 segundos em milissegundos
    tempoS = contador / 1000; // Converte para segundos
    mostrarContador();

    var intervalId = setInterval(function() {
        contador -= 10; 

        // Exibe o contador
        mostrarContador();

        // Verifica se o contador chegou a zero
        if (contador <= 0) {
            pararContagemRegressiva(intervalId);
        }
    }, 10);
}

function pararContagemRegressiva(intervalId) {
    clearInterval(intervalId); // Para o intervalo
    var textoDigitado = document.getElementById('textoDigitado').value;
    let textoGerado = document.getElementById('textoGerado').innerText
    // Verifica se o texto digitado é igual ao texto gerado



    if (textoDigitado === textoGerado) {
        alert('Parabéns! Você conseguiu!');
    } else {
        alert('Tente novamente. Os textos não coincidem.');
    }

    // Limpa o campo de texto digitado
    document.getElementById('textoDigitado').value = '';
}

function mostrarContador() {
    // Exibe o contador na tela
    var segundos = Math.floor(contador / 1000);
    var milissegundos = contador % 1000;

    document.getElementById('tempo').innerText = segundos;
    document.getElementById('segundos_tempo').innerText = milissegundos;
}

function calcularPorcentagemAcerto(textoDigitado, textoGerado) {
    var tamanhoTexto = Math.max(textoDigitado.length, textoGerado.length);
    var caracteresCorrespondentes = 0;

    for (var i = 0; i < tamanhoTexto; i++) {
        if (textoDigitado[i] && textoDigitado[i] === textoGerado[i]) {
            caracteresCorrespondentes++;
        }
    }

    return (caracteresCorrespondentes / tamanhoTexto) * 100;
}