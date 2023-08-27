export class Pokemon {
    id: number;
    types: Array<string>;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    created: Date;

    constructor(
        hp: number = 100,
        cp: number = 10,
        name: string = "Enter un nom...",
        picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
        types: Array<string> = ['Normal'],
        created: Date = new Date()
    ) {
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;

    }
}