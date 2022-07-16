var initialCats = [
{clickCount:0,
name:"Tabby",
imgSrc:'img/cat1.jpg',
imgAttribution:'flicker whatever',
nickname:["piromba1","fofo","momo", "mimi"]
},
{clickCount:0,
name:"Pity",
imgSrc:'img/cat2.jpg',
imgAttribution:'flicker whatever',
nickname:["piromba2","fofo","momo", "mimi"]
},{clickCount:0,
name:"cat3",
imgSrc:'img/cat3.jpg',
imgAttribution:'flicker whatever',
nickname:["piromba3","fofo","momo", "mimi"]
},{clickCount:0,
name:"cat4",
imgSrc:'img/cat4.jpg',
imgAttribution:'flicker whatever',
nickname:["piromba4","fofo","momo", "mimi"]
},{clickCount:0,
name:"Cat5",
imgSrc:'img/cat5.jpg',
imgAttribution:'flicker whatever',
nickname:["piromba5","fofo","momo", "mimi"]
}
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickname = ko.observableArray(data.nickname);
  this.level = ko.computed(function(){
    let mil = this.clickCount() <= 10 ? "Newborn" : this.clickCount() >= 20? "Infant":"Teen";
    return mil;
  },this)

};



var ViewModel = function (){
  var self = this;
  this.catList = ko.observableArray([]);
initialCats.forEach(function(catItem){
  self.catList.push(new Cat(catItem));
});
  this.currentCat = ko.observable(this.catList()[0]);
  this.incrementCounter = function (){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  },
  this.changeCurrentCat = function(clickedCat){
   self.currentCat(clickedCat);
   console.log(clickedCat);
  };

};

ko.applyBindings(new ViewModel());
