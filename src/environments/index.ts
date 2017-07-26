import { Environment } from "./Environment";

// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
export const environment = new Environment(false, "http://localhost:3313/api/");