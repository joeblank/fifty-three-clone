const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server/server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('productsCtrl', () => {

  it('expect true to equal true', (done) => {
    expect(true).to.equal(true);
    done();
  })

  it('expect false to not equal true', (done) => {
    expect(false).to.not.equal(true);
    done();
  })

  it('should get all products', (done) => {
    chai.request(server)
    .get('/api/products')
    .end((err, res) => {
      consol.log(res.body);
      expect(res).to.be.ok;
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      expect(res.body[0].name).to.equal('Pencil');
    })
  })

  it('should get all cart items', (done) => {
    chai.request(server)
    .get('/api/cart')
    .end((err, res) => {
      console.log(res.body);
      expect(res).to.be.okay;
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      done();
    })
  })

})
