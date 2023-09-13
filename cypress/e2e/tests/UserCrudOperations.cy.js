import {REQUEST_BODY} from '../constants'

describe("User CRUD Operations",() =>{
  
  /*
    Create User
    API Type - POST
  */ 
  it('POST API - Create a user and assert the response body', () => {
      cy.request({
          method: 'POST',
          url: `${Cypress.env('baseUrl')}/createWithList`,
          body:  REQUEST_BODY,
          headers: {
            'Content-Type': 'application/json',
          }
      }).then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(200)
        expect(res.body).has.property("message","ok")

      })
  })

  /*
    Get User Details
    API Type - GET
  */ 
  it('GET API - Get the user and assert the response Body', () => {
        cy.request({
          method: 'GET',
          url: `${Cypress.env('baseUrl')}/Mark123`,
          headers: {
            'Content-Type': 'application/json',
          }
          })
          .then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).has.property("username","Mark123")
            expect(res.body).has.property("firstName","Mark")
            expect(res.body).has.property("lastName","Doe")

          })


      })
      
   /*
      Delete User Details
      API Type - DELETE
    */ 
    it('DELETE API - Delete the user and assert the response body', () => {
        cy.request({
          method: 'DELETE',
          url: `${Cypress.env('baseUrl')}/Mark123`,
          headers: {
            'Content-Type': 'application/json',
          }
          })
          .then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).has.property("message","Mark123")
          })


      })

         

});