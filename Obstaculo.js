class Obstaculo{

    constructor(HTMLElement) {

        this.domElement = HTMLElement
        }



        
    getLeft(){
        return this.domElement.getBoundingClientRect().left
    }
  
    getRight(){
        return this.domElement.getBoundingClientRect().left + this.getWidth();
      }

    getTop(){
        return this.domElement.getBoundingClientRect().top
    }

    getBottom(){
        return this.domElement.getBoundingClientRect().top - this.getHeight();
    }

    

    getHeight(){
        return this.domElement.getBoundingClientRect().height
    }

    getWidth(){
        return this.domElement.getBoundingClientRect().width
    }

    movement(){
        
        if(this.left > 0 ){
            this.domElement.style.animation = "movement 2s linear";
            
        }
    }





}