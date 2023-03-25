/**
 * 1. Register a list container (ul) in the constructor
 * 2. Create a render method to render a new 'li' to the cotainer
 *      --- accepts arguments: invoice or payment, a heading, a position
 *      --- create the html template (li, h4, p)
 *      --- add the 'li' template to the start/end o fthe list
 */

import { HasFormatter } from "../interfaces/hasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement){

    }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading
        li.appendChild(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)

        if (pos === 'start') {
            this.container.prepend(li)
        }else {
            this.container.append(li)
        }
    }
}