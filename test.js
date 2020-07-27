unit testing:

//movies.spec.js
describe("Testing the movies API", () => {
  it("tests our testing framework if it works", () => {
  expect(2).toBe(2);
 });
});


Integration testing:

//movies.spec.js

const supertest = require('supertest');
const app = require('.../server');

describe("Testing the movies API", () => {
          it("tests the base route and returns true for status", async ()=> {

                        const response = await supertest(app).get('/');
                   
                        expect(response.status).toBe(200);
                        expect(response.body.status).toBe(true);
            });

});

end to end testing:

//movies.spec.js

....

   it("tests the post new movies endpoint and returns as successmessege",asyn() => {
         const response = await supertest(app).post('/movies').send({
                   title: 'New Movie',
                   sysnopsis: 'Synopsis of the new movie',
                   rating: 'PG'
         });

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('Success');
        expect(response.body.messege).toBe('Movies saved Successfully.');
    
   });
   
  afterEach(async () => {
            await Movies.deleteOne({
                        title: 'New Movie'
           })



