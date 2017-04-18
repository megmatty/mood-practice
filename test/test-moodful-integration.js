const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('GET endpoint', function() {
	// Before our tests run, we activate the server. Our `runServer`
  	// function returns a promise, and we return the that promise by
  	// doing `return runServer`.
	  before(function() {
	    return runServer();
	  });

	  // close our server at the end of these tests. Otherwise,
	  // if we add another test module that also has a `before` block
	  // that starts our server, it will cause an error because the
	  // server would still be running from the previous tests.
	  after(function() {
	    return closeServer();
	  });

	  //Test GET route to return 200 and html
	  it('should return status code 200 and HTML', function() {
	   return chai.request(app)
	      .get('/')
	      .then(function(res) {
	        res.should.have.status(200);
	        res.should.be.html;
	  });
	});
});