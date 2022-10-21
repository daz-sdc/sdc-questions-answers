const app = require('./index.js');
const request = require('supertest')

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});


describe('get /qa', ()=> {
  test('It should return 3 reviews when count is equal 3', ()=>{
    return request(app).get('/qa')
      .query({product_id:1, count:3})
      .then(response => {
        expect(response.body.results.length).toBe(3);
      });
  })
})

describe('post /qa', () => {
  test('should send status code 200', ()=>{
    return request(app).post('/qa')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
})


describe('put /qa report', () => {
  test('should send status code 200', ()=>{
    return request(app).put('/qa/1/report')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
})

describe('put /qa helpful', () => {
  test('should send status code 200', ()=>{
    return request(app).put('/qa/1/helpful')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
})