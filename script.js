function main() {
    document.getElementById('botaoGeradorInicio').addEventListener('click', function() {
        gerarFrase();
    });
}

function gerarFrase() {
    var textos = [
        'O rápido rapaz marrom pula sobre o cão preguiçoso.',
        'Um pequeno passo para o homem, um salto gigante para a humanidade.',
        'A vida é o que acontece enquanto você está ocupado fazendo outros planos.',
        'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.',
        'Nada na vida deve ser temido, apenas compreendido.',
        'A imaginação é mais importante que o conhecimento.'
    ];

    var indice = Math.floor(Math.random() * textos.length);
    var textoGerado = textos[indice];

    document.getElementById('textoGerado').innerText = textoGerado;
    document.getElementById('acertividade').innerText = ''; // Limpa o elemento

    iniciarContagemRegressiva();
}

function iniciarContagemRegressiva() {
    var inicio = new Date().getTime(); // Armazena o tempo de início
    var intervalId = setInterval(function () {
        var agora = new Date().getTime(); // Tempo atual
        var contador = agora - inicio; // Calcula o tempo decorrido

        mostrarContador(contador);

        var textoDigitado = document.getElementById('textoDigitado').value;
        var textoGerado = document.getElementById('textoGerado').innerText;

        if (textoDigitado.length === textoGerado.length) {
            pararContagemRegressiva(intervalId);
            verificarAcertividade(textoDigitado, textoGerado, contador);
        }
    }, 10);
}

function pararContagemRegressiva(intervalId) {
    clearInterval(intervalId);
}

function mostrarContador(contador) {
    var segundos = Math.floor(contador / 1000);
    var milissegundos = contador % 1000;

    document.getElementById('tempo').innerText = formatarTempo(segundos, milissegundos);
}

function verificarAcertividade(textoDigitado, textoGerado, tempo) {
    var porcentagemAcerto = calcularPorcentagemAcerto(textoDigitado, textoGerado);

    document.getElementById('acertividade').innerText = 'Porcentagem de acerto: ' + porcentagemAcerto.toFixed(2) + '%';

    adicionarLinhaTabela(formatarTempo(tempo), textoGerado, porcentagemAcerto.toFixed(2));
}

function adicionarLinhaTabela(tempo, frase, acertividade) {
    var tabela = document.getElementById('adicionarLinhaTabela');
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var cellTempo = novaLinha.insertCell(0);
    var cellFrase = novaLinha.insertCell(1);
    var cellAcertividade = novaLinha.insertCell(2);

    cellTempo.textContent = tempo;
    cellFrase.textContent = frase;
    cellAcertividade.textContent = acertividade + '%';
    console.log('está funcionando!')
}

function formatarTempo(segundos, milissegundos) {
    var data = new Date(0);
    data.setSeconds(segundos);
    data.setMilliseconds(milissegundos);

    var formatoTempo = data.toISOString().substr(11, 8) + '.' + milissegundos;

    return formatoTempo;
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

main();
