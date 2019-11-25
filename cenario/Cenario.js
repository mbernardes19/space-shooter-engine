import Armazenamento from "../utilidades/Armazenamento.js";

export default class Cenario {
    imagem;
    altura;
    largura;
    /**@type {Armazenamento} */
    armazenamento;

    constructor(urlImagem, largura=undefined, altura=undefined){
        this.armazenamento = new Armazenamento();
        this.imagem = this.armazenamento.pegar(urlImagem);
          
        this.altura = altura == undefined ? this.imagem.naturalHeight : altura;
        this.largura = largura == undefined ? this.imagem.naturalWidth : largura;
        }
    }
