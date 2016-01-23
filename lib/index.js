"use strict";

const SandGrain = require('sand-grain');
const gcloud = require('gcloud');
const _ = require('lodash');

class GCloud extends SandGrain {
  constructor() {
    super();

    this.name = 'gcloud';
    this.defaultConfig = require('./defaultConfig');
    this.version = require('../package').version;
  }

  storage() {
    return gcloud.storage(this.config);
  }

  datastore(config) {
    return gcloud.datastore.dataset(_.merge({}, this.config.datastore, config));
  }
}

module.exports = GCloud;