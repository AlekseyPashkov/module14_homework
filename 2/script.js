/*нужный js-объект*/
const jsonString = `
{
  "human": {
   "name": "Anton",
   "skills": [
      "Javascript",
      "HTML",
      "CSS"
    ],
    "age": 36,
    "salary": 80000
  }
}
`;
/*нужный js-объект*/

const data = JSON.parse(jsonString);
const human = data.human;

const result = {
  name: human.name,
  age: human.age,
  skills: human.skills,
  salary: human.salary
};
console.log('result', result);