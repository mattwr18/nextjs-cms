const { faker } = require('@faker-js/faker');

const users = [
  {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: '123456',
    admin: true,
  },
];

const contributors = [...Array(20)].map((_, i) => {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
  };
});

const requests = [...Array(20)].map((_, i) => {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 1, max: 4 } }),
    text: faker.lorem.sentences({ min: i, max: 20 }),
  };
});

module.exports = {
  users,
  contributors,
  requests,
};
