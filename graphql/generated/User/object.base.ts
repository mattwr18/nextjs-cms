import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserObject = definePrismaObject('User', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(UserIdFieldObject),
    first_name: t.field(UserFirst_nameFieldObject),
    last_name: t.field(UserLast_nameFieldObject),
    email: t.field(UserEmailFieldObject),
    password: t.field(UserPasswordFieldObject),
    role: t.field(UserRoleFieldObject),
    created_at: t.field(UserCreated_atFieldObject),
    updated_at: t.field(UserUpdated_atFieldObject),
    requests: t.relation('requests', UserRequestsFieldObject(t)),
  }),
});

export const UserIdFieldObject = defineFieldObject('User', {
  type: 'ID',
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const UserFirst_nameFieldObject = defineFieldObject('User', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.first_name,
});

export const UserLast_nameFieldObject = defineFieldObject('User', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.last_name,
});

export const UserEmailFieldObject = defineFieldObject('User', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.email,
});

export const UserPasswordFieldObject = defineFieldObject('User', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.password,
});

export const UserRoleFieldObject = defineFieldObject('User', {
  type: Inputs.Role,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.role,
});

export const UserCreated_atFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.created_at,
});

export const UserUpdated_atFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updated_at,
});

export const UserRequestsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.RequestOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.RequestWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RequestScalarFieldEnum], required: false }),
}));

export const UserRequestsFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'requests', {
    description: undefined,
    nullable: false,
    args: UserRequestsFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
