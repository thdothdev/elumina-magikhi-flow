import type { ComponentType } from "react";
import {
  Cover,
  Scenario,
  Bottleneck,
  Engineering,
  DigitalEmployee,
  Customization,
  Timeline,
  Proposal,
} from "./decks";

export type SlideDef = { id: string; component: ComponentType };

export const slides: SlideDef[] = [
  { id: "cover", component: Cover },
  { id: "scenario", component: Scenario },
  { id: "bottleneck", component: Bottleneck },
  { id: "engineering", component: Engineering },
  { id: "digital-employee", component: DigitalEmployee },
  { id: "customization", component: Customization },
  { id: "timeline", component: Timeline },
  { id: "proposal", component: Proposal },
];
