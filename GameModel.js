import Cena from "./cena/Cena.js";
import Personagem from "./cena/Personagem.js";
import Armazenamento from "./utilidades/Armazenamento.js";
import { cenariosConfig } from './configuracoes/lvls/public_api.js';
import Sprite from "./sprite/Sprite.js";
import Cenario from "./cenario/Cenario.js";
import Onda from "./cena/Onda.js";
import {tipos_inimigos} from "./configuracoes/inimigos/tipos_inimigos.js";

export default class GameModel {
    /**@type {Cena} */
    cenaAtual
    /**@type {Cena[]} */
    cenas = [];
    /**@type {Personagem} */
    jogador
    /**@type {Armazenamento} */
    armazenamento
    constructor(armazenamento, cenaAtual=undefined) {
        this.configuracaoCenas = cenariosConfig;
        this.cenaAtual = cenaAtual;
        this.jogador = this.cenaAtual ? this.cenaAtual.pegarJogador() : undefined;
        this.armazenamento = armazenamento;
    }

    pegarCenas() {
        const cenasPegas = this.armazenamento.pegar('cenas');
        this.cenas = cenasPegas;
    }

    pegarCenaAtual() {
        const cenaAtualPega = this.armazenamento.pegar('cenaAtual');
        this.cenaAtual = cenaAtualPega;
    }

    criarCena() {
        return new Cena();
    }

    criarCenaAPartirDeConfiguracao(numeroLvl) {
        const novaCena = new Cena();
        for (const lvl in this.configuracaoCenas) {
            const lvlConfig = this.configuracaoCenas[lvl];
            if (lvl == `lvl_${numeroLvl}`) {
                novaCena.cenario = new Cenario(lvlConfig.urlImagem);
                novaCena.ondas = lvlConfig.ondas;
                novaCena.ondaAtual = lvlConfig.ondas[0];
                
                lvlConfig.ondas.forEach(onda => {
                    const novaOnda = new Onda();
                    onda.tipos_inimigos.forEach(tipoInimigo => {
                        novaOnda.inimigos.push(tipos_inimigos[tipoInimigo])
                        novaOnda.qtdInimigos = onda.qtd_inimigos;
                        novaOnda.trajetos = onda.trajetos;
                    });
                    novaCena.ondas.push(novaOnda);
                })
            }
        }
        this.cenas.push(novaCena);
        return novaCena;
    }
}