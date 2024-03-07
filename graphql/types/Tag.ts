import { builder } from '../builder';

builder.prismaObject('Tag', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    created_at: t.expose('created_at', {
      type: 'DateTime',
    }),
    updated_at: t.expose('updated_at', {
      type: 'DateTime',
    }),
    contributors: t.relation('contributors'),
    requests: t.relation('requests'),
  }),
});

builder.queryField('tags', (t) =>
  t.prismaField({
    type: ['Tag'],
    resolve: (query, _parent, _args, _ctx) => prisma.tag.findMany({ ...query }),
  }),
);
