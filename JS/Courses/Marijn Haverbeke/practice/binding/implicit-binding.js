var person = function (){
    this.name = 'Ronald';
    this.age = '25';
    this.color = 'Brown';
    this.position = 'Teacher';
};

 // In implicit binding, "whatever is to the left" 
 // of the dot becomes the context for "this" in the function

person.prototype.doStuff = function (action) {
    console.log(this.name + ' is a ' + this.color + this.position + ' who can: ' + action);
}

var obj = new person();

obj.doStuff('Cook');

