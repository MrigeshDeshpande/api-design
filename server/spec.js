var app = require('./serve');
var request = require('supertest');
var expect = require('chai').expect;
const { response } = require('express');
const e = require('express');

//Todo - make test for the crud routes (CREATE, UPDATE,DELETE,PUT,GET ONE)

//GET ALL
describe('[TIGERS]', () => {
    it('should get all tigers', function (done) {
        request(app)
            .get('/tigers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            /**
             * .expect method belongs to request ->which is supertest
             * super-test has a .expect method
             */
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            })
        /**
         * this is expect from chai, 
         * this was a function called expect and above was a method called expect
         * Chai is an assertion library, specidically made for test
         * you can use use either (Expect/Should/Assert) -->all do the same thing with different syntax
         * supertest handle the http stuffs -->calling server
         * mocha is handling stuffs like DESCRIBE  , IT 
         *  -->mocha is actually running the test giving globals like describe and it 
         * 
         * chai -->make all assetions
         * mocha --> run the test(describe , it -->basically structure, A testing framework)
         * supertest-->calls the server
         * 
         * mocha needs to be installed as global .
         * This test file will crash when run against node
         * npm i -g mocha then mocha ____.js
         * 
         * documentation for using supertest: https://github.com/ladjs/supertest
         */
    });
});


//CREATE
it('should create a new tiger', (done) => {
    var tiger = {
        name: 'Mufasa',
        age: 30,
        pride: 'Evil tiger',
        gender: 'male'
    }

    request(app)
        .post('/tigers')
        .send(tiger)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err)
                return done(err)
            else
                var mufasa = res.body;
            expect(mufasa).to.be.an('object');
            done();
        })
});


//UPDATE

it('should update a tiger', (done) => {
    request(app)
        .post('/tigers')
        .send({
            name: 'test tiger',
            age: 100,
            pride: 'test tiger',
            gender: 'female'
        })
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err)
                return done(err)
            else
                var tiger = res.body;
            request(app)
                .put('/tigers/' + tiger.id)
                .send({
                    name: 'new tiger'
                })
                .end((err, res) => {
                    expect(res.body.name).to.eql('new tiger');
                    done();
                });
        });
})

//DELETE

it('should delete a tiger', function (done) {
    request(app)
        .post('/tigers')
        .send({
            name: 'test tiger',
            age: 100,
            pride: 'test tiger',
            gender: 'female'
        })
        .set('Accept', 'application/json')
        .end(function (err, resp) {
            var tiger = resp.body;
            request(app)
                .del('/tigers/' + tiger.id)
                .end(function (err, resp) {
                    expect(resp.body).to.eql(tiger);
                    done();
                });
        })
});


