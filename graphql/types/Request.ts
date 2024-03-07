import { builder } from '../builder';

builder.prismaObject('Request', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    text: t.exposeString('text', { nullable: true }),
    created_at: t.expose('created_at', {
      type: 'DateTime',
    }),
    updated_at: t.expose('updated_at', {
      type: 'DateTime',
    }),
    schedule_send_for: t.expose('schedule_send_for', { type: 'DateTime' }),
    broadcasted_at: t.expose('broadcasted_at', {
      type: 'DateTime',
      nullable: true,
    }),
    user: t.relation('user'),
    tags: t.relation('tags'),
  }),
});

builder.queryField('requests', (t) =>
  t.prismaField({
    type: ['Request'],
    resolve: (query, _parent, _args, _ctx) =>
      prisma.request.findMany({ ...query }),
  }),
);
