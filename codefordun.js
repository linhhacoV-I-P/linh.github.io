


greeting1 = "a";
greeting2 = "b";


function speak(greeting1, greeting2) {
   console.log('THE' + this.name + 'SAYS' + this.sound + greeting1 + greeting2);
}

fish =  {
   sound: "no",
   name: "aaa"
}

var a = speak.bind(fish,greeting1, greeting2) ; 
 
a();