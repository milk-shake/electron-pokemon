import * as assert from 'assert';
import * as chai from 'chai';

//TODO test predicate is allowable in wheres
//TODO test columname is a string
//TODO make query a spy and make sure it's called

class Query {
  constructor() {

  }
  getColumnNames() { return ['test'] }
  buildWhere() {}
  buildWhereBetween() {}
}

console.log(new Query().getColumnNames());

import Model from "../../js/lib/model.js";
Model.__Rewire__('Query', Query);

import TestModel from "./test.model";
TestModel.__Rewire__('Model', Model);


describe('Abstact Model', function() {
  it('Should throw an error if instantiated by itself', function() {
    chai.expect(() => { let m = new Model()}).to.throw(Error);
  });
});

describe('Model', function() {
  describe('Model.constructor', function() {
    it('Should throw an error if database name is not passed as an option', function() {
      chai.expect(() => { let m = new TestModel({}); }).to.throw(Error);
    });
  });
  describe('Model.where', function() {
    it('Should be a static function', function() {
      chai.expect(TestModel.where).to.be.a('function');
    });
    it('Should throw an error if no column name is passed', function() {
      chai.expect(() => { TestModel.where() }).to.throw(Error);
    });
    it('Should throw an error if no predicate is passed', function() {
      chai.expect(() => { TestModel.where('id') }).to.throw(Error);
    });
    it('Should throw an error if no value is passed', function() {
      chai.expect(() => { TestModel.where('id', '=')}).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = TestModel.where('id', '=', 1);
      chai.expect(model).to.be.an.instanceof(TestModel);
    });
  });
  describe('Model.whereBetween', function() {
    it('Should be a static function', function() {
      chai.expect(TestModel.whereBetween).to.be.a('function');
    });
    it('Should throw an error if no column name is passed', function() {
      chai.expect(() => { TestModel.whereBetween() }).to.throw(Error);
    });
    it('Should throw an error if no start value is passed', function() {
      chai.expect(() => { TestModel.whereBetween('id') }).to.throw(Error);
    });
    it('Should throw an error if no end value is passed', function() {
      chai.expect(() => { TestModel.whereBetween('id', '100')}).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = TestModel.whereBetween('id', '100', '200');
      chai.expect(model).to.be.an.instanceof(TestModel);
    });
  });
  describe('Model.find', function() {
    it('Should be a static function', function() {
      chai.expect(TestModel.find).to.be.a('function');
    });
    it('Should throw an error if no id is passed', function() {
      chai.expect(() => { TestModel.find() }).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = TestModel.find(1);
      chai.expect(model).to.be.an.instanceof(TestModel);
    });
  });
  describe('Model.getColumns', function() {
    it('Should return an array of column names', function() {
      let m = new TestModel();
      chai.expect(() => { m.getColumNames() }).to.throw(Error);
    });
  });
  describe('Model.with', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });
    it('Should throw an error if related model name is undefined', function() {
      chai.expect(() => { m.with() }).to.throw(Error);
    });
    it('Should throw an error if related model relationship is not defined on the model', function() {
      chai.expect(() => { m.with('null') }).to.throw(Error);
    });
    it('Should return itself', function() {
      let n = m.with('test');
      chai.expect(n).to.equal(m);
    });
  });
  describe('Model.has', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });

    it('Should throw an error if the first argument is not a function/class', function() {
      chai.expect(() => { m.has() }).to.throw(Error);
    });
    it('Should throw an error if the second argument is not defined', function() {
      chai.expect(() => { m.has(TestModel) }).to.throw(Error);
    });
    it('Should throw an error if the second argument is not a string', function() {
      chai.expect(() => { m.has(TestModel, 1) }).to.throw(Error);
    });
    it('Should throw an error if the third argument is not defined', function() {
      chai.expect(() => { m.has(TestModel, 'test') }).to.throw(Error);
    });
    it('Should throw an error if the third argument is not a string', function() {
      chai.expect(() => { m.has(TestModel, 'test', 1) }).to.throw(Error);
    });
    it('Should return an object containing the model, foreign column and root column', function() {
      let model = TestModel;
      let foreignColumn = 'test';
      let rootColumn = 'test_id';
      let returnedVal = m.has(model, foreignColumn, rootColumn);

      it('Should have a model property', function() {
        chai.expect(returnedVal).to.have.property('model');
      });
      it('Should be equal to the model passed in', function() {
        chai.expect(returnedVal.model).to.equal(model);
      });
      it('Should have a onColumn property', function() {
        chai.expect(returnedVal).to.have.property('onColumn');
      });
      it('Should be equal to the foreign column passed in', function() {
        chai.expect(returnedVal.onColumn).to.equal(foreignColumn);
      });
      it('Should have a rootColumn property', function() {
        chai.expect(returnedVal).to.have.property('rootColumn');
      });
      it('Should be equal to the root column passed in', function() {
        chai.expect(returnedVal.rootColumn).to.equal(rootColumn);
      });
    });
  });
  describe('Model.orWhereBetween', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });

    it('Should throw an error if no column name is passed', function() {
      chai.expect(() => { m.orWhereBetween() }).to.throw(Error);
    });
    it('Should throw an error if no start value is passed', function() {
      chai.expect(() => { m.orWhereBetween('id') }).to.throw(Error);
    });
    it('Should throw an error if no end value is passed', function() {
      chai.expect(() => { m.orWhereBetween('id', '100')}).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = m.orWhereBetween('id', '100', '200');
      chai.expect(model).to.equal(m);
    });
  });
  describe('Model.andWhereBetween', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });
    it('Should throw an error if no column name is passed', function() {
      chai.expect(() => { m.andWhereBetween() }).to.throw(Error);
    });
    it('Should throw an error if no start value is passed', function() {
      chai.expect(() => { m.andWhereBetween('id') }).to.throw(Error);
    });
    it('Should throw an error if no end value is passed', function() {
      chai.expect(() => { m.andWhereBetween('id', '100')}).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = m.andWhereBetween('id', '100', '200');
      chai.expect(model).to.equal(m);
    });
  });
  describe('Model.orWhere', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });

    it('Should throw an error if no column name is passed', function() {
      chai.expect(() => { m.orWhere() }).to.throw(Error);
    });
    it('Should throw an error if no predicate is passed', function() {
      chai.expect(() => { m.orWhere('id') }).to.throw(Error);
    });
    it('Should throw an error if no value is passed', function() {
      chai.expect(() => { m.orWhere('id', '=')}).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = m.orWhere('id', '=', 1);
      chai.expect(model).to.equal(m);
    });
  });
  describe('Model.andWhere', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });

    it('Should throw an error if no column name is passed', function() {
      chai.expect(() => { m.andWhere() }).to.throw(Error);
    });
    it('Should throw an error if no predicate is passed', function() {
      chai.expect(() => { m.andWhere('id') }).to.throw(Error);
    });
    it('Should throw an error if no value is passed', function() {
      chai.expect(() => { m.andWhere('id', '=')}).to.throw(Error);
    });
    it('Should return an instance of itself', function() {
      let model = m.andWhere('id', '=', 1);
      chai.expect(model).to.equal(m);
    });
  });
  describe('Model.asAttributes', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });

    it('Should set attributesOnly to true and jsonOnly to false', function() {
      m.asAttributes();
      chai.expect(m.attributesOnly).to.equal(true);
      chai.expect(m.jsonOnly).to.equal(false);
    });
    it('Should return itself', function() {
      let n = m.asAttributes();
      chai.expect(n).to.equal(m);
    });
  });
  describe('Model.asJson', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });

    it('Should set jsonOnly to true and attributesOnly to false', function() {
      m.asJson();
      chai.expect(m.attributesOnly).to.equal(false);
      chai.expect(m.jsonOnly).to.equal(true);
    });
    it('Should return itself', function() {
      let n = m.asJson();
      chai.expect(n).to.equal(m);
    });
  });
});
