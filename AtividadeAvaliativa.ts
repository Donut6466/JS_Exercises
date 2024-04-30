//Menu

class ItemMenu {
    opcao: string;
    textoDaOpcao: string;
    constructor(opcao: string, textoDaOpcao: string) {
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao;
    }
}

const atacar = new ItemMenu("1", "Atacar");
const ataqueEspecial = new ItemMenu("2", "Ataque especial");
const tomarPocaoCuraHP = new ItemMenu("3", "Tomar poção de Cura de HP");
const tomarPocalRestauraMP = new ItemMenu("4", "Tomar poção que Restaura MP");
const defender = new ItemMenu("5", "Defender");

class Menu {
    arrayMenu: ItemMenu[];

    constructor() {
        this.arrayMenu = [
            new ItemMenu("1", "atacar"),
            new ItemMenu("2", "ataque especial"),
            new ItemMenu("3", "tomar poção de Cura de HP"),
            new ItemMenu("4", "tomar poção que restaura MP"),
            new ItemMenu("5", "defender"),
        ];
    }

    imprimirMenu(){ 
        this.arrayMenu.forEach((element) => console.log(`${element[1]} - ${element[2]}`));
        let minhaOpcao = prompt("Em meio ao confronto, um Menu abre para você\nDigite o número que represente sua ação: "); 
        console.log(`Você escolhe a opção número ${minhaOpcao} para lidar com a situação.`); 
        return minhaOpcao;
    }
}

//Coliseu

class Coliseu {
    monstro: Monstro;
}

//Monstro

class Monstro { 
    hp: number; 
    forcaAtaque: number;
    forcaDefesa: number;

    constructor(hp: number, forcaAtaque: number, forcaDefesa: number) {
        this.hp = hp;
        this.forcaAtaque = forcaAtaque;
        this.forcaDefesa = forcaDefesa;
    }

    hpBaixo(danoRecebido, dano) {
        if (this.hp/this.hp < 0.25) { 
            this.forcaAtaque += this.forcaAtaque * 0.1;
            this.forcaDefesa += this.forcaDefesa * 0.3;
            danoRecebido = dano/2
        }
    }

    receberDano(danoSofrido: number){ 
        if (danoSofrido > this.forcaDefesa) {
            this.hp = (this.hp + this.forcaDefesa) - danoSofrido;
            return this.hp
        }
        if (this.hp <= 0) {
            console.log("Monstro derrotado");
            return this.hp
        }
        console.log(`O HP do monstro está em ${this.hp}`)
    }

    ataque() {
        console.log(`A força do monstro é ${this.forcaAtaque}`)
        return this.forcaAtaque;
    }
}

//Equipamentos

class Equipamento {
    nomeEquipamento: string;
    aumentoAtaque: number;
    aumentoDefesa: number;
    equipCabeca: boolean;
    equipCorpo: boolean;
    equipMao: boolean;

    constructor(nomeEquipamento: string, aumentoAtaque: number, aumentoDefesa: number, equipCabeca: boolean, equipCorpo: boolean, equipMao: boolean) {
        this.nomeEquipamento = nomeEquipamento;
        this.aumentoAtaque = aumentoAtaque;
        this.aumentoDefesa = aumentoDefesa;
        this.equipCabeca = equipCabeca
        this.equipCorpo = equipCorpo
        this.equipMao = equipMao
    }
}

//Cabeça

const coroaRei = new Equipamento("Coroa de Rei", 10, 20, true, false, false);
const capaceteViking = new Equipamento("Capacete de Viking", 15, 25, true, false, false);
const bandanaNinja = new Equipamento("Bandana de Ninja", 8, 15, true, false, false);

//Corpo

const armaduraPecoPeco = new Equipamento("Armadura de PecoPeco", 15, 30, false, true, false);
const cotaCouro = new Equipamento("Cota de Couro", 20, 35, false, true, false)
const armaduraPlatina = new Equipamento("Armadura de Platina", 25, 40, false, true, false);

//Mão

const machadoGuerra = new Equipamento("Machado de Guerra", 30, 0, false, false, true);
const varinhaMagica = new Equipamento("Varinha Mágica", 40, 10, false, false, true);
const cajadoVida = new Equipamento("Cajado da Vida", 35, 10, false, false, true);

//Lutador

class Lutador {
    hp: number;
    mp: number;
    forca: number;
    constituicao: number;
    equipCabeca: Equipamento;
    equipCorpo: Equipamento;
    equipMao: Equipamento;
    constructor(hp: number, mp: number, forca:number, constituicao: number) {
        this.hp = hp;
        this.mp = mp;
        forca = forca;
        this.constituicao = constituicao
    }
    
    equiparEquip(){
        let meuEquip = Number(prompt("Digite o número do equipamento que deseja equipar: "))
        switch (meuEquip) {
            case 1:
                this.equipCabeca = coroaRei;
                break;
            case 2:
                this.equipCabeca = capaceteViking;
                break;
            case 3:
                this.equipCabeca = bandanaNinja;
                break;
            case 4:
                this.equipCorpo = armaduraPecoPeco;
                break;
            case 5:
                this.equipCorpo = cotaCouro;
                break;
            case 6:
                this.equipCorpo = armaduraPlatina;
                break;
            case 7:
                this.equipMao = machadoGuerra;
                break;
            case 8:
                this.equipMao = varinhaMagica;
                break;
            case 9:
                this.equipMao = cajadoVida;
                break;
            default:
                console.log("Opção de equipamento inválido.")
                break;
        }
    }

    exibirInfoLutador() {
        console.log(`Informações do Lutador:\nHP: ${this.hp} MP: ${this.mp}\nForça: ${this.forca} Constituição: ${this.constituicao}\nEquipamentos: ${this.equipCabeca}, ${this.equipCorpo} e ${this.equipMao}`)
    }

    ataque() {
        const ataqueLutador = this.forca + this.equipCabeca[2] + this.equipCorpo[2] + this.equipMao[2];
        console.log(`Seu Lutador possui ${ataqueLutador} de ataque`);
        return ataqueLutador;
    }

    ataqueEspecial() {
        const ataqueLutador = this.forca + this.equipCabeca[2] + this.equipCorpo[2] + this.equipMao[2];
        const ataqueEsp = ataqueLutador + ataqueLutador/2;
        const vintePorcento = this.mp * 0.2;
        if (this.mp > vintePorcento){
            console.log(`Seu Lutador concentra parte de sua mana em um único golpe...\n${ataqueEsp} de ataque causados`);
            this.mp = this.mp - vintePorcento;
            console.log(`MP atual: ${this.mp}`)
            return
        }
        else{
            console.log("MP insuficiente")
        }
        return ataqueEsp
    }

    receberDano(danoSofrido: number){ 
        if (danoSofrido > this.constituicao) {
            this.hp = (this.hp + this.constituicao) - danoSofrido;
            return this.hp
        }
        if (this.hp <= 0) {
            console.log("Lutador derrotado");
            return this.hp
        }
        console.log(`O HP do lutador está em ${this.hp}`)
    }

    atacar() {
        const ataqueLutador = this.forca + this.equipCabeca[2] + this.equipCorpo[2] + this.equipMao[2];
        console.log(`Seu Lutador ataca causando ${ataqueLutador} ao ataque`);
        return ataqueLutador;
    }

    defender() {
        const defesaLutador = this.forca + this.equipCabeca[3] + this.equipCorpo[3] + this.equipMao[3];
        console.log(`Seu Lutador defende causando ${defesaLutador} à defesa`);
        return defesaLutador;
    }

    tomarPocaoHP(){
        return this.hp =+ this.hp * 0.25
    }

    tomarPocaoMP(){
        return this.mp =+ this.mp * 0.25
    }
}

//Jogo

class Jogo{
    menu: Menu
    lutador: Lutador
    coliseu: Coliseu

    jogar(){
        this.menu.imprimirMenu()
        switch (this.menu.imprimirMenu()) {
            case "1":
                this.coliseu.monstro.receberDano(this.lutador.ataque());
                if (this.coliseu.monstro.hp == 0){
                    return console.log("Monstro derrotado.")}
                else {
                    this.lutador.receberDano(this.coliseu.monstro.ataque())
                    if (this.lutador.hp == 0) {
                        return console.log("Lutador derrotado.")
                    }
                }
                break;
            case "2":
                this.coliseu.monstro.receberDano(this.lutador.ataqueEspecial());
                if (this.coliseu.monstro.hp == 0){
                    return console.log("Monstro derrotado.")
                }
                else {
                    this.lutador.receberDano(this.coliseu.monstro.ataque())
                    if (this.lutador.hp == 0) {
                        return console.log("Lutador derrotado.")
                    }
                }
                break;
            case "3":
                this.lutador.tomarPocaoHP()
                break;
            case "4":
                this.lutador.tomarPocaoMP()
                break;
            case "5":
                this.lutador.defender()
            default:
                console.log("opção inválida")
                break;
        }
        if (this.lutador.hp && this.coliseu.monstro.hp > 0){
            this.jogar()
        }
    }
}