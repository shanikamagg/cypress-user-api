
const RANDOM_ID = Cypress._.random(0, 100);
const id = RANDOM_ID
const username = "Mark123";
const firstName = "Mark" 
const lastName = "Doe" 
const email = `user${Math.floor(Math.random() * 100000)}@gmail.com`;
const password = "12345@"
const phone = "123456789"

//Request body of User Post Request
export const REQUEST_BODY = [
   {
     id: id,
     username: username,
     firstName: firstName,
     lastName:lastName ,
     email: email,
     password: password,
     phone: phone,
     userStatus: 0,
   },
 ];
  