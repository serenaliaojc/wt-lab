(function () {
    //Functions
    function getName(person) {
        if (typeof person === "object") {
            return person.Name;
        }
        else {
            var strArray = person.split(" ");
            return strArray[0];
        }
    }
    console.log("Get name function: ");
    console.log(getName({ Name: "Bob", Title: "Duke" }));
    console.log(getName("John Smith"));
    //Arrow functions
    //Used in other languages to shorten functions
    //C# refers to these as lambda expressions
    //Without arrows
    /*let randomNumber = function(numbers : number[]){
        return Math.floor(Math.random() * numbers.length);
    }*/
    //With arros
    var randomNumber = function (numbers) { return Math.floor(Math.random() * numbers.length); };
    var scores = [1, 2, 3, 4, 5];
    console.log("Random number: ");
    console.log(randomNumber(scores));
    //Arrow functions can encapsulate this
    //Here's a good explanation of using them: https://basarat.gitbooks.io/typescript/docs/arrow-functions.html
    function Person(age) {
        this.age = age;
        this.growOld = function () {
            this.age++;
            console.log(this); //this will show that this is referring to the window, not Person
        };
    }
    var Rob = new Person(10);
    console.log("Rob's age: " + Rob.age);
    setTimeout(Rob.growOld, 1000);
    setTimeout(function () { console.log(Rob.age); }, 2000); //Rob is not 11 as predicted. 
    console.log("Rob's age after getting old: " + Rob.age);
    //Redefined Person with arrow functions
    function Person2(age) {
        var _this = this;
        this.age = age;
        var _this = this;
        this.growOld = function () {
            _this.age++;
            _this.age++;
            console.log(_this); //this will show that this is referring to Person
        };
    }
    var Dave = new Person2(10);
    console.log("Dave's age: " + Dave.age);
    setTimeout(Dave.growOld, 1000);
    setTimeout(function () { console.log("Dave's age after getting old: " + Dave.age); }, 2000);
})();
