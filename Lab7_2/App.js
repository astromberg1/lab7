var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product = (function () {
    function Product(theName, theCategory, thePrice, theArticleNumber) {
        this.Name = theName;
        this.Category = theName;
        this.Price = thePrice;
        this.ArticelNumber = theArticleNumber;
    }
    return Product;
}());
//derived class
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(Name, Category, Price, ArticleNumber, theWriter, theYear) {
        _super.call(this, Name, Category, Price, ArticleNumber);
        {
        }
        this.Writer = theWriter;
        this.Year = theYear;
    }
    return Book;
}(Product));
var DVD = (function (_super) {
    __extends(DVD, _super);
    function DVD(Name, Category, Price, ArticleNumber, theManufactor) {
        _super.call(this, Name, Category, Price, ArticleNumber);
        {
        }
        this.Manufactor = theManufactor;
    }
    return DVD;
}(Product));
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(Name, Category, Price, ArticleNumber, theMachine) {
        _super.call(this, Name, Category, Price, ArticleNumber);
        {
        }
        this.Machine = theMachine;
    }
    return Game;
}(Product));
var ProduktArray = [new Book("Tintin", "Book", 100, "24", "elsa beskow", 1947), new Book("Tarzan", "Book", 200, "26", "Hitccook", 1956),
    new Game("Pacman", "Game", 100, "31", "Sony Playstation"), new DVD("Rocke", "DVD", 200, "32", "Dalius Production"),
    new Game("Asteroids", "Game", 140, "33", "Nintendo")];
ProduktArray.push(new Book("Typescript for dummies", "Book", 1000, "50", "Scott David", 2017));
for (var _i = 0, ProduktArray_1 = ProduktArray; _i < ProduktArray_1.length; _i++) {
    var prod = ProduktArray_1[_i];
    if (prod instanceof Book) {
        {
            var mybook = prod;
        }
    }
}
function showform() {
    $(document.getElementById("bokform")).show();
}
function showproducts() {
    var resdiv = document.getElementById("productlist");
    var utstring = "<p>";
    for (var _i = 0, ProduktArray_2 = ProduktArray; _i < ProduktArray_2.length; _i++) {
        var prod = ProduktArray_2[_i];
        utstring = utstring + " " + prod.Name + " " + prod.Category + " " + prod.Price + " " + prod.ArticelNumber + "<br\>";
    }
    resdiv.innerHTML = utstring + "</p>";
}
function showbooks() {
    var resdivbook = document.getElementById("booklist");
    var utstring = "<p>";
    for (var _i = 0, ProduktArray_3 = ProduktArray; _i < ProduktArray_3.length; _i++) {
        var prod = ProduktArray_3[_i];
        if (prod instanceof Book) {
            {
                var mybook = prod;
                utstring = utstring + " " + mybook.Name + " " + mybook.Category + " " + mybook.Price + " " + mybook.ArticelNumber + " " + mybook.Writer + " " + mybook.Year + "<br\>";
            }
        }
    }
    resdivbook.innerHTML = utstring + "</p>";
}
function loadbook() {
    var name = $(document.getElementById("name")).val();
    var Category = "Book";
    var Price = $(document.getElementById("price")).val();
    var ArticleNumber = $(document.getElementById("article")).val();
    var Writer = $(document.getElementById("writer")).val();
    var Year = $(document.getElementById("year")).val();
    ProduktArray.push(new Book(name, "Book", Price, ArticleNumber, Writer, Year));
}
//# sourceMappingURL=App.js.map