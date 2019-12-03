import GameView from "./GameView.js";
import GameModel from "./GameModel.js";
import InputHandler from "./utilidades/InputHandler.js";

export default class GameController {
    /**@type {GameView} */
    view;
    /**@type {GameModel} */
    model;
    /**@type {InputHandler} */
    input
    /**@type {Map<String, Function>} */
    comandos
    /** 
     * @param {GameView} view 
     * @param {GameModel} model 
     */
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.comandos = new Map();
        this.inputHandler = new InputHandler();

        this.inputHandler.adicionarTeclaInput('ArrowUp', InputHandler.CIMA);
        this.inputHandler.adicionarTeclaInput('ArrowDown', InputHandler.BAIXO);
        this.inputHandler.adicionarTeclaInput('ArrowRight', InputHandler.DIREITA);
        this.inputHandler.adicionarTeclaInput('ArrowLeft', InputHandler.ESQUERDA);

        this.adicionarComando('direita',() => this.model.jogador.setX(this.model.jogador.x += this.model.jogador.velocidadeX))
        this.adicionarComando('esquerda',() => this.model.jogador.setX(this.model.jogador.x -= this.model.jogador.velocidadeX))
        this.adicionarComando('cima',() => this.model.jogador.setY(this.model.jogador.y -= this.model.jogador.velocidadeY))
        this.adicionarComando('baixo',() => this.model.jogador.setY(this.model.jogador.y += this.model.jogador.velocidadeY))
    }
    /**
     * @private
     * Método privado
     */

     adicionarListenerEvento(comando, acao) {
        document.addEventListener(comando, acao);
     }

    adicionarListenerEventos() {
        this.comandos.forEach((acao, comando) => {
            document.addEventListener(comando, () => this.executarComando(comando));
        })
    }


    adicionarComando(idComando, acao) {
        this.comandos.set(idComando, acao);
        this.adicionarListenerEvento(idComando, acao);
    }

    executarComando(idComando) {
        this.comandos.get(idComando)();
    }

    removerComando(idComando) {
        this.comandos.delete(idComando);
    }
    /**
     * Game Loop do jogo.
     * Através dele a View é sempre atualizada quando o Model é atualizado.
     */
    _gameLoop() {
        this.view.atualizar(this.model);
        requestAnimationFrame(this._gameLoop.bind(this));
    }
    
}