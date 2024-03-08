/* eslint-disable */
import type { Prisma, User, Tag, Contributor, Request } from '@prisma/client';
export default interface PrismaTypes {
  User: {
    Name: 'User';
    Shape: User;
    Include: Prisma.UserInclude;
    Select: Prisma.UserSelect;
    OrderBy: Prisma.UserOrderByWithRelationInput;
    WhereUnique: Prisma.UserWhereUniqueInput;
    Where: Prisma.UserWhereInput;
    Create: {};
    Update: {};
    RelationName: 'requests';
    ListRelations: 'requests';
    Relations: {
      requests: {
        Shape: Request[];
        Name: 'Request';
        Nullable: false;
      };
    };
  };
  Tag: {
    Name: 'Tag';
    Shape: Tag;
    Include: Prisma.TagInclude;
    Select: Prisma.TagSelect;
    OrderBy: Prisma.TagOrderByWithRelationInput;
    WhereUnique: Prisma.TagWhereUniqueInput;
    Where: Prisma.TagWhereInput;
    Create: {};
    Update: {};
    RelationName: 'contributors' | 'requests';
    ListRelations: 'contributors' | 'requests';
    Relations: {
      contributors: {
        Shape: Contributor[];
        Name: 'Contributor';
        Nullable: false;
      };
      requests: {
        Shape: Request[];
        Name: 'Request';
        Nullable: false;
      };
    };
  };
  Contributor: {
    Name: 'Contributor';
    Shape: Contributor;
    Include: Prisma.ContributorInclude;
    Select: Prisma.ContributorSelect;
    OrderBy: Prisma.ContributorOrderByWithRelationInput;
    WhereUnique: Prisma.ContributorWhereUniqueInput;
    Where: Prisma.ContributorWhereInput;
    Create: {};
    Update: {};
    RelationName: 'tags';
    ListRelations: 'tags';
    Relations: {
      tags: {
        Shape: Tag[];
        Name: 'Tag';
        Nullable: false;
      };
    };
  };
  Request: {
    Name: 'Request';
    Shape: Request;
    Include: Prisma.RequestInclude;
    Select: Prisma.RequestSelect;
    OrderBy: Prisma.RequestOrderByWithRelationInput;
    WhereUnique: Prisma.RequestWhereUniqueInput;
    Where: Prisma.RequestWhereInput;
    Create: {};
    Update: {};
    RelationName: 'user' | 'tags';
    ListRelations: 'tags';
    Relations: {
      user: {
        Shape: User;
        Name: 'User';
        Nullable: false;
      };
      tags: {
        Shape: Tag[];
        Name: 'Tag';
        Nullable: false;
      };
    };
  };
}
