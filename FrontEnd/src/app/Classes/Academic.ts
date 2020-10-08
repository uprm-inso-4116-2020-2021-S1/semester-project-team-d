
import {Book} from "./Book";

class Academic extends Book{

    bookID:number; 
    faculty:string[20];
    department:string[20];
    courseID:string[8];
    edition:number;

    constructor(user_cli){
        super(user_cli);
        this.faculty=user_cli.faculty;
        this.department=user_cli.department;
        this.courseID=user_cli.courseID;
        this.edition=user_cli.edition;
       
    }
    get_faculty(){
        return this.faculty;
    }
    get_department(){
        return this.department;
    }
    get_courseID(){
       return this.courseID;
    }
    get_edition(){
      return this.edition;
    }
    set_faculty(value){
        if(value<0)
            throw new Error('Faculty name not valid');
        this.faculty=value;
    }
    set_department(value){
        if(value<0)
            throw new Error('Department name not valid');
        this.department=value;
    } 
    set_courseID(value){
        if(value<0)
            throw new Error('CourseID not valid');
        this.courseID=value;
    }
    set_edition(value){
        if(value<0)
            throw new Error('Edition not validfound');
        this.edition=value;
    }

}