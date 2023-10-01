import { ClassRoom } from "./0-classroom.js";

/**
 * creates an array
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
