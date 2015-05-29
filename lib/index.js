"use strict";

const SandGrain = require('sand-grain');
const gcloud = require('gcloud');

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

  datastore() {
    return gcloud.datastore.dataset(this.config);
  }
}

module.exports = GCloud;