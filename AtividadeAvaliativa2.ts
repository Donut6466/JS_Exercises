/* 
1. Crie:
a. [0,2pts]Classe Item com os atributos protected e método:
    i. nome;
    ii. descricao;
    iii. método abstrato aplicarBeneficios() que recebe um Personagem como
    parâmetro;
    iv. método abstrato removerBeneficios() que recebe um Personagem como
    parâmetro;
b. [0,2pts]Classe ItemInventário private com os atributos
    i. quantidade;
    ii. item (do tipo Item);
c. [0,5pt]Classe Arma;
    i. herda de Item;
    ii. Quando equipado, adiciona +10 ao ataque e +5 a defesa;
d. [0,5pts]Classe Poção;
    i. herda de Item;
    ii. Quando usado restaura 50% de HP e 20% de MP
e. [1,5pts]Classe Inventário com os atributos privados e método:
    i. array de ItemIventario;
    ii. quatidadeMaximaItens;
    iii. método adicionarItem() que deve receber um item;
        1. deve adicionar o item a lista de ItemInventario;
        2. Caso o Item já exista, acrescentar na quantidade;
        3. Caso o inventário esteja cheio, lançar a exceção
        InventarioLimiteException com a mensagem que o inventário está
        cheio;
f. [0,2pts]Crie a Classe ItemMenu com os atributos privados:
    i. opcao e textoOpcao;  
g. [0,4pts]Cria a classe Menu com os atributos privados:
    i. Um array de ItemMenu;
    ii. Um método chamado imprimirMenu() que retorna a opção selecionada pelo
    usuário;
h. [1,5pts]Crie a classe Personagem com os atributos privados e métodos:
    i. nome;
    ii. HP;
    iii. MP;
    iv. forca;
    v. defesa;
    vi. inventario;
    vii. arma;
    viii. Método abrirInventario() que deve listar os itens do inventário e a
    quantidade de itens totais do inventário da seguinte forma:
--------------------------------------------------------------------------
--------------------------------------------------------------------------
            indice - nome do item (quantidade do item)
            Total: total de itens/Máximo de itens
--------------------------------------------------------------------------
--------------------------------------------------------------------------
            Exemplo de como o menu deve aparecer:
            1 - Elmo das Valquirias (3)
            2 - Poção de cura (10)
            3 - Espada Longa (1)
            Total: 14/20
--------------------------------------------------------------------------
--------------------------------------------------------------------------
    ix. Método usarItem() que recebe um item e equipa ou usa no personagem;
    x. Se o item for uma poção, reduzir a quantidade em 1;
    xi. Se o item for uma arma, não alterar a quantidade;
    xii. Se o item for uma arma atribuir ao atributo correspondente;
    xiii. Método que exibe as informações do personagem;
    xiv. Métodos desequiparArma() que remove a arma do personagem;
[1,0pts]Ao executar a aplicação o menu deve ser exibido da seguinte forma:
--------------------------------------------------------------------------
--------------------------------------------------------------------------
            1. Equipar Arma;
            2. Tomar Poção;
            3. Adicionar Arma ao Inventário;
            4. Adicionar Poção ao Inventário;
            5. Imprimir Info;
            6. Desequipar Arma
            0. Sair;
--------------------------------------------------------------------------
--------------------------------------------------------------------------
[2,0pts] Ao escolher as opções 3 e 4 permitir que o usuário informe as opções do item (nome,
descrição) e a quantidade de itens que devem ser adicionados ao inventário.
[2,0pt] Ao escolher a opção 1, listar as armas do inventário e permitir o usuário escolher qual
arma equipar e se for 2, listar as poções do inventário e permitir o usuário escolher qual poção
usar;
[0,3pts] Ao escolher a opção 5 exibir as informações do Personagem
[0,2pts]Ao escolher a opção 0, sair da aplicação.
[0,5pt] Ao escolher a opção 6, desequipar a arma;
*/

//Letra A
abstract class Item {
    protected nome: string;
    protected descricao: string;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }
    
    abstract aplicarBeneficios(personagem: Personagem): void; 
    abstract removerBeneficios(personagem: Personagem): void;

    ItemNome(): string {
        return this.nome;
    }
    ItemDescricao(): string {
        return this.descricao;
    }

}

//Letra B
class ItemInventario {
    private quantidade: number;
    private item: Item;

    constructor(quantidade: number, item: Item) {
        this.quantidade = quantidade;
        this.item = item;
    }

    InvItem(): Item {
        return this.item
    }
    InvQuant(): number {
        return this.quantidade
    }   
}

//Letra C

class Arma extends Item {
    constructor(nome: string, descricao: string) {
        super(nome, descricao);
    }

    aplicarBeneficios(personagem: Personagem): void {
        // personagem.aumentarAtaque(10);
        // personagem.aumentarDefesa(5);
    }
    removerBeneficios(personagem: Personagem): void {
        // personagem.diminuirAtaque(10);
        // personagem.diminuirDefesa(5);
    }
}

//Letra D

class Pocao extends Item {
    constructor(nome: string, descricao: string) {
        super(nome, descricao);
    }

    aplicarBeneficios(personagem: Personagem): void {
        let restaurarHP = 0.5
        let restaurarMP = 0.2
    }

    removerBeneficios(personagem: Personagem): void {       
    }
}

//Letra E

class Inventario {
    itensInventario: ItemInventario[];
    quantidadeMaximaItens: number;

    constructor(itemInventario: ItemInventario[], quantidadeMaximaItens: number){
        this.itensInventario = itemInventario;
        this.quantidadeMaximaItens = quantidadeMaximaItens
    }

    adicionarItem(): void{

    }
}

//Letra F

class ItemMenu{
    private opcao: string;
    private textoOpcao: string;

    constructor (opcao: string, textoOpcao: string){
        this.opcao = opcao;
        this.textoOpcao = textoOpcao;
    }

    itemMenuOpcao(): string {
        return this.opcao
    }
    itemMenuTextoOpcao(): string {
        return this.textoOpcao
    }
}

//Letra G

class Menu {  //g
    private itensMenu: ItemMenu[];

    constructor() {
        this.itensMenu = [
            new ItemMenu("1", "equipar arma"),
            new ItemMenu("2", "tomar poção"),
            new ItemMenu("3", "adicionar arma ao inventario"),
            new ItemMenu("4", "adicionar poção ao inventario"),
            new ItemMenu("5", "imprimir info"),
            new ItemMenu("6", "desequipar arma"),
            new ItemMenu("0", "sair")
        ];
    }

    imprimirMenu(): string {
        this.itensMenu.forEach(item => {
            console.log(`${item.itemMenuOpcao()}\n${item.itemMenuTextoOpcao()}`);
        });

        const opcao = String(prompt("Digite o número que represente sua ação: "));
        return opcao;
    }
}

//Letra H

class Personagem {
    private nome: string;
    private ataque: number;
    private defesa: number;
    private hp: number;
    private mp: number;
    private inventario: Inventario;
    private arma: Arma;


    constructor(nome: string, ataque: number, defesa: number, hp: number, mp: number, inventario: Inventario, arma: Arma) {
        this.nome = nome
        this.ataque = ataque;
        this.defesa = defesa;
        this.hp = hp;
        this.mp = mp;
        this.inventario = inventario;
        this.arma = arma;
    }

    abrirInventario(){
        let itemX = this.inventario.itensInventario;
        for(let i = 0; i < itemX.length; i++){
            console.log(`${i} - ${itemX[i][1][0]} (${itemX[i][0]})\nTotal: ${itemX.length}/${this.inventario[1]}`)
        }
    }

    usarItem(item){
        
    }
}
