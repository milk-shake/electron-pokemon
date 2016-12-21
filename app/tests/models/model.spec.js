import * as assert from 'assert';
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

var sinon = require('sinon');
//TODO only run get if where has been called
class Query {
  constructor() {
    this.limit = null;
    this.offset = null;
  }
  getColumnNames() {}
  buildWhere() {}
  buildWhereBetween() {}
  select() {}
  update() {}
  create() {}
}

let getColumnNamesStub = sinon.stub(Query.prototype, 'getColumnNames', () => ['id', 'test', 'test_1']);
let buildWhereStub = sinon.stub(Query.prototype, 'buildWhere', () => {});
let buildWhereBetweenStub = sinon.stub(Query.prototype, 'buildWhereBetween', () => {});

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
    it('Should have called Query.buildWhere', function() {
      let model = TestModel.where('id', '=', 1);
      chai.expect(buildWhereStub.called).to.equal(true);
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
    it('Should throw an error if column name is not a string is passed', function() {
      chai.expect(() => { TestModel.whereBetween(1) }).to.throw(Error);
    });
    it('Should throw an error if no start value is passed', function() {
      chai.expect(() => { TestModel.whereBetween('id') }).to.throw(Error);
    });
    it('Should throw an error if no end value is passed', function() {
      chai.expect(() => { TestModel.whereBetween('id', '100')}).to.throw(Error);
    });
    it('Should have called Query.buildWhereBetween', function() {
      let model = TestModel.whereBetween('id', 100, 200);
      chai.expect(buildWhereBetweenStub.called).to.equal(true);
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
    it('Should throw an error if id is not a number', function() {
      chai.expect(() => { TestModel.find({}) }).to.throw(Error);
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
  describe('Model.limit', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });
    it('Should throw an error if value is not passed', function() {
      chai.expect(() => { m.limit() }).to.throw(Error);
    });
    it('Should throw an error if value is not a number', function() {
      chai.expect(() => { m.limit('string') }).to.throw(Error);
    });
    it('Should set Query.limit to the value', function() {
      let limit = 1;
      m.limit(limit);
      chai.expect(m.query.limit).to.equal(limit);
    });
    it('Should return itself', function() {
      let n = m.limit(1);
      chai.expect(n).to.equal(m);
    });
  });
  describe('Model.offset', function() {
    let m = null;
    before(function() {
      m = new TestModel();
    });
    it('Should throw an error if value is not passed', function() {
      chai.expect(() => { m.offset() }).to.throw(Error);
    });
    it('Should throw an error if value is not a number', function() {
      chai.expect(() => { m.offset('string') }).to.throw(Error);
    });
    it('Should set Query.offset to the value', function() {
      let offset = 1;
      m.offset(offset);
      chai.expect(m.query.offset).to.equal(offset);
    });
    it('Should return itself', function() {
      let n = m.offset(1);
      chai.expect(n).to.equal(m);
    });
  });
  describe('Model.hydrateNewInstance', function() {
    it('Should add the attributes to the instance', function() {
      let test = 1;
      let test_1 = 'string';
      let m = new TestModel();
      let model = m.hydrateNewInstance({
        test: test,
        test_1: test_1
      });

      chai.expect(model.attributes).to.have.property('test');
      chai.expect(model.attributes.test).to.equal(test);
      chai.expect(model.attributes).to.have.property('test_1');
      chai.expect(model.attributes.test_1).to.equal(test_1);

    });
    it('Should ignore any attributes which are not on the model', function() {
      let test = 1;
      let ignore = 'string';
      let m = new TestModel();
      let model = m.hydrateNewInstance({
        test: test,
        ignore: ignore
      });

      chai.expect(model.attributes).to.have.property('test');
      chai.expect(model.attributes.test).to.equal(test);
      chai.expect(model.attributes).to.not.have.property('ignore');
    })
    it('Should return an instance of itself', function() {
      let m = new TestModel();
      let model = m.hydrateNewInstance({});
      chai.expect(model).to.be.an.instanceof(TestModel);
    });
  });
  describe('Model.getAttributes', function() {
    it('Should return an object that matches attributes', function() {
      let m = new TestModel();
      let test = 1;
      let test_1 = 'string';
      let model = m.hydrateNewInstance({
        test: test,
        test_1: test_1
      });

      let attributes = model.getAttributes();
      chai.expect(attributes).to.have.property('test');
      chai.expect(attributes.test).to.equal(test);
      chai.expect(attributes).to.have.property('test_1');
      chai.expect(attributes.test_1).to.equal(test_1);
    });
  });
  describe('Model.getAttributesAsJson', function() {
    let test = 1;
    let test_1 = 'string';
    let model = null;
    let m = new TestModel();

    before(function() {
      model = m.hydrateNewInstance({
        test: test,
        test_1: test_1
      });
    });
    it('Should return JSON', function() {
      let json = model.getAttributesAsJson();
      chai.expect(() => { JSON.parse(json) } ).to.not.throw(Error);
    });
    it('Should parse the JSON and have the same values as the model', function() {
      let json = JSON.parse(model.getAttributesAsJson());
      chai.expect(json).to.have.property('test');
      chai.expect(json.test).to.equal(test);
      chai.expect(json).to.have.property('test_1');
      chai.expect(json.test_1).to.equal(test_1);
    });
  });
  describe('Model.updateAttribute', function() {
    it('Should add/update the attributes to the instance', function() {
      let test = 1;
      let model = new TestModel().updateAttribute('test', test);

      chai.expect(model.attributes).to.have.property('test');
      chai.expect(model.attributes.test).to.equal(test);
    });
    it('Should ignore any attributes which are not on the model', function() {
      let ignore = 'string';
      let model = new TestModel().updateAttribute('ignore', ignore);
      chai.expect(model.attributes).to.not.have.property('ignore');
    })
    it('Should return itself', function() {
      let model = new TestModel().updateAttribute('test', 1);
      chai.expect(model).to.be.an.instanceof(TestModel);
    });
  });




  describe('Model.get', function() {
    let model = null;
    let whereCol = 'id';
    let wherePred = '=';
    let whereVal = 1;
    let selectStub = null;
    beforeEach(function() {
      model = TestModel.where(whereCol, wherePred, whereVal);
    });
    afterEach(function() {
      selectStub.restore();
    });

    it('Should throw an error if where has not been called', function() {
      selectStub = sinon.stub(model.query, 'select', () => {
        return {
          then: () => {
            return []
          }
        }
      });
      model = new TestModel();
      chai.expect(() => { model.get() }).to.throw(Error);
    });

    it('Should return a promise', function() {
      selectStub = sinon.stub(model.query, 'select', () => {
        return {
          then: () => {
            return []
          }
        }
      });
      let promise = model.get() instanceof Promise;
      chai.expect(promise).to.equal(true);
    });
    it('Should return results if there are some', function() {
      let instance = model.hydrateNewInstance({'test': 'ok', 'test_1': 1});
      selectStub = sinon.stub(model.query, 'select', () => {
        return {
          then: () => {
            return [instance]
          }
        }
      });
      chai.expect(model.get()).to.eventually.equal([instance]);
    });
    it('Should return an empty array if there are no results', function() {
      selectStub = sinon.stub(model.query, 'select', () => {
        return {
          then: () => {
            return []
          }
        }
      });
      chai.expect(model.get()).to.eventually.equal([]);
    });
    it('Should return just the attributes if asAttributes has been called', function() {
      let instance = model.hydrateNewInstance({'test': 'ok', 'test_1': 1});
      selectStub = sinon.stub(model.query, 'select', () => {
        return {
          then: () => {
            return [instance]
          }
        }
      });
      chai.expect(model.asAttributes().get()).to.eventually.equal([{test: 'ok', 'test_1': 1}]);
    });
    it('Should return json if asJson has been called', function() {
      let instance = model.hydrateNewInstance({'test': 'ok', 'test_1': 1});
      selectStub = sinon.stub(model.query, 'select', () => {
        return {
          then: () => {
            return [instance]
          }
        }
      });
      chai.expect(model.asJson().get()).to.eventually.equal(JSON.stringify([{test: 'ok', 'test_1': 1}]));
    });
  });

  describe('Model.hydrate', function() {
    let model = null;
    let values = {
      'test': 'test',
      'test_1': 1
    }

    before(function() {
      model = new TestModel();
    });

    it('Should update attributes', function() {
      model.hydrate(values);
      chai.expect(model.attributes).to.have.property('test');
      chai.expect(model.attributes.test).to.equal('test');
      chai.expect(model.attributes).to.have.property('test_1');
      chai.expect(model.attributes.test_1).to.equal(1);
    });
    it('Should ignore values which are not on the model', function() {
      model.hydrate({ignore: null});
      chai.expect(model.attributes).to.not.have.property('ignore');
    });
    it('Should return itself', function() {
      let m = model.hydrate(values);
      chai.expect(m).to.equal(model);
    });
  });

  describe('Model.save', function() {
    let model = null;
    let values = {
      test: "test",
      test_1: 1
    }
    let updateStub = null;
    let createStub = null;

    beforeEach(function() {
      model = new TestModel();
      model.hydrate(values);
      updateStub = sinon.stub(model.query, 'update', () => {
        return {
          then: () => {
            return null
          }
        }
      });

      createStub = sinon.stub(model.query, 'create', () => {
        return {
          then: () => {
            return null
          }
        }
      });
    });

    afterEach(function() {
      model = null;
      updateStub.restore();
      createStub.restore();
    });

    it('Should return a promise', function() {

      let promise = model.save(values) instanceof Promise;
      chai.expect(promise).to.equal(true);
    });

    it('Should update a record if id is present', function() {
      model.updateAttribute('id', 1);
      model.save().then(function() {
        chai.expect(updateStub.called).to.equal(true);
      });
    });

    it('Should create a record if id is not present', function() {
      model.save().then(function() {
        chai.expect(createStub.called).to.equal(true);
      });
    });
  });
});
