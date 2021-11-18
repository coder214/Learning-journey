class Journey{
    constructor(){
        this.score = 0;
    }
    start(){
        this.showBar();
        this.collectAlphabets();
        this.spawnAlphabets(aImg);
        this.spawnAlphabets(bImg);
        this.spawnAlphabets(cImg);
        this.spawnAlphabets(dImg);
        this.spawnAlphabets(eImg);
        this.spawnAlphabets(fImg);
    }

    start1(){
        this.showBar();
        this.collectAlphabets();
        this.spawnAlphabets(gImg);
        this.spawnAlphabets(hImg);
        this.spawnAlphabets(iImg);
        this.spawnAlphabets(jImg);
        this.spawnAlphabets(kImg);
        this.spawnAlphabets(lImg);
    }

    spawnAlphabets(img){
        if (frameCount%60===0){
        var alphabets = createSprite(random(0,width), 20);   
        alphabets.addImage(img);
        alphabets.velocityY = 10;
        alphabets.scale = 0.5;
        alphabetsGroup.add(alphabets);
        }
        
    }

    showBar(){
        push();
        fill("white");
        rect(width-400, 30, 200, 10);
        fill("red");
        rect(width-400, 30, this.score, 10);
        pop();
    }

    collectAlphabets(){
       if(basket.overlap(alphabetsGroup, this.destroyAlphabet) == true){
        this.score += 10;
       }

       if(this.score == 200){
           gameState = 2;
           basket.destroy(); 
           alphabetsGroup.destroyEach();
           
       }
    }
   
    destroyAlphabet(basket, alphabet){
        alphabet.remove();
        return true;
    }
}