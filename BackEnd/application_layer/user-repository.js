const UserFactory  = require('../domain_layer/factories/user-factory');

// Must use the 'await' keyword to correctly use these functions.
const { getOrders } = require('../infrastructure/ordersDAO');
const userDAO = require('../infrastructure/userDAO');
const { getUser, registerUser, updateInfo, getListings, getHoldings }  = require('../infrastructure/userDAO')

// Asynchronous wrapper functions.
function getByUsername(username) {
    return getUser(username, "username")
}

function getByEmail(email) {
    return getUser(email, "email")
}

// Repository functions.
async function login(req, res) {
  // Request will be a JSON with fields 'credential' && 'password'.
  let login = req.body, 
      user;

  // If credential has '@' then getByEmail(credential)
  let credential = login["credential"];
  if (credential.includes("@"))
    user = await getByEmail(credential);

  // Else then getByUsername(credential).
  else
    user = await getByUsername(credential);
    
  // If 'user' is null then res returns -1. (User doesn't exist)
  if(!user){
    res.send({uuid: -1})
    return
  }

  // If user[password] == req[password] then res returns 0. (Passwords match)
  if(user["password"] === login["password"]){
    res.send({uuid: user["userID"]});
  }

  // Else then res returns -2. (Unsuccesful validation)
  else
    res.send({uuid: -2})
}

async function register(req, res) {
    let user = UserFactory.createUser(req.body),
        code = await registerUser(user);
        
    res.send({exit_code: code});
}

// Returns users orders, listings, and holdings.
async function getItems(req, res) {
    let uuid = req.query.id;
    
    // Uses getOrders(userID), getHoldings(userID), & getListings(userID)
    let books = {
      listings: await userDAO.getListings(uuid),
      orders: await userDAO.getOrders(uuid),
      holdings: await userDAO.getHoldings(uuid)
    }
    
    res.send(books);
}

async function updateUserInfo(req, res) {
    // Uses updateInfo()
    res.send({passed: "test"});
}

async function requestBook(req, res) {
  bookID = req.body["bookID"]
  uuid = req.body["uuid"]

  await userDAO.addBooktoOrders(bookID, uuid);

  res.send("Book Added Successfully!");
}

module.exports = {
    login,
    register,
    getItems,
    updateUserInfo,
    requestBook
}