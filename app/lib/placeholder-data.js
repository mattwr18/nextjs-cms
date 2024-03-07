const { Role } = require('./definitions');
const { faker } = require('@faker-js/faker');

const organizationId = faker.string.uuid();
const user0Id = faker.string.uuid();

const tags = [
  {
    id: faker.string.uuid(),
    name: 'Doctor',
  },
  {
    id: faker.string.uuid(),
    name: 'Parent',
  },
  {
    id: faker.string.uuid(),
    name: 'Student',
  },
  {
    id: faker.string.uuid(),
    name: 'Team',
  },
  {
    id: faker.string.uuid(),
    name: 'Teacher',
  },
];
const users = [
  {
    id: user0Id,
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: '123456',
  },
  {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: '123456',
    role: Role.ADMIN,
  },
  {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: '123456',
    role: Role.ADMIN,
  },
];

let contributors = [...Array(4)].map((_, i) => {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    telegram_chat_id: null,
    username: i > 2 ? faker.internet.userName() : null,
    telegram_id: null,
    note: i % 3 == 0 ? faker.lorem.sentences({ min: i, max: 20 }) : null,
    zip_code: i < 2 ? faker.location.zipCode() : null,
    city: i < 2 ? faker.location.city() : null,
    phone: i > 2 ? faker.phone.number() : null,
    deactivated_at: i < 2 ? faker.date.recent() : null,
    threema_id: null,
    data_processing_consented_at: new Date(),
    telegram_onboarding_token: null,
    signal_phone_number: null,
    signal_onboarding_completed_at: null,
    additional_email: i > 2 ? faker.internet.email() : null,
    additional_consent_given_at: i % 3 == 0 ? new Date() : null,
    organization_id: organizationId,
    whats_app_phone_number: null,
    whats_app_message_template_responded_at: null,
    deactivated_by_user_id: i < 2 ? users[0].id : null,
    whats_app_message_template_sent_at: null,
    unsubscribed_at: null,
    tags: {
      connect: {
        name: tags[0].name,
      },
    },
  };
});

contributors = [
  ...contributors,
  [...Array(5)].map((_, i) => {
    return {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: null,
      telegram_chat_id: faker.number.bigInt(),
      username: i > 2 ? faker.internet.userName() : null,
      telegram_id: faker.number.bigInt(),
      note: i % 3 == 0 ? faker.lorem.sentences({ min: i, max: 20 }) : null,
      zip_code: i < 2 ? faker.location.zipCode() : null,
      city: i < 2 ? faker.location.city() : null,
      phone: i > 2 ? faker.phone.number() : null,
      deactivated_at: i < 2 ? faker.date.recent() : null,
      threema_id: null,
      data_processing_consented_at: new Date(),
      telegram_onboarding_token: null,
      signal_phone_number: null,
      signal_onboarding_completed_at: null,
      additional_email: i > 2 ? faker.internet.email() : null,
      additional_consent_given_at: i % 3 == 0 ? new Date() : null,
      organization_id: organizationId,
      whats_app_phone_number: null,
      whats_app_message_template_responded_at: null,
      deactivated_by_user_id: i < 2 ? users[0].id : null,
      whats_app_message_template_sent_at: null,
      unsubscribed_at: null,
      tags: {
        connect: {
          name: tags[1].name,
        },
      },
    };
  }),
].flat();

contributors = [
  ...contributors,
  [...Array(15)].map((_, i) => {
    return {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: null,
      telegram_chat_id: faker.number.bigInt(),
      username: i % 4 == 0 ? faker.internet.userName() : null,
      telegram_id: null,
      note: i < 4 ? faker.lorem.sentences({ min: i, max: 20 }) : null,
      zip_code: i < 2 ? faker.location.zipCode() : null,
      city: i < 2 ? faker.location.city() : null,
      phone: i > 12 ? faker.phone.number() : null,
      deactivated_at: i < 2 ? faker.date.recent() : null,
      threema_id: null,
      data_processing_consented_at: new Date(),
      telegram_onboarding_token: null,
      signal_phone_number: faker.phone.number(),
      signal_onboarding_completed_at: new Date(),
      additional_email: i > 12 ? faker.internet.email() : null,
      additional_consent_given_at: i % 3 == 0 ? new Date() : null,
      organization_id: organizationId,
      whats_app_phone_number: null,
      whats_app_message_template_responded_at: null,
      deactivated_by_user_id: i < 2 ? users[0].id : null,
      whats_app_message_template_sent_at: null,
      unsubscribed_at: i % 3 == 0 ? faker.date.recent() : null,
      tags: {
        connect: {
          name: tags[2].name,
        },
      },
    };
  }),
].flat();

contributors = [
  ...contributors,
  [...Array(15)].map((_, i) => {
    return {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: null,
      telegram_chat_id: faker.number.bigInt(),
      username: i % 4 == 0 ? faker.internet.userName() : null,
      telegram_id: null,
      note: i < 10 ? faker.lorem.sentences({ min: i, max: 20 }) : null,
      zip_code: i < 2 ? faker.location.zipCode() : null,
      city: i < 2 ? faker.location.city() : null,
      phone: i > 12 ? faker.phone.number() : null,
      deactivated_at: i < 2 ? faker.date.recent() : null,
      threema_id: null,
      data_processing_consented_at: new Date(),
      telegram_onboarding_token: null,
      signal_phone_number: null,
      signal_onboarding_completed_at: null,
      additional_email: i > 22 ? faker.internet.email() : null,
      additional_consent_given_at: i % 3 == 0 ? new Date() : null,
      organization_id: organizationId,
      whats_app_phone_number: faker.phone.number(),
      whats_app_message_template_responded_at: null,
      deactivated_by_user_id: i < 2 ? users[0].id : null,
      whats_app_message_template_sent_at: null,
      unsubscribed_at: i % 3 == 0 ? faker.date.recent() : null,
      tags: {
        connect: {
          name: tags[3].name,
        },
      },
    };
  }),
].flat();

let requests = [...Array(10)].map((_, i) => {
  return {
    id: faker.string.uuid(),
    title: faker.word.words({ count: { min: 1, max: 4 } }),
    text: faker.lorem.sentences({ min: i, max: 20 }),
    schedule_send_for: i % 3 == 0 ? faker.date.future() : faker.date.recent(),
    broadcasted_at: i % 3 != 0 ? faker.date.recent() : null,
    tags: {
      connect: {
        name: tags[2].name,
      },
    },
  };
});

requests = [
  ...requests,
  [...Array(20)].map((_, i) => {
    return {
      id: faker.string.uuid(),
      title: faker.word.words({ count: { min: 1, max: 4 } }),
      text: faker.lorem.sentences({ min: i, max: 20 }),
      schedule_send_for: i % 3 == 0 ? faker.date.future() : faker.date.recent(),
      broadcasted_at: i % 3 != 0 ? faker.date.recent() : null,
      tags: {
        connect: {
          name: tags[0].name,
        },
      },
    };
  }),
].flat();

module.exports = {
  users,
  tags,
  contributors,
  requests,
};
