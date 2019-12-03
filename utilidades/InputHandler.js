import GameView from "../GameView.js";
import GameController from "../GameController.js";

export default class InputHandler{
    /**@type {GameView} */
    view;
    /**@type {GameController} */
    controller;
    comandoAtual;
    teclasInput = [];
    /**
     * @param {GameView} view 
     * @param {GameController} controller
     */
    constructor(view, controller) {
        this.view = view;
        this.controller = controller;
        document.addEventListener('keydown', (keyEvent) => {
            this.checkKeyInput(keyEvent);
        })
    }

    adicionarTeclaInput(tecla, comando) {
        this.teclasInput.push({
            tecla: tecla,
            comando: comando,
            evento: new Event(comando)
        })
    }

    /**
     * 
     * @param {KeyboardEvent} keyEvent 
     */
    checkKeyInput(keyEvent) {
        this.teclasInput.forEach(teclaInput => {
            console.log(keyEvent)
            if (keyEvent.key === teclaInput.tecla) {
                keyEvent.preventDefault();
                this.comandoAtual = teclaInput.comando;
                document.dispatchEvent(teclaInput.evento);
            }
        });
    }
}

InputHandler.CIMA = "cima";
InputHandler.BAIXO = "baixo";
InputHandler.ESQUERDA = "esquerda";
InputHandler.DIREITA = "direita";
InputHandler.ATACAR = "atacar";