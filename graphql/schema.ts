import { builder } from './builder';
import { generateAllCrud } from './generated/autocrud';
generateAllCrud();

builder.mutationType({});
export const schema = builder.toSchema();
