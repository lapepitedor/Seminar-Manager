export class Person{
    constructor(
        public id:number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public password: string,
        public canlogin: boolean
        
    ) {
    
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.canlogin = canlogin;
  
    }

}