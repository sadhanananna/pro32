const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var score=0;

function setup(){
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
    box1 = new Greenbox(300,275);
    box2 = new Yellowbox(330,275);
    box3 = new Greenbox(360,275);
    box4 = new Redbox(390,275);
    box5 = new Greenbox(420,275);
    box6 = new Redbox(450,275);

    box7 = new Bluebox(480,275);

    box8 = new Redbox(330,235);
    box9 = new Greenbox(360,235);
    box10 = new Redbox(390,235);
    box11 = new Greenbox(420,235);
    box12 = new Yellowbox(450,235);


    box13 = new Redbox(360,195);
    box14 = new Yellowbox(390,195);
    box15 = new Greenbox(420,195);
    box16 = new Greenbox(390,155);

  
    box17 = new Redbox(640,175);
    box18 = new Greenbox(670,175);

    box19 = new Bluebox(700,175);
    box20 = new Yellowbox(730,175);
    box21 = new Greenbox(760,175);

    box22 = new Redbox(670,135);
    box23 = new Greenbox(700,135);
    box24 = new Yellowbox(730,135);

    box25 = new Bluebox(700,95);
    
    ball = new Ball(50,200,20);

    spring = new Projectile(ball.body,{x:100,y:200});

}


function draw(){
    background(247,233,178);
    Engine.update(engine);

    text("SCORE :"+score,650,40);
    debug:true;

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    ball.display();
    spring.display();
    
    ground.display();
  stand1.display();
  stand2.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();

}
function KeyPressed(){
  if(keycode === 32){
    spring.attach(this.polygon.body);
  }
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    spring.release();
  }