
import {Book} from "./Book";

class Recreational extends Book{
    //import the bookid
    volume:number;
    genre:string[50];

    constructor(user_cli){
        super(user_cli);
        this.volume=user_cli.volume;
        this.genre=user_cli.genre;
       
    }
    get_volume(){
        return this.volume;
    }

    get_genre(){
        return this.genre;
    }

    set_volume(value){
        if(value<0)
            throw new Error('Error no inventory found');
        this.volume=value;
    }
    set_genre(value){
        if(value<0)
            throw new Error('Error no inventory found');
        this.genre=value;
    } 
}