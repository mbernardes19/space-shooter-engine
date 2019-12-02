import Armazenamento from "../utilidades/Armazenamento.js";

export default class Sprite {
  /**
   * Cria um objeto de Sprite
   * @param {string} urlImagem
   * @param {number} largura 
   * @param {number} altura 
   */
  constructor(idImagem, largura = 32,altura = 32) {
    if (!idImagem) {
      throw new Error('Sprite deve ter o parâmetro `idImagem` preenchido');
    }
    this.armazenamento = new Armazenamento();
    this.armazenamento.pegarImagem(idImagem)
      .then((imagem) => {
        this.imagem = imagem;
        this.altura = altura == undefined ? this.imagem.naturalHeight : altura;
        this.largura = largura == undefined ? this.imagem.naturalWidth : largura;
      })
  }
}