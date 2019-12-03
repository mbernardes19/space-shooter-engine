import Personagem from './cena/Personagem.js'
import Cenario from './cenario/Cenario.js';
import GameView from './GameView.js';
import Game from './Game.js';
import Sprite from './sprite/Sprite.js';
import Objeto from './cena/Objeto.js';
import Armazenamento from './utilidades/Armazenamento.js';
import InputHandler from './utilidades/InputHandler.js';
import Tiro from './cena/Tiro.js';

let imagensCarregadas = false;
// Setar contexto 2d do canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Criar jogo com o contexto do canvas
const game = new Game(ctx);

game.armazenamento.carregarImagem('tiro', './sprites/tiro1.png');
game.armazenamento.carregarImagem('nave1', './sprites/nave1.png');
game.armazenamento.carregarImagem('inimigo1', './sprites/inimigo1.png');
game.armazenamento.carregarImagem('images', './spritesheets/images.png');

game.armazenamento.carregarImagens()
    .then(() => game.iniciar())



// Criar cena a partir de configuração
game.model.cenaAtual = game.model.criarCenaAPartirDeConfiguracao(1);

// Criar jogador e inserir na cena
const spriteJogador = new Sprite('nave1');
const jogador = new Personagem(spriteJogador);
game.model.setJogador(jogador);
game.model.cenaAtual.adicionarJogador(jogador);

// Criar inimigo e inserir na cena
const spriteInimigo1 = new Sprite('inimigo1');
const inimigo = new Personagem(spriteInimigo1);
inimigo.x = 500;
inimigo.y = 300;
game.model.cenaAtual.adicionarObjeto(inimigo);

//
const spriteTiro = new Sprite('tiro');

// Criar tecla de input e associar a um nome de comando
game.controller.inputHandler.adicionarTeclaInput('a', 'atacar');

// Criar um comando e adicionar na lista de comandos
game.controller.adicionarComando('atacar',() => {
    const novoTiro = new Tiro(spriteTiro);
    novoTiro.x = game.model.jogador.x;
    novoTiro.y = game.model.jogador.y;
    game.model.jogador.nave.setTiro(novoTiro);
    game.model.tiros.push(novoTiro);
    game.model.jogador.nave.atirar(novoTiro);
})

