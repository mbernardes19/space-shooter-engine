import Cena from "./cena/Cena.js";
import Cenario from './cenario/Cenario.js';
import GameModel from "./GameModel.js";

export default class GameView {
    /**@type {CanvasRenderingContext2D} */
    canvasCtx;
    /**@type {GameModel} */
    model
    CANVAS_HEIGHT;
    CANVAS_WIDTH;
    /**
     * 
     * @param {CanvasRenderingContext2D} canvasCtx 
     */
    constructor(canvasCtx) {
        this.canvasCtx = canvasCtx;
        this.CANVAS_WIDTH = this.canvasCtx.canvas.width;
        this.CANVAS_HEIGHT = this.canvasCtx.canvas.height;
    }
    /**
     * 
     * @param {GameModel} model 
     */
    atualizar(model) {
        this.model = model;
        this.canvasCtx.clearRect(0,0,this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.renderizarCena(this.model.cenaAtual);
        // this.renderizarCenario(this.model.cenaAtual.cenario);
    }

    /**
     * 
     * @param {Cenario} cenario 
     */
    renderizarCenario(cenario) {
  /*      cenario.graficosTiles[0][0].sprite.spritesheet.imagem.onload = () => {
            for(let i = 0; i < cenario.colunas; i++) {
                for(let j = 0; j < cenario.linhas; j++) {
                    const grafico = cenario.graficosTiles[i][j];
                    this.canvasCtx.drawImage(grafico.sprite.spritesheet.imagem, grafico.sprite.inicioX, grafico.sprite.inicioY, grafico.sprite.largura, grafico.sprite.altura, grafico.sprite.altura*i, grafico.sprite.altura*j, grafico.sprite.largura, grafico.sprite.altura);
                }
            }
        }*/
    }

    /**
     * 
     * @param {Cena} cena 
     */
    renderizarCena(cena) {
        cena.objetos.forEach(obj => {
            this.canvasCtx.drawImage(obj.sprite.imagem,obj.x,obj.y)
        });
    }

    reproduzirAnimacao(idObjeto, idAnimacao) {
        /*const objeto = this.model.cenaAtual.objetos.find(obj => obj.id == idObjeto);
        let i = 0;
        let comeco = Date.now();
        
        const loop = setInterval(() => {
            const tempo = Date.now();
            if (animacao.duracao !== 0) {
                if (tempo >= comeco+animacao.duracao*1000) {
                    clearInterval(loop);
                }
            }
            
            this.canvasCtx.clearRect(objeto.x,objeto.y, objeto.largura, objeto.altura);     
            this.canvasCtx.drawImage(
                animacao.sprites[i].spritesheet.imagem,
                animacao.sprites[i].inicioX,
                animacao.sprites[i].inicioY,
                animacao.sprites[i].largura,
                animacao.sprites[i].altura,
                objeto.x,
                objeto.y,
                animacao.sprites[i].largura,
                animacao.sprites[i].altura,
                ); 

                i++;
                i = i % animacao.sprites.length;

                animacao.duracao === 0 && !animacao.sprites[i] ? i = 0 : null;
            !animacao.sprites[i] ? clearInterval(loop) : null;

        } , (animacao.fps*1000));*/
    }

   /* renderizarCenario() {
        
        this.canvasCtx.drawImage(

        ); 

    }*/

   /* renderizarCena() {
        this.canvasCtx.fillText()
    }*/
}