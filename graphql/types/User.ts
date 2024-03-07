import { builder } from '../builder';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    first_name: t.exposeString('first_name'),
    last_name: t.exposeString('last_name'),
    email: t.exposeString('email'),
    role: t.expose('role', { type: Role }),
    created_at: t.expose('created_at', {
      type: 'DateTime',
    }),
    updated_at: t.expose('updated_at', {
      type: 'DateTime',
    }),
    requests: t.relation('requests'),
  }),
});

const Role = builder.enumType('Role', {
  values: ['USER', 'ADMIN'] as const,
});

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: (query, _parent, _args, _ctx) =>
      prisma.user.findMany({ ...query }),
  }),
);
