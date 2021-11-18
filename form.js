/*class Form
{
    constructor(){
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME");
        this.button = createButton("Start");
        this.greeting = createElement("h2");
       this.button2 = createButton("Play");
       this.Abutton = createButton("Next");
       this.Bbutton = createButton("Next");
       this.Cbutton = createButton("Next");
       this.Dbutton = createButton("Next");
       this.Ebutton = createButton("Next");
       this.Fbutton = createButton("Next");
       this.greeting2 = createElement('h2');
       this.OK = createButton('OK');
    }

    elementPositions() {
        this.input.position(width/2-100, height/2-100);
        this.button.position(width/2-85, height/2-20);
        this.greeting.position(width/2-100, height/2-100);
        this.greeting2.position();
        this.OK.position();
    }

    elementStyles() {
        this.input.class("customInput");
        this.button.class("customButton");
        this.button2.class("customButton");
        this.Abutton.class("customButton");
        this.Bbutton.class("customButton");
        this.Cbutton.class("customButton");
        this.Dbutton.class("customButton");
        this.Ebutton.class("customButton");
        this.Fbutton.class("customButton");
        this.OK.class('customButton');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.button2.hide();
        this.OK.hide();
        this.greeting2.hide();
    }

    handleMousePressed(){
        this.button.mousePressed(() => {
           this.input.hide();
            this.button.hide();
            var message  = `
            Welcome ${this.input.value()} 
            </br>You will go through the learning journey
            </br>Then check your results by attending the quiz
            </br>HAPPY LEARNING!`
           this.greeting.position(width/2-100, height/2-100);
            this.button2.position(width/2-35, height/2+100);
            this.greeting.html(message);
        });

        this.button2.mousePressed(() => {
            form.hide();

            this.A = createImg("assets/A.png");
            this.A.position(width/2-200, height/2-350);
            this.A.size(400, 400);
            
            this.apple = createImg("assets/apple.png");
            this.apple.position(this.A.x, height/2-50);
            this.apple.size(400, 400);
        
            this.Abutton.position(width-200, height-70);
           
        });

        this.Abutton.mousePressed(() => {
            this.A.hide();
            this.apple.hide();

            this.B = createImg("assets/B.png");
            this.B.position(width/2-200, height/2-350);
            this.B.size(400, 400);
            
            this.ball = createImg("assets/ball.png");
            this.ball.position(this.B.x+50, height/2+50);
            this.ball.size(250, 250);
        
            
            this.Bbutton.position(width-200, height-70);
        });        

        this.Bbutton.mousePressed(() => {
            this.B.hide();
            this.ball.hide();

            this.C = createImg("assets/C.png");
            this.C.position(width/2-200, height/2-350);
            this.C.size(400, 400);
            
            this.cat = createImg("assets/cat.png");
            this.cat.position(this.C.x, height/2-45);
            this.cat.size(400, 400);
        
            
            this.Cbutton.position(width-200, height-70);

        });

        this.Cbutton.mousePressed(() => {
            this.C.hide();
            this.cat.hide();

            this.D = createImg("assets/D.png");
            this.D.position(width/2-200, height/2-350);
            this.D.size(400, 400);
            
            this.dog = createImg("assets/dog.png");
            this.dog.position(this.D.x-100, height/2-50);
            this.dog.size(700, 450);
        
            
            this.Dbutton.position(width-200, height-70);

        });

        this.Dbutton.mousePressed(() => {
            this.D.hide();
            this.dog.hide();

            this.E = createImg("assets/E.png");
            this.E.position(width/2-200, height/2-350);
            this.E.size(400, 400);
            
            this.egg = createImg("assets/egg.png");
            this.egg.position(this.E.x+50, height/2+10);
            this.egg.size(250, 250);
        
            
            this.Ebutton.position(width-200, height-70);

        });

        this.Ebutton.mousePressed(() => {
            this.E.hide();
            this.egg.hide();

            this.F = createImg("assets/F.png");
            this.F.position(width/2-200, height/2-350);
            this.F.size(400, 400);
            
            this.fish = createImg("assets/fish.png");
            this.fish.position(this.F.x, height/2-10);
            this.fish.size(300, 300);
        
            
            this.Fbutton.position(width-200, height-70);

        });

        this.Fbutton.mousePressed(() => {
            this.F.hide();
            this.fish.hide();

            gameState=1;

            drawSprites();
    
        });

        
    }

display(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed();

}


}


/*
}*/

class Form
{
    constructor(){
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME");
        this.button = createButton("Start");
        this.greeting = createElement("h2");
       this.button2 = createButton("Play");
       this.Abutton = createButton("Next");
       this.Bbutton = createButton("Next");
       this.Cbutton = createButton("Next");
       this.Dbutton = createButton("Next");
       this.Ebutton = createButton("Next");
       this.Fbutton = createButton("Next");
       this.greeting2 = createElement("h2");
       this.OK = createButton("OK");
       this.Gbutton = createButton("Next");
       this.Hbutton = createButton("Next");
       this.Ibutton = createButton("Next");
       this.Jbutton = createButton("Next");
       this.Kbutton = createButton("Next");
       this.Lbutton = createButton("Next");
       this.Mbutton = createButton("Next");
       this.Nbutton = createButton("Next");
       this.Obutton = createButton("Next");
       this.Pbutton = createButton("Next");
       this.Qbutton = createButton("Next");
       this.Rbutton = createButton("Next");
       this.Sbutton = createButton("Next");
       this.Tbutton = createButton("Next");
       this.Ubutton = createButton("Next");
       this.Vbutton = createButton("Next");
       this.Wbutton = createButton("Next");
       this.Xbutton = createButton("Next");
       this.Ybutton = createButton("Next");
       this.Zbutton = createButton("Next");

    }

    elementPositions() {
        this.input.position(width/2-100, height/2-100);
        this.button.position(width/2-85, height/2-20);
        this.greeting.position(width/2-100, height/2-100);
    }

    elementStyles() {
        this.input.class("customInput");
        this.button.class("customButton");
        this.button2.class("customButton");
        this.Abutton.class("customButton");
        this.Bbutton.class("customButton");
        this.Cbutton.class("customButton");
        this.Dbutton.class("customButton");
        this.Ebutton.class("customButton");
        this.Fbutton.class("customButton");
        this.OK.class("customButton");
        this.Gbutton.class("customButton");
        this.Hbutton.class("customButton");
        this.Ibutton.class("customButton");
        this.Jbutton.class("customButton");
        this.Kbutton.class("customButton");
        this.Lbutton.class("customButton");
        this.Mbutton.class("customButton");
        this.Nbutton.class("customButton");
        this.Obutton.class("customButton");
        this.Pbutton.class("customButton");
        this.Qbutton.class("customButton");
        this.Rbutton.class("customButton");
        this.Sbutton.class("customButton");
        this.Tbutton.class("customButton");
        this.Ubutton.class("customButton");
        this.Vbutton.class("customButton");
        this.Wbutton.class("customButton");
        this.Xbutton.class("customButton");
        this.Ybutton.class("customButton");
        this.Zbutton.class("customButton");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.button2.hide();
    }

    handleMousePressed(){
        this.button.mousePressed(() => {
           this.input.hide();
            this.button.hide();
            var message  = `
            Welcome ${this.input.value()} 
            </br>You will go through the learning journey
            </br>Then check your results by attending the quiz
            </br>HAPPY LEARNING!`
           this.greeting.position(width/2-100, height/2-100);
            this.button2.position(width/2-35, height/2+100);
            this.greeting.html(message);
        });

        this.button2.mousePressed(() => {
            form.hide();

            this.A = createImg("assets/A.png");
            this.A.position(width/2-200, height/2-350);
            this.A.size(400, 400);
            
            this.apple = createImg("assets/apple.png");
            this.apple.position(this.A.x, height/2-50);
            this.apple.size(400, 400);
        
            this.Abutton.position(width-200, height-70);
           
        });

        this.Abutton.mousePressed(() => {
            this.A.hide();
            this.apple.hide();

            this.B = createImg("assets/B.png");
            this.B.position(width/2-200, height/2-350);
            this.B.size(400, 400);
            
            this.ball = createImg("assets/ball.png");
            this.ball.position(this.B.x+50, height/2+50);
            this.ball.size(250, 250);
        
            
            this.Bbutton.position(width-200, height-70);
        });        

        this.Bbutton.mousePressed(() => {
            this.B.hide();
            this.ball.hide();

            this.C = createImg("assets/C.png");
            this.C.position(width/2-200, height/2-350);
            this.C.size(400, 400);
            
            this.cat = createImg("assets/cat.png");
            this.cat.position(this.C.x, height/2-45);
            this.cat.size(400, 400);
        
            
            this.Cbutton.position(width-200, height-70);

        });

        this.Cbutton.mousePressed(() => {
            this.C.hide();
            this.cat.hide();

            this.D = createImg("assets/D.png");
            this.D.position(width/2-200, height/2-350);
            this.D.size(400, 400);
            
            this.dog = createImg("assets/dog.png");
            this.dog.position(this.D.x-100, height/2-50);
            this.dog.size(700, 450);
        
            
            this.Dbutton.position(width-200, height-70);

        });

        this.Dbutton.mousePressed(() => {
            this.D.hide();
            this.dog.hide();

            this.E = createImg("assets/E.png");
            this.E.position(width/2-200, height/2-350);
            this.E.size(400, 400);
            
            this.egg = createImg("assets/egg.png");
            this.egg.position(this.E.x+50, height/2+10);
            this.egg.size(250, 250);
        
            
            this.Ebutton.position(width-200, height-70);

        });

        this.Ebutton.mousePressed(() => {
            this.E.hide();
            this.egg.hide();

            this.F = createImg("assets/F.png");
            this.F.position(width/2-200, height/2-350);
            this.F.size(400, 400);
            
            this.fish = createImg("assets/fish.png");
            this.fish.position(this.F.x, height/2-10);
            this.fish.size(300, 300);
        
            
            this.Fbutton.position(width-200, height-70);

        });

        this.Fbutton.mousePressed(() => {
            this.F.hide();
            this.fish.hide();

            gameState=1;

            drawSprites();
    
        });
    }

display(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed();

}

handleMousePressed1(){
    var message2  = `
            GOOD JOB ${this.input.value()} 
            </br>Lets continue our learning journey
            </br>HAPPY LEARNING!`
    this.greeting2.position(width-2/100, height/2-100);
    this.greeting2.html(message2);

    this.OK.position(width/2-85, height/2-20);

    this.OK.mousePressed(() => {
        /*this.Ok.hide();
        this.greeting2.hide();*/
    this.G = createImg("assets/G.png");
            this.G.position(width/2-200, height/2-350);
            this.G.size(400, 400);
            
            this.gorilla = createImg("assets/gorilla.png");
            this.gorilla.position(this.G.x, height/2-50);
            this.gorilla.size(400, 400);
        
            this.Gbutton.position(width-200, height-70);
           
    });

   this.Gbutton.mousePressed(() => {
        this.G.hide();
        this.gorilla.hide();
        this.H = createImg("assets/H.png");
                this.H.position(width/2-200, height/2-350);
                this.H.size(400, 400);
                
                this.hat = createImg("assets/hat.png");
                this.hat.position(this.H.x, height/2-50);
                this.hat.size(400, 400);
            
                this.Hbutton.position(width-200, height-70);
               
        });

        this.Hbutton.mousePressed(() => {
            this.H.hide();
            this.hat.hide();
            this.I = createImg("assets/I.png");
                    this.I.position(width/2-200, height/2-350);
                    this.I.size(400, 400);
                    
                    this.igloo = createImg("assets/igloo.png");
                    this.igloo.position(this.I.x, height/2-50);
                    this.igloo.size(400, 400);
                
                    this.Ibutton.position(width-200, height-70);
                   
            });

            this.Ibutton.mousePressed(() => {
                this.I.hide();
                this.igloo.hide();
                this.J = createImg("assets/J.png");
                        this.J.position(width/2-200, height/2-350);
                        this.J.size(400, 400);
                        
                        this.jug = createImg("assets/jug.png");
                        this.jug.position(this.J.x, height/2-50);
                        this.jug.size(400, 400);
                    
                        this.Jbutton.position(width-200, height-70);
                       
                });  
            
                this.Jbutton.mousePressed(() => {
                    this.J.hide();
                    this.jug.hide();
                    this.K = createImg("assets/K.png");
                            this.K.position(width/2-200, height/2-350);
                            this.K.size(400, 400);
                            
                            this.kite = createImg("assets/kite.png");
                            this.kite.position(this.G.x, height/2-50);
                            this.kite.size(400, 400);
                        
                            this.Kbutton.position(width-200, height-70);
                           
                    });    

                    this.Kbutton.mousePressed(() => {
                        this.K.hide();
                        this.kite.hide();
                        this.L = createImg("assets/L.png");
                                this.L.position(width/2-200, height/2-350);
                                this.L.size(400, 400);
                                
                                this.lion = createImg("assets/lion.png");
                                this.lion.position(this.L.x, height/2-50);
                                this.lion.size(400, 400);
                            
                                this.Lbutton.position(width-200, height-70);
                               
                        });

                        this.Lbutton.mousePressed(() => {
                            this.L.hide();
                            this.lion.hide();

                            gameState = 3;
                            drawSprites();
                        });
                    }

display1(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed1();
} 

}