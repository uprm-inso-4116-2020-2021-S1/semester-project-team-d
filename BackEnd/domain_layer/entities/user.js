class User {
    // _userID;
    // _first_name;
    // _last_name; 
    // _username;
    // _password;
    // _email;
    // _listings;
    // _orders;
    // _street;
    // _city;
    // _zipcode;
    // _phone;

    constructor(id, first, last, username, email, password, phone) { 
        this.userID = id;
        this.first_name = first;
        this.last_name = last;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}

module.exports = User;