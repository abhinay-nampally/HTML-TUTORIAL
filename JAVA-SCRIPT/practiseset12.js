let DATA="some secret information";
class user{
    constructor(name,mail){
        this.name=name;
        this.mail=mail;

    }
    viewData(){
        console.log("data=",DATA);
    }

}
class admin extends user{
    constructor(name,mail){
        super(name,mail);
        // this.name=name;
        // this.mail=mail;


    }
    editData(){
        DATA="new information added";

    }

}

let student1= new user("Abhinay Nampally","abhinaynampally3889@gmail.com");
let student2=new user("Pupalla Sai Kumar ","saikumarpupalla@gmail.com");
let student3=new user("Golla Ramesh","rameshchintu@gmail.com");
let admin1=new user("principal","principal@gmail.com");