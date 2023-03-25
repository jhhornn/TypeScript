import { HasFormatter } from '../interfaces/hasFormatter.js'

export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    //only use this when we have modifiers in front of the property names
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes #${this.amount} for ${this.details}`
    }
}