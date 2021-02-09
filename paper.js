class paper{
    constructor(x,y,w,h,options){
    var options={
        isStatic:false,
        resitution:1,
        friction:1,
        density:1
    }
    this.image = loadImage("paper.png")
    this.options.addImage(this.image)
    this.paper = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.paper)
    }
}