export default class Armazenamento {
    cacheImagens = [];
    constructor() {}

    guardar(id, item) {
        if (item.nodeType === 1) {
            localStorage.setItem(item.id, item);    
        } else {
            const itemString = JSON.stringify(item);
            localStorage.setItem(id, itemString);
        }
    }

    pegar(id) {        
        return JSON.parse(localStorage.getItem(id));
    }

    deletar(id) {
        localStorage.removeItem(id);
    }

    limpar() {
        localStorage.clear();
    }
    
    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    
        return canvas.toDataURL("image/png");
    }

    carregarImagem(id, urlImagem) {
        this.cacheImagens.push(new Promise((resolve, reject) => {
         const img = new Image();
         img.src = urlImagem;
         img.id = id;
         img.onload = () => {
             const dadosImg = this.getBase64Image(img);
             this.guardar(id, dadosImg)
             resolve(img);
         };
         img.onerror = () => {
             reject(new Error('Imagem não encontrada na url '+ '"' + urlImagem+ '"' +' . Verifique o argumento passado pelo parâmetro `urlImagem`'))
         }
        }));
     }
    
    pegarImagem(id){
        return new Promise((resolve, reject) => {
            const urlImagem = this.pegar(id)
            const img = new Image();
            img.src = urlImagem;
            img.id = id;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(new Error('Imagem com id '+ '"' + id+ '"' + + ' não encontrada.' + ' Verifique o argumento passado pelo parâmetro `urlImagem`'))
            }
        });
    }

    carregarImagens(){
        return Promise.all(this.cacheImagens);
    }
}