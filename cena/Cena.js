import Objeto from "./Objeto.js";

export default class Cena {
    /**@type {Objeto[]} */
    objetos = [];
    jogador;
    cenario;
    ondas = [];
    ondaAtual;
    constructor() {}

    adicionarObjeto(objeto) {
        this.objetos.push(objeto);
    }


 
}