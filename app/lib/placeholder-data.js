const { v4: uuidv4 } = require('uuid');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const users = [
  {
    id: uuidv4(),
    first_name: 'User',
    last_name: 'First',
    email: 'user@nextmail.com',
    password: '123456',
    admin: true,
  },
];

const contributors = [...Array(20)].map((_, i) => {
  return {
    id: uuidv4(),
    first_name: `${i}th`,
    last_name: 'contributor',
  };
});

const requests = [...Array(20)].map((_, i) => {
  return {
    id: uuidv4(),
    title: `Request ${i + 1}`,
    text: lorem.generateSentences(i),
  };
});

module.exports = {
  users,
  contributors,
  requests,
};
