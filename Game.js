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
        console.log('Jogo rodando!')
        this.controller._gameLoop();
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
}