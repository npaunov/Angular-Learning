abstract class Melon {
    protected _element: string;

    constructor(
        public weight: number,
        public melonSort: string) {
            this._element =  this.constructor.name.slice(0, -5);
         }

    public get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString(): any {
        return `Element: ${this._element}\n` +
               `Sort: ${this.melonSort}\n` +
               `Element Index: ${this.elementIndex};`
        
    }
}

export class Watermelon extends Melon {

}

export class Firemelon extends Melon {

}

export class Earthmelon extends Melon {

}

export class Airhmelon extends Melon {

}

export class Melonlemonmelon extends Watermelon{
    
    _element = 'Water';
    private _elementsData: string[] = ['Fire', 'Earth', 'Air', 'Water']

    morph(): void{
        this._element = this._elementsData.shift();
        this._elementsData.push(this._element);
    }
}