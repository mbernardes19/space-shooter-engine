import Objeto from "./Objeto.js";

export default class Tiro extends Objeto {
    dano;
    constructor(sprite, largura=10, altura=10, velocidade=10) {
        super(sprite,altura,largura);
    }

    setDano(dano) {
        this.dano = dano;
    }
}