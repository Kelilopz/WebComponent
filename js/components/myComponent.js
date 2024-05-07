// class H7{
//     size="1.3rem";
//     #font_family="cursive"
//     constructor(val){
//         this.setFontFamily = val 
//     }
//     get getFontFamily(){
//         return this.#font_family
//     }
//     set setFontFamily(){
//         this.#font_family=font;
//     }
// }
// let obj = new H7()
// obj.setFontFamily = "Arial"
// console.log(obj.getFontFamily)

// class HTMLElement{
//     configuracion

// }
class H7 extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = /*html*/

    }

}

customElements.define("my-h7",H7)
