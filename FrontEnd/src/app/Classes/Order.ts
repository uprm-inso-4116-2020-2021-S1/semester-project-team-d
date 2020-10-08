import {User} from "./User";
import {Book} from "./Book";
import {Info} from "./Info";


class Order extends User implements Info{
    
    orderID:number;
    userID:number;
    to_state:string[];
    to_city:string[];
    to_street:string[];
    to_zip:string[];
    ship_date:string;
    bookID:number;
    //import bookid from BOOk

    constructor(client){
        super(client);
        this.orderID=client.orderID;
        this.to_state=client.to_state;
        this.to_street=client.to_street;
        this.to_city=client.to_city;
        this.to_zip=client.to_zip;
        this.ship_date=client.ship_date;
    }
    constructor2(userID,orderID,to_state,to_city,to_street,to_zip,ship_date,bookID){
        this.orderID=orderID;
        this.to_state=to_state;
        this.to_street=to_street;
        this.to_city=to_city;
        this.to_zip=to_zip;
        this.ship_date=ship_date;
        this.userID=userID;
        this.bookID=bookID;

    }

    get_userID(){
        return this.userID;
    }
    get_FirstName(){
        return this.FirstName;
    }
    get_LastName(){
        return this.LastName;
    }

    get_password(){
        return this.password;
    }
    get_to_state(){
        return this.to_state;
    }

    get_to_city(){
        return this.to_city;
    }
    get_to_street(){
       return this.to_street;
    }
    get_to_zip(){
       return this.to_zip
    }


}