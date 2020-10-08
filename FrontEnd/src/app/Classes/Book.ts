

export class Book {

    bookID:number;
    title:string;
    author:string;
    genre:string;
    type:string;
    inventory:number;


    constructor(user_cli){
        this.bookID=user_cli.bookID;
        this.title=user_cli.title;
        this.author=user_cli.author;
        this.genre=user_cli.genre;
        this.type=user_cli.type;
        this.inventory=user_cli.inventory;
    }

    get_bookID(){
        return this.bookID;
    }

    get_title(){
        return this.title;
    }
    get_author(){
        return this.author;
    }

    get_inventory(){
        return this.inventory;

    }
    get_genre(){
        return this.genre;

    }

    get_type(){
        return this.type;
    }

    set_bookID(value){
        if(value<0)
            throw new Error('Book ID is not valid');
         
        this.bookID=value;

    }
    set_title(value){
        if(value<0)
            throw new Error('Title is not valid');
     
        this.title=value;
    }
    set_genre(value){
        if(value<0)
            throw new Error('Genre is not valid');
        this.genre=value;
    }

    set_author(value){
        if(value<0)
            throw new Error('Author not found');
        this.author=value;

    }
    set_type(value){
        if(value<0)
            throw new Error('Type is not valid');
        this.type=value;

    }

    set_inventory(value,value2,value3){
        if(value<0)
            throw new Error('Error no inventory found');
        this.inventory=value;
    }
    
    
}