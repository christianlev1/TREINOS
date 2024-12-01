function carregarFicha(ficha) {
    var conteudo = document.getElementById("conteudo");

    if (ficha === "A") {
        conteudo.innerHTML = `
            <h2>TREINO A: SUPERIORES (Costas e Bíceps)</h2>
            <ul>
                <li><strong>PUXADA NA POLIA ALTA (Frente)</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>REMADA BAIXA (Máquina ou cabo)</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>REMADA UNILATERAL (Halter)</strong>: 3X de 10-12 (cada lado) <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>ROSCA DIRETA (halter ou barra)</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
		<li><strong>ROSCA CONCENTRADA (Halter)</strong>: 3X de 12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
		<li><strong>ROSCA MARTELO (Halter)</strong>: 3X de 12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>LOMBAR (Solo ou máquina)</strong>: 3X de 15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
            </ul>
        `;
    } else if (ficha === "B") {
        conteudo.innerHTML = `
            <h2>TREINO B: INFERIORES (Pernas e Glúteos)</h2>
            <ul>
                <li><strong>AGACHAMENTO LIVRE</strong>: 4X de 8-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>LEG PRESS</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>AFUNDO</strong>: 3X de 12 repetições (cada perna) <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>CADEIRA EXTENSORA</strong>: 3X de 12-15 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>FLEXÃO DE PERNAS (Máquina)</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>AVANÇO (Passada com halteres)</strong>: 3 de 12 (por perna) <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>STIFF</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>PANTURRILHA NO LEG PRESS</strong>: 4X de 15-20 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
            </ul>
        `;
    } else if (ficha === "C") {
        conteudo.innerHTML = `
            <h2>TREINO C: SUPERIORES (Peitoral, Tríceps e Ombros)</h2>
            <ul>
                <li><strong>SUPINO RETO (Barra)</strong>: 4x de 8-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>Desenvolvimento com Halteres</strong>: 3x de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>SUPINO INCLINADO (Halter) Frontal</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>TRÍCEPS FRANCÊS (Halter)</strong>: 3X de 12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>TRÍCEPS PULLEY (Cabo) Direta</strong>: 3X de 10-12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>ELEVAÇÃO LATERAL (Halter)</strong>: 3X de 12 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
                <li><strong>ABDOMINAIS (Reto e Oblíquo)</strong>: 3X de 20 repetições <button onclick="marcarConcluido(this)">Concluir</button></li>
            </ul>
        `;
    }
}

// Função para marcar um exercício como concluído
function marcarConcluido(botao) {
    var item = botao.parentElement;
    if (!item.classList.contains('concluido')) {
        item.classList.add('concluido');
        botao.textContent = 'Concluído';
        botao.disabled = true;
    }
}