import Objeto from "./Objeto.js";

export default class Cena {
    /**@type {Objeto[]} */
    objetos = [];
    jogador;
    cenario;
    ondas = [];
    ondaAtual;
    constructor() {}

    adicionarJogador(jogador) {
        this.jogador = jogador;
        this.objetos.push(jogador);
    }
    adicionarObjeto(objeto) {
        this.objetos.push(objeto);
    }


 
}