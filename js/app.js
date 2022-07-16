var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cat1.jpg');
  this.imgAttribution = ko.observable('flicker whatever');
  this.nickname = ["lindo","fofo","momo", "mimi"];
  this.level = ko.computed(function(){
    let mil = this.clickCount() <= 10 ? "Newborn" : this.clickCount() >= 20? "Infant":"Teen";
    return mil;
  },this)

};



var ViewModel = function (){
  var self = this;
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function (){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

};

ko.applyBindings(new ViewModel());
