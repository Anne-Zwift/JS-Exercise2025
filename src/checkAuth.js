import { load } from "./storage.js";

export function isUserLoggedIn() {
  const token = load('accessToken');
  return !!token; //The !! converts a value to a strict boolean
}