export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    //only use this when we have modifiers in front of the property names
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes #${this.amount} for ${this.details}`;
    }
}
