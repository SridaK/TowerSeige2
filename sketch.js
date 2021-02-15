const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    Poly = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(2000,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(300,300,500,20)
    ground2 = new Ground(1200,400,500,20)
    ground3 = new Ground(1000,580,2000,20)
    block1 = new Box(100,235,60,70)
    block2 = new Box(160,235,60,70)
    block3 = new Box(220,235,60,70)
    block4 = new Box(280,235,60,70)
    block5 = new Box(340,235,60,70)
    block6 = new Box(400,235,60,70)
    block7 = new Box(460,235,60,70)
    block8 = new Box(520,235,60,70)
    block9 = new Box(160,160,60,70)
    block10 = new Box(220,160,60,70)
    block11 = new Box(280,160,60,70)
    block12 = new Box(340,160,60,70)
    block13 = new Box(400,160,60,70)
    block14 = new Box(460,160,60,70)
    block15 = new Box(220,90,60,70)
    block16 = new Box(280,90,60,70)
    block17 = new Box(340,90,60,70)
    block18 = new Box(400,90,60,70)
    block19 = new Box(280,20,60,70)
    block20 = new Box(340,20,60,70)
    block21 = new Box(980,310,60,70)
    block22 = new Box(1040,310,60,70)
    block23 = new Box(1100,310,60,70)
    block24 = new Box(1160,310,60,70)
    block25 = new Box(1220,310,60,70)
    block26 = new Box(1280,310,60,70)
    block27 = new Box(1340,310,60,70)
    block28 = new Box(1400,310,60,70)
    block29 = new Box(1040,240,60,70)
    block30 = new Box(1100,240,60,70)
    block31 = new Box(1160,240,60,70)
    block32 = new Box(1220,240,60,70)
    block33 = new Box(1280,240,60,70)
    block34 = new Box(1340,240,60,70)
    block35 = new Box(1100,170,60,70)
    block36 = new Box(1160,170,60,70)
    block37 = new Box(1220,170,60,70)
    block38 = new Box(1280,170,60,70)
    block39 = new Box(1160,100,60,70)
    block40 = new Box(1220,100,60,70)


    ball = Bodies.circle(1600,200,20)
    World.add(world,ball)
    slingshot1 = new SlingShot(this.ball,{x:1600,y:300})
}

function draw(){
    background("white")
    Engine.update(engine)
    ground1.display()
    ground2.display()
    ground3.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()
    block26.display()
    block27.display()
    block28.display()
    block29.display()
    block30.display()
    block31.display()
    block32.display()
    block33.display()
    block34.display()
    block35.display()
    block36.display()
    block37.display()
    block38.display()
    block39.display()
    block40.display()


    imageMode(CENTER)
    image(Poly,ball.position.x,ball.position.y,40,40)
    slingshot1.display()

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot1.attach(this.ball)
    }
}