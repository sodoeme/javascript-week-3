//EASY
var run = exercise("running");
console.log(run()); // prints "Today's exercise: running"
var swim = exercise("swimming");
console.log(swim()); // prints "Today's exercise: swimming"

function exercise(x) {
  return () => {
    return "Today's excerise: " + x;
  };
}

//Medium
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(x) {
  return (y) => {
    return (
      "Each person gets " + Number((x / y).toFixed(2)) + " slices of pizza"
    );
  };
}

//HARD
//Type 1
class Hard {
  #pii = {
    name: "Success Odoemena",
    ssn: "999-99-9999",
  };

  getName() {
    return this.#pii.name;
  }
}

var hard = new Hard();
console.log(hard.getName());

//Type 2
function hard2() {
  const pii = {
    name: "Success Odoemena",
    ssn: "999-99-9999",
  };
  function getName() {
    return pii.name;
  }
  return {
    getName: getName,
  };
}
var hard = hard2();
console.log(hard.getName());

//Very hard
class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  excersice() {
    console.log("Cardio is the most vital exercise");
  }
  fetchJob() {
    console.log(this.name + " is a " + this.job);
  }
}

class Progammer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask = () => {
    this.busy = false;
  };
  acceptNewTask = () => {
    this.busy = true;
  };

  offerNewTask = () => {
    if (this.busy) {
      console.log("Mark can't accept any new tasks right now");
    } else {
      console.log("Mark would love to take on a new responsibility.");
    }
  };

  learnLanguage = (language) => {
    this.languages.push(language);
  };
  listLanguages = () => {
    var statement = this.name+ ' knows the following languages: '
    this.languages.forEach((lang) => {
        var comma = ','
        if(this.languages.indexOf(lang)=== this.languages.length-1){
            comma = ''
        }
      statement+= ` ${lang}`+comma
    });
    console.log(statement)
  };
}

const person = new Person("success", "lifter", 22);
person.excersice();
person.fetchJob();

const programmer = new Progammer("john", "bum", 24, ["english", "japanese"]);
programmer.excersice();
programmer.fetchJob();
programmer.learnLanguage("german");
programmer.listLanguages();

const programmer2 = new Progammer("nate", "hobo", 23, ["igbo", "mandarin"]);
programmer2.excersice();
programmer2.fetchJob();
programmer2.learnLanguage("patwa");
programmer2.listLanguages();
