 class tataCar{
    constructor(brand,mileage){
        console.log("this is the new veichle and object was created");
        this .brand=brand;
        this .mileage=mileage;

    }
    start(){
        console.log("start");
    };
    stop(){
        console.log("stop");
    };
    // setBrand(brand){
    //     this.brand=brand;
    // }

 };

 let fortuner=new tataCar("fortuner","10");
 //fortuner.setBrand("fortuner");
 let lexus=new tataCar("lexus","20");
 //lexus.setBrand("lexus");