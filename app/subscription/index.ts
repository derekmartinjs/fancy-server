import { PubSub } from 'apollo-server';

import * as TRANSACTION_EVENTS from './transaction';

export const EVENTS = {
  TRANSACTION: TRANSACTION_EVENTS,
};

export default new PubSub();