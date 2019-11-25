import Objeto from "./Objeto.js";

export default class Personagem extends Objeto {
    tipo;
    hp;
    resistencia;
    municao;
    tiro;
    constructor(sprite, hp=100, resistencia=50, x=0,y=0,altura=50,largura=50){
        super(sprite,x,y,altura,largura);
        this.hp = hp;
        this.resistencia = resistencia;
    }
}
