class heroStatus {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque = "";
        switch(this.tipo){
            case 'mago':
            ataque = 'magia';
            break;

            case 'guerreiro':
            ataque = 'espada';
            break;

            case 'monge':
            ataque = 'artes marciais';
            break;

            case 'ninja':
            ataque = 'shuriken';
            break;

            default:
                ataque = 'ataque não definido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroiMago = new heroStatus('Implacável', 90, 'mago');
heroiMago.atacar();

const heroiGuerreiro = new heroStatus('Guerreirão', 30 , 'guerreiro');
heroiGuerreiro.atacar();

const heroiMonge = new heroStatus('Shaolin', 200, 'monge');
heroiMonge.atacar();

const heroiNinja = new heroStatus('Naruto', 20, 'ninja');
heroiNinja.atacar();

const naoDefinido = new heroStatus('Zé ninguem', 40, 'zzz');
naoDefinido.atacar();