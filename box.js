class plane{
    constructor(x,y,w,h){
        var body = {
            resitution : 1
        }
        this.body = Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
    }
}