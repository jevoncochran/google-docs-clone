import { Timestamp } from "firebase-admin/firestore";

export interface Document {
  id: string;
  fileName: string;
  text: any;
  timestamp: Timestamp;
}
