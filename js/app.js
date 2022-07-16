var ViewModel = function (){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cat1.jpg');
  this.imgAttribution = ko.observable('flicker whatever');
  this.level = ko.computed(function(){
    let mil = this.clickCount() <= 10 ? "Newborn" : this.clickCount() >= 20? "Infant":"Teen";
    return mil;
  },this);
  this.incrementCounter = function (){
    this.clickCount(this.clickCount() + 1);
  };
  this.nickname = ["lindo","fofo","momo", "mimi"]

};

ko.applyBindings(new ViewModel());
