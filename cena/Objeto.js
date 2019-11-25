export default class Objeto {
    sprite
    x = 0;
    y = 0;
    altura;
    largura;
    meiaAltura;
    meiaLargura;
    velocidadeX;
    velocidadeY;
    aceleracaoX;
    aceleracaoY;

    constructor(sprite, x=0, y=0, altura=50, largura=50){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.largura = largura;
        this.velocidadeY = 10;
        this.velocidadeX = 10;
    }

    getXMeio(){
        return this.x + this.meiaLargura;
    }
    getYMeio(){
        return this.y + this.meiaAltura;
    }
    getTopo(){
        return this.y;
    }
    getBase(){
        return this.y + this.altura;
    }
    getEsquerda(){
        return this.x;
    }
    getDireita(){
        return this.x + this.largura;
    }
}