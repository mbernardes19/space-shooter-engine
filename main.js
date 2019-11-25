import Personagem from './cena/Personagem.js'
import Cenario from './cenario/Cenario.js';
import GameView from './GameView.js';
import Game from './Game.js';
import Sprite from './sprite/Sprite.js';
import Objeto from './cena/Objeto.js';

// Setar contexto 2d do canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Criar jogo com o contexto do canvas
const game = new Game(ctx);


// RESOLVER PROBLEMAS DE ASSINCRONICIDADE NO CARREGAMENTO DAS IMAGENS
const img1 = game.pegarImagem('./sprites/tiro1.png');
const img2 = game.pegarImagem('./sprites/nave1.png');
const img3 = game.pegarImagem('./sprites/inimigo1.png');
const img4 = game.pegarImagem('./spritesheets/images.png');

// Criar cena a partir de configuração
game.model.cenaAtual = game.model.criarCenaAPartirDeConfiguracao(1);

// Criar jogador e inserir na cena
const spriteJogador = new Sprite('./sprites/nave1.png')
const jogador = new Personagem(spriteJogador);
game.model.cenaAtual.adicionarObjeto(jogador);


// Iniciar Jogo
game.iniciar();