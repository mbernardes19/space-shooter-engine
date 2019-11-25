import Objeto from "./Objeto.js";

export default class Tiro extends Objeto {
    sprite;
    velocidadeX;
    velocidadeY;
    constructor(sprite, largura=10, altura=10, velocidade=10) {
        super(sprite,altura,largura);
        this.sprite = sprite;
        this.velocidadeX = velocidade;
        this.velocidadeY = velocidade;
    }
}