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
        console.log(`Kasacja poduktu: ${productDoKasacji}`)
    }

    showCart(){
        console.log(`Lista produktów w koszyku ${this.produkt}`);
    }
}

const Koszyczek = new Cart();
Koszyczek.addProduct("Jaja");
Koszyczek.addProduct("Majonez");
Koszyczek.addProduct("Ser");
Koszyczek.showCart();