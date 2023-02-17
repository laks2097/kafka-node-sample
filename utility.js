const fakerLib =  require('@faker-js/faker');
var faker = fakerLib.faker;
const createRandomUser = () => {
 
  return {
    firstname: faker.name.firstName(),
    username: faker.internet.userName(),
    birthdate: faker.date.birthdate(),
    emoji: faker.internet.emoji(),
  };
};
module.exports =  {createRandomUser};
