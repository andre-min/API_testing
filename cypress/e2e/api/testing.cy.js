///<reference types="Cypress"/> 
import schema from '../../fixtures/schemas/list_users'
import Ajv from 'ajv';

describe('Testing API', () => {
  const apiUrl = Cypress.env('baseUrl');
  const userEmail = Cypress.env('loginEmail');
  const userPassword = Cypress.env('loginPassword');
  const userJob = Cypress.env('job');
  const userName = Cypress.env('name');

    it('Schema validation against response', () => {
        
        const apiUrl = Cypress.env('baseUrl');
        const ajv = new Ajv();
        cy.request('GET', `${apiUrl}/users?page=1`).then((response) => {
            expect(response.status).to.eq(200);

            const validate = ajv.compile(schema)

            const valid = validate(response.body);

            if (!valid) {
                console.log(validate.console.error());
            }
            expect(valid).to.be.true
        });
    });

    it('should list all users', () => {
      const apiUrl = Cypress.env('baseUrl');
      cy.request({
    
        method: 'GET',
        url: `${apiUrl}/users?page=1`, // Endpoint da API para listar usuários
      }).then((response) => {
        expect(response.status).to.eq(200); // Verifica se o status da resposta é 200 (OK)
        expect(response.body).to.have.property('data'); // Verifica se a resposta contém o campo 'data'
        expect(response.body.data[0].first_name).to.equal("George")
        cy.log(JSON.stringify(response.body)); // Exibe a resposta no log do Cypress
      });
    });

    it("Login successful", () => {
      cy.request({
          method: "POST",
          url: `${apiUrl}/login`,

          body: {
              email: userEmail,
              password: userPassword
          }
      }).then((response) => {
          expect(response.status).to.eq(200)
          cy.log(JSON.stringify(response.body))
      })

    })

    it("Register successful", () => {
      cy.request({
          method: "POST",
          url: `${apiUrl}/register`,

          body: {
              email: userEmail,
              password: userPassword
          }

      }).then((response) => {
          expect(response.status).to.eq(200)
          cy.log(JSON.stringify(response.body))
      })
    })

    it('should signup user', () => {

      // const apiUrl = Cypress.env('baseUrl');
      // const userName = Cypress.env('name');
      

      cy.request({
        method: 'POST',
        url: `${apiUrl}/users`, 
        body: {
            name: userName,
            job: userJob
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        const userId = response.body.id;
        cy.log(JSON.stringify(response.body));
        //cy.log(JSON.stringify(response.body.id))

        cy.request({
          method: "DELETE",
          url: `${apiUrl}/users/${userId}`,
        }).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(204)
        });
      });
    });

    it("Get user not found", () => {
        
      cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users/23', 
          failOnStatusCode: false 
        }).then((response) => {
          try {
              console.log(error)
          } catch {
              expect(response.status).to.eq(404); 
              cy.log(JSON.stringify(response.body));
          }
          
        });
  
   })

   it("Get user by id", () => {
    cy.request({
        method: "GET",
        url: `${apiUrl}/users/2`
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("data");
        expect(response.body.data.first_name).to.equal("Janet")
        expect(response.body.data.email).to.equal("janet.weaver@reqres.in")
        cy.log(JSON.stringify(response.body))
    })
  })

  it("Update user by id", () => {
    const apiUrl = Cypress.env("baseUrl")
    const userJob = Cypress.env('newJob');
    cy.request({
        method: "PUT",
        url: `${apiUrl}/users/29`,
        body: {
            job: userJob
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
    })
  })

});

