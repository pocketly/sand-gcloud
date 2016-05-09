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
    return gcloud.datastore(_.merge({}, this.config, this.config.datastore, config));
  }

  pubsub() {
    return gcloud.pubsub(this.config);
  }
}

module.exports = GCloud;