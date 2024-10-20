// Notas das tríades e intervalos
const intervalosTercaMaior = {
    "C": ["E", "G"], "C#": ["E#", "G#"], "Db": ["F", "Ab"], "D": ["F#", "A"], 
    "D#": ["F##", "A#"], "Eb": ["G", "Bb"], "E": ["G#", "B"], "F": ["A", "C"], 
    "F#": ["A#", "C#"], "Gb": ["B", "Db"], "G": ["B", "D"], "G#": ["B#", "D#"], 
    "Ab": ["C", "Eb"], "A": ["C#", "E"], "A#": ["C##", "E#"], "Bb": ["D", "F"], 
    "B": ["D#", "F#"]
};

const intervalosTercaMenor = {
    "C": ["Eb", "G"], "C#": ["E", "G#"], "Db": ["Fb", "Ab"], "D": ["F", "A"], 
    "D#": ["F#", "A#"], "Eb": ["Gb", "Bb"], "E": ["G", "B"], "F": ["Ab", "C"], 
    "F#": ["A", "C#"], "Gb": ["Bbb", "Db"], "G": ["B", "D"], "G#": ["B#", "D#"], 
    "Ab": ["C", "Eb"], "A": ["C", "E"], "A#": ["C#", "E#"], "Bb": ["D", "F"], 
    "B": ["D", "F#"]
};

const intervalosTercaAumentada = {
    "C": ["E", "G#"], "C#": ["E#", "A"], "Db": ["F", "A"], "D": ["F#", "A#"], 
    "D#": ["F##", "B"], "Eb": ["G", "B"], "E": ["G#", "C"], "F": ["A", "C#"], 
    "F#": ["A#", "D"], "Gb": ["B", "Db#"], "G": ["B", "D#"], "G#": ["B#", "D##"], 
    "Ab": ["C", "E"], "A": ["C#", "E#"], "A#": ["C##", "E##"], "Bb": ["D", "F#"], 
    "B": ["D#", "F##"]
};

const intervalosTercaDiminuta = {
    "C": ["Eb", "Gb"], "C#": ["E", "G"], "Db": ["Fb", "Ab"], "D": ["F", "A♭"], 
    "D#": ["F#", "A"], "Eb": ["Gb", "Bbb"], "E": ["G", "B♭"], "F": ["Ab", "C♭"], 
    "F#": ["A", "C"], "Gb": ["Bbb", "Db"], "G": ["B", "D♭"], "G#": ["B#", "D"], 
    "Ab": ["C", "E♭"], "A": ["C", "E"], "A#": ["C#", "E"], "Bb": ["D", "F♭"], 
    "B": ["D#", "F"]
};

// Função para gerar a tríade
function gerarTriade() {
    const nota = document.getElementById("nota").value;
    const tipoTriade = document.getElementById("tipoTriade").value;

    let notas;
    switch (tipoTriade) {
        case "maior":
            notas = intervalosTercaMaior[nota];
            break;
        case "menor":
            notas = intervalosTercaMenor[nota];
            break;
        case "aumentada":
            notas = intervalosTercaAumentada[nota];
            break;
        case "diminuta":
            notas = intervalosTercaDiminuta[nota];
            break;
    }

    const triade = [nota, ...notas];
    document.getElementById("resultado").innerHTML = `A tríade ${getNomeTriade(tipoTriade, nota)} é: ${triade.join(' - ')}`;

    // Adicionar à tabela
    adicionarAcordeNaTabela(triade, tipoTriade);
}

// Função para obter o nome da tríade
function getNomeTriade(tipo, nota) {
    const nomesTríades = {
        "maior": `${nota}`,               // Tríade maior: C
        "menor": `${nota}m`,             // Tríade menor: Cm
        "aumentada": `${nota}+`,         // Tríade aumentada: C+
        "diminuta": `${nota}º`           // Tríade diminuta: Cº
    };
    return nomesTríades[tipo];
}

// Função para adicionar acorde na tabela
function adicionarAcordeNaTabela(triade, tipoTriade) {
    const tabelaResultado = document.getElementById("tabelaResultado");
    const novaLinha = document.createElement("tr");
    
    const celulaAcorde = document.createElement("td");
    celulaAcorde.textContent = getNomeTriade(tipoTriade, triade[0]);
    novaLinha.appendChild(celulaAcorde);

    const celulaNotas = document.createElement("td");
    celulaNotas.textContent = `(${triade.join(', ')})`; // Mostra as notas entre parênteses
    novaLinha.appendChild(celulaNotas);

    tabelaResultado.appendChild(novaLinha);
}
