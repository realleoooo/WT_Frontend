import {Activity} from "./activity.model";

export interface Column {
  id: string;
  title: string;
  activities: Activity[];
}
