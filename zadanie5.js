class Cart{
    constructor(){
        this.produkt = [];
    }
    addProduct(produkt){
        this.produkt.push(produkt);
        console.log(`Dodano produkt ${produkt}`);
    }
    removeProduct(productDoKasacji){
        this.produkt = this.produkt.filter(produkt => produkt !== productDoKasacji)
    }
}