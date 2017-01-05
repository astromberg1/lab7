class Product {
    public Name: string;
    public Category: string;
    public Price: number;
    public ArticelNumber: string;

    constructor(theName: string, theCategory:string, thePrice:number, theArticleNumber:string) {
        this.Name = theName;
        this.Category = theCategory;
        this.Price = thePrice;
        this.ArticelNumber = theArticleNumber;
    }
}

//derived class
class Book extends Product {
    public Writer: string;
    public Year: number;

    constructor(Name: string, Category: string, Price: number, ArticleNumber: string, theWriter: string, theYear: number) {
        super(Name, Category, Price, ArticleNumber); {

        }
        this.Writer = theWriter;
        this.Year = theYear;


    }
}


class DVD extends Product {
    public Manufactor: string;


    constructor(Name: string, Category: string, Price: number, ArticleNumber: string, theManufactor: string) {
        super(Name, Category, Price, ArticleNumber); {

        }
        this.Manufactor = theManufactor;



    }
}

class Game extends Product {
    public Machine: string;


    constructor(Name: string, Category: string, Price: number, ArticleNumber: string, theMachine: string) {
        super(Name, Category, Price, ArticleNumber); {

        }
        this.Machine = theMachine;



    }
}

let ProduktArray: Array<Product> = [new Book("Tintin", "Book", 100, "24", "elsa beskow", 1947), new Book("Tarzan", "Book", 200, "26", "Hitccook", 1956)
    , new Game("Pacman", "Game", 100, "31", "Sony Playstation"), new DVD("Rocke", "DVD", 200, "32", "Dalius Production")
    , new Game("Asteroids", "Game", 140, "33", "Nintendo")];

ProduktArray.push(new Book("Typescript for dummies", "Book", 1000, "50", "Scott David", 2017));




for (let prod of ProduktArray) {
    if (prod instanceof Book) {

        {
            let mybook: Book = <Book>prod;
        }
    }
}

function showform() {

    $(document.getElementById("bokform")).show();

}

function showproducts() {
    var resdiv = document.getElementById("productlist");
    let utstring: string = "<p>";
    for (let prod of ProduktArray) {

        utstring = utstring + " " + prod.Name + " " + prod.Category + " " + prod.Price + " " + prod.ArticelNumber + "<br\>";




    }
    resdiv.innerHTML = utstring + "</p>";

}

function showbooks() {
    var resdivbook = document.getElementById("booklist");
    let utstring: string = "<p>";
    for (let prod of ProduktArray) {
        if (prod instanceof Book) {

            {
                let mybook: Book = <Book>prod;
                utstring = utstring + " " + mybook.Name + " " + mybook.Category + " " + mybook.Price + " " + mybook.ArticelNumber + " " + mybook.Writer + " "+ mybook.Year +"<br\>";

            }
        }
    }
    resdivbook.innerHTML = utstring + "</p>";


}

function loadbook() {

    let name: string = $("#name").val();
    let Category: string = "Book";
    let Price: number = $(document.getElementById("price")).val();
    let ArticleNumber: string = $(document.getElementById("article")).val();

    let Writer: string = $(document.getElementById("writer")).val();
    let Year: number = $(document.getElementById("year")).val();

    ProduktArray.push(new Book(name, Category, Price, ArticleNumber, Writer, Year));


}


