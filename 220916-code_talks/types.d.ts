export namespace Measurement {
  export interface Plan {
    entities: Entities;
    sources: Sources;
    destinations: Destinations;
    globals: Properties;
    version: number;
    users: Users;
  }

  interface Entities {
    [entityId: string]: Entity;
  }

  interface Entity {
    name: string;
    description: string;
    actions: Actions;
    properties: Properties;
    owners: Array<UserId>;
  }

  interface Actions {
    [actionId: string]: Action;
  }

  interface Action {
    name: string;
    description: string;
    properties: Array<PropertyLink>;
    sources: ActionSources;
    trigger: Trigger;
    type: ActionType;
  }
  type ActionType = "core" | "additional";

  interface ActionSources {
    [sourceId: string]: SourceLink;
  }

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

  interface Sources {
    [sourceId: string]: Source;
  }

  interface Source {
    name: string;
    type: SourceType;
    owners: Array<UserId>;
  }

  type SourceType = "app" | "other" | "server" | "web";

  interface Destinations {
    [destinationId: string]: Destination;
  }

  interface Destination {
    name: string;
    type: DestinationType;
    owners: Array<UserId>;
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

  interface Users {
    [userId: UserId]: User;
  }
  type UserId = string;

  interface User {
    name: string;
  }
}
