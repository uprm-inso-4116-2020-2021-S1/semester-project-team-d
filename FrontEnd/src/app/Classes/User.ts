
import {Info} from "./Info";
export class User implements Info{

    userID: number;
    FirstName:string[50];
    LastName:string[50]
    password:string[255]
    email:string[50]
    listings:[]; //list of Books
    street:string[50];
    city:string[50];
    zipcode:string[6];
    phone:string[10];
    orders:[];//Order listing
    bookID;



    // constructor(userID,FirstName,LastName,password,email,listings,street,city,zipcode,phone,orders){
        
    //     this.userID=userID;
    //     this.FirstName=FirstName;
    //     this.LastName=LastName;
    //     this.password=password;
    //     this.email=email;
    //     this.listings=listings;
    //     this.street=street;
    //     this.city=city;
    //     this.zipcode=zipcode
    //     this.phone=phone
    //     this.orders=orders;
    // }
    constructor(client){
        this.userID=client.userID;
        this.FirstName=client.FirstName;
        this.LastName=client.LastName;
        this.password=client.password;
        this.email=client.email;
        this.listings=client.listings;
        this.street=client.street;
        this.city=client.city;
        this.zipcode=client.zipcode
        this.phone=client.phone
        this.orders=client.orders;
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
        return this.password

    }
    get_email(){
        return this.email;

    }

    get_address(){
        return [this.street,this.city,this.zipcode];

    }
    get_phone(){
        return this.phone;
    }

    

    set_userID(value){
        if(value<0)
            throw new Error('ID is not valid');
         
        this.userID=value;

    }
    set_FirstName(value){
        if(value<0)
            throw new Error('First name is not valid');
     
        this.FirstName=value;
    }
    set_LastName(value){
        if(value<0)
            throw new Error('Last name is not valid');
        this.LastName=value;
    }

    set_password(value){
        if(value<0)
            throw new Error('Password is not valid');
        this.password=value;

    }
    set_email(value){
        if(value<0)
            throw new Error('Email is not valid');
        this.email=value;

    }

    set_address(value,value2,value3){
        if(value<0 || value2<0 || value3<0)
            throw new Error('Address is not valid');
        this.street=value;
        this.city=value2;
        this.zipcode=value3;

    }
    set_phone(value){
        if(value<0)
            throw new Error('Phone number is not valid');
        this.phone=value;
    }

    //Functions for later
    // get_orders(){

    // }

    // get_listings(){
        
    // }
}