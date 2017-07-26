import { Environment } from "./Environment";

// This file contains production variables. (When you work in PROD MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
export const environment = new Environment(true, "http://localhost:3313/api/");