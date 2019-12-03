import Objeto from "./Objeto.js";
import Tiro from "./Tiro.js";

export default class Nave extends Objeto {
    /**@type{Tiro} */
    tiro;
    municao;
    constructor(sprite, largura=10, altura=10, velocidade=10) {
        super(sprite,altura,largura);
        this.sprite = sprite;
        this.velocidadeX = velocidade;
        this.velocidadeY = velocidade;
    }

    setTiro(tiro) {
        this.tiro = tiro;
    }
    
    setTiroStart() {
        this.tiro.x = this.x;
        this.tiro.y = this.y;
    }

    atirar(tiro) {
        const tiroInterval = setInterval(() => {
            if(tiro.y > 10) {
                tiro.y -= tiro.velocidadeY;
            } else {
                clearInterval(tiroInterval);
            }
        }, tiro.velocidadeY*10)
    }
}