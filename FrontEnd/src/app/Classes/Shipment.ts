
import { User } from "./User";
import {Book} from "./Book";


class Shipment extends User {
    //import bookID
    //import userID
    bookID:number;
    chargeCardTime:string; //it suppose to be a date and time thingie, need a bit of more info.
    packingTime: string;
    shipmentOrderDate: string;

    constructor(user_cli){
        super(user_cli);
        this.chargeCardTime=user_cli.chargeCardTime;
        this.packingTime=user_cli.department;
        this.shipmentOrderDate=user_cli.courseID;
        this.bookID=user_cli.bookID;
        
    }
    get_chargeCardTime(){
        return this.chargeCardTime;
    }
    get_packingTime(){
        return this.packingTime;
    }
    get_shipmentOrder(){
       return this.shipmentOrderDate;
    }
    
    set_chargeCardTime(value){
        if(value<0)
            throw new Error('Faculty name not valid');
        this.chargeCardTime=value;
    }
    set_packingTime(value){
        if(value<0)
            throw new Error('Department name not valid');
        this.packingTime=value;
    } 
    set_shipmentOrder(value){
        if(value<0)
            throw new Error('CourseID not valid');
        this.shipmentOrderDate=value;
    }
    
    
}

var chargeCardTime1=new Date("Oct 9 2020 12:30");