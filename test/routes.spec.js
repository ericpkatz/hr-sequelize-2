var app = require('supertest')(require('../app'));
var expect = require('chai').expect;
var seed = require('./seed');

describe('Routes', function(){
    beforeEach(function(done){
        seed()
            .then(function(){
                done();
            });
        
    });
    describe('/Departments', function(){
        it('returns 3 departments', function(done){
            app.get('/departments')
                .expect(200)
                .end(function(err, resp){
                    if(err)
                        return done(err);
                    expect(resp.body.length).to.equal(3);
                    done();
                });
        });
    }); 
});

/* 

it('returns the JSON of the article based on the id', function (done) {
            agent
                .get('/articles/' + article._id)
                .expect(200)
                .expect(function (res) {
                    if (typeof res.body === 'string') {
                        res.body = JSON.parse(res.body);
                    }
                    expect(res.body.title).to.equal('Second Article');
                })
                .end(done);
        });
        
*/