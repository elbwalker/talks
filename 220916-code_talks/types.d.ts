export namespace Measurement {
  export interface Plan {
    version: number;
    sources: Sources;
    destinations: Destinations;
    owners: Owners;
  }

  interface Sources {
    [sourceId: string]: Source;
  }

  interface Source {
    name: string;
    type: SourceType;
    owners: Array<ownerId>;
    entities: Entities;
    globals: Properties;
  }

  type SourceType = "app" | "other" | "server" | "web";

  interface Entities {
    [entityId: string]: Entity;
  }

  interface Entity {
    name: string;
    description: string;
    actions: Actions;
    properties: Properties;
    owners: Array<ownerId>;
  }

  interface Actions {
    [actionId: string]: Action;
  }

  interface Action {
    name: string;
    description: string;
    properties: Array<PropertyLink>;
    trigger: Trigger;
    type: ActionType;
  }
  type ActionType = "core" | "additional";

  type ConsentList = Array<ConsentId>;
  type ConsentId = string;

  interface Consent {
    id: ConsentId;
    name: string;
  }

  interface SourceLink {
    required: boolean;
  }

  interface PropertyLink {
    id: string;
    required: boolean;
  }

  interface Properties {
    [propertyId: string]: Property;
  }

  interface Property {
    name: string;
    type: PropertyType;
    consent?: ConsentList;
    example: string; // @TODO corresponding to type
  }

  type PropertyType = string | number | boolean;

  interface Trigger {
    type: TriggerType;
  }

  type TriggerType = "load" | "click" | "visible" | "hover" | "submit";

  interface Destinations {
    [destinationId: string]: Destination;
  }

  interface Destination {
    name: string;
    type: DestinationType;
    owners: Array<ownerId>;
    config: DestinationConfig;
  }

  interface DestinationConfig {
    custom: AnyObject;
    events: DestinationEvents;
  }

  interface DestinationEvents {
    [entityId: string]: { [actionId: string]: DestinationEvent };
  }

  interface DestinationEvent {
    consent: ConsentList;
  }

  type DestinationType =
    | "event-pipe"
    | "google-ga4"
    | "google-gtm"
    | "plausible"
    | "custom";

  interface Owners {
    [ownerId: ownerId]: Owner;
  }
  type ownerId = string;

  interface Owner {
    name: string;
  }

  type AnyObject = Record<string, unknown>;
}
