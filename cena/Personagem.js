import Objeto from "./Objeto.js";
import Nave from "./Nave.js";

export default class Personagem extends Objeto {
    tipo;
    hp;
    /**@type {Nave} */
    nave;
    resistencia;
    municao;
    tiro;
    constructor(sprite, hp=100, resistencia=50, x=0,y=0,altura=50,largura=50){
        super(sprite,x,y,altura,largura);
        this.hp = hp;
        this.resistencia = resistencia;
        this.nave = new Nave(this.sprite);
        this.nave.x = this.x;
        this.nave.y = this.y;
    }

    setX(x) {
        this.x = x;
        this.nave.x = x;
    }

    setY(y) {
        this.y = y;
        this.nave.y = y;
    }
}
