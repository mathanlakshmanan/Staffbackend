// const user = require('../models/Users');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../app');
// chai.should();

// chai.use(chaiHttp);

// describe("/get user", () => {
//     it("it should new GET a user", (done) => {
//       let user = {
//         email: "mathan@gmail.com",
//         password: "123456",
//       };
//       chai
//         .request(app)
//         .get("/api/user/login")
//         .send(user)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.data.should.be.a("object");
//           res.body.status.should.be.eql("success");
//           done();
//         });
//     });
//   });