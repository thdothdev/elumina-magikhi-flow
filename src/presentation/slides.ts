import type { ComponentType } from "react";
import {
  Cover,
  Scenario,
  Bottleneck,
  Engineering,
  Deliverable1,
  Deliverable2,
  Deliverable3,
  Deliverable4,
  Timeline,
  Proposal,
} from "./decks";

export type SlideDef = { id: string; component: ComponentType };

export const slides: SlideDef[] = [
  { id: "cover", component: Cover },
  { id: "scenario", component: Scenario },
  { id: "bottleneck", component: Bottleneck },
  { id: "engineering", component: Engineering },
  { id: "d1", component: Deliverable1 },
  { id: "d2", component: Deliverable2 },
  { id: "d3", component: Deliverable3 },
  { id: "d4", component: Deliverable4 },
  { id: "timeline", component: Timeline },
  { id: "proposal", component: Proposal },
];
