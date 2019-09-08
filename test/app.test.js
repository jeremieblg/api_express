const request = require("supertest");
const app = require("../src/app.js");
describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    await expect(response.statusCode).toBe(200);
    // beforeEach(async () => {
    // });
  }, 30000);
});

afterAll(async done => {
  done();
});
