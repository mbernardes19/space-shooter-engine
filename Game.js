import GameView from "./GameView.js";
import GameController from "./GameController.js";
import GameModel from "./GameModel.js";
import Personagem from "./cena/Personagem.js";
import Armazenamento from "./utilidades/Armazenamento.js";

export default class Game {
    canvasCtx;
    /**@type {GameModel} */
    model;
    /**@type {GameView} */
    view;
    /**@type {GameController} */
    controller;
    /**@type {Armazenamento} */
    armazenamento
    imagens = {};

    gameOver = false;
    pausado = false;

    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.armazenamento = new Armazenamento();
        this.model = new GameModel(this.armazenamento);
        this.view = new GameView(this.canvasCtx);
        this.controller = new GameController(this.view, this.model);
    }

    iniciar() {
        while(!this.gameOver && !this.pausado) {
            this.controller._gameLoop();
        }
    }

    pausar() {
        this.pausado = true;
    }

    retomar() {
        this.pausado = false;
    }

    gameOver() {
        this.gameOver = true;
    }

    resetar() {
        this.gameOver = false;
    }

    async pegarImagem(urlImagem) {
        const novaImagem = new Image();
        novaImagem.src = urlImagem;
        await this.carregarImagem(urlImagem)
                .then(img => {
                    console.log('Imagem carregada!');
                    this.armazenamento.guardar(urlImagem, img);
                    return true;
                })
                .catch(err => {
                    throw err
                })
    }

    carregarImagem(urlImagem) {
       return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', e => resolve(img))
        img.addEventListener('error', () => {
            reject(new Error('Imagem para Sprite não encontrada na url '+ '"' + urlImagem+ '"' +' . Verifique o argumento passado pelo parâmetro `urlImagem`'))
        })
        img.src = urlImagem;
       });
    }
}