import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RequestObject = definePrismaObject('Request', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(RequestIdFieldObject),
    title: t.field(RequestTitleFieldObject),
    text: t.field(RequestTextFieldObject),
    created_at: t.field(RequestCreated_atFieldObject),
    updated_at: t.field(RequestUpdated_atFieldObject),
    user: t.relation('user', RequestUserFieldObject),
    user_id: t.field(RequestUser_idFieldObject),
    schedule_send_for: t.field(RequestSchedule_send_forFieldObject),
    broadcasted_at: t.field(RequestBroadcasted_atFieldObject),
    tags: t.relation('tags', RequestTagsFieldObject(t)),
  }),
});

export const RequestIdFieldObject = defineFieldObject('Request', {
  type: 'ID',
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const RequestTitleFieldObject = defineFieldObject('Request', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.title,
});

export const RequestTextFieldObject = defineFieldObject('Request', {
  type: 'String',
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.text,
});

export const RequestCreated_atFieldObject = defineFieldObject('Request', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.created_at,
});

export const RequestUpdated_atFieldObject = defineFieldObject('Request', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updated_at,
});

export const RequestUserFieldObject = defineRelationObject('Request', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const RequestUser_idFieldObject = defineFieldObject('Request', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.user_id,
});

export const RequestSchedule_send_forFieldObject = defineFieldObject(
  'Request',
  {
    type: Inputs.DateTime,
    description: undefined,
    nullable: false,
    resolve: (parent) => parent.schedule_send_for,
  },
);

export const RequestBroadcasted_atFieldObject = defineFieldObject('Request', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.broadcasted_at,
});

export const RequestTagsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.TagOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.TagWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.TagScalarFieldEnum], required: false }),
}));

export const RequestTagsFieldObject = defineRelationFunction('Request', (t) =>
  defineRelationObject('Request', 'tags', {
    description: undefined,
    nullable: false,
    args: RequestTagsFieldArgs,
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
