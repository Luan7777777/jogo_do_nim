let jogadorDaVez = 1;
let pedrasRestantes = 21;
let historico = [];
let pedras = document.getElementById(`pedras-faltando`)

function removerPedras(jogador, num) {
	if (jogador !== jogadorDaVez) {
		return;
	}
	pedrasRestantes -= num;
	pedras.textContent = pedrasRestantes;

	if (pedrasRestantes <= 0) {
		historico.push(`Jogador ${jogadorDaVez} venceu!`);
		fimDeJogo();
		return;
	}

	historico.push(`Jogador ${jogadorDaVez} removeu ${num} pedras`);
	passarVez();
	atualizarHistorico();

}

function passarVez() {
	jogadorDaVez = jogadorDaVez === 1 ? 2 : 1;
	historico.push(`Vez do jogador ${jogadorDaVez}.`);
	atualizarHistorico();
}

function fimDeJogo() {
	document.getElementById("fim-de-jogo").style.display = "block";
	document.getElementById("ganhador").textContent = `Jogador ${jogadorDaVez} venceu!`;
	historico.push(`Jogador ${jogadorDaVez} venceu!`);
	atualizarHistorico();

}

function reiniciarJogo() {
	jogadorDaVez = 1;
	pedrasRestantes = 21;
	pedras.textContent = pedrasRestantes;
	document.getElementById("fim-de-jogo").style.display = "none";
	historico = [];
	atualizarHistorico();
}

function atualizarHistorico() {
	const historicoList = document.getElementById("game-log");
	historicoList.innerHTML = "";
	for (let i = 0; i < historico.length; i++) {
		const listItem = document.createElement("li");
		// const jogadorNum = i % 2 === 0 ? 1 : 2;
		listItem.textContent = `${historico[i]}`;
		historicoList.appendChild(listItem);
	}
}