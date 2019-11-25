import Personagem from "../../cena/Personagem.js";
import {tipos_tiros} from "../tiros/tipos_tiros.js";

const INIMIGO1 = new Personagem('../../sprites/inimigo1.png');
INIMIGO1.tiro = tipos_tiros[1];




export const tipos_inimigos = {
    1: INIMIGO1
}