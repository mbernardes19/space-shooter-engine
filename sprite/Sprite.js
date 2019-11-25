import Armazenamento from "../utilidades/Armazenamento.js";

export default class Sprite {
  /**
   * Cria um objeto de Sprite
   * @param {string} urlImagem
   * @param {number} largura 
   * @param {number} altura 
   */
  constructor(urlImagem, largura = 32,altura = 32) {
    if (!urlImagem) {
      throw new Error('Sprite deve ter o parâmetro `urlImagem` preenchido');
    }
    this.armazenamento = new Armazenamento();
    this.imagem = this.armazenamento.pegar(urlImagem);
    this.altura = altura == undefined ? this.imagem.naturalHeight : altura;
    this.largura = largura == undefined ? this.imagem.naturalWidth : largura;
  }
}