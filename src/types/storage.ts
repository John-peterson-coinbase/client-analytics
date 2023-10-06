import { Config } from './config';
import { Scheduler } from './scheduler';
import { Metric } from './metric.ts';
import { Event } from './event';
import { Location } from './location';
import { IdentityFlow } from './identityFlow.ts';
import { Identity } from './identity.ts';

export type Storage = {
  config: Config;
  metricScheduler: Scheduler<Metric>;
  eventScheduler: Scheduler<Event>;
  location: Location;
  identityFlow: IdentityFlow;
  identity: Identity;
};
