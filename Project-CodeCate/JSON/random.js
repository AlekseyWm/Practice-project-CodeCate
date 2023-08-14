const endID = 899999;
const beginID = 100000;
const beginArray = 100;
const endArray = 999;
const lengthBeginArr = 1;
const lengthEndArr = 10;
let numPool = [];
const arrPS = [];

// Заполнение массива для дальнейшего рандомного заполнения другого массива
for (let i = beginArray; i <= endArray; i++) {
  arrPS.push(i);
}

// Заполнение массива для дальнейшего рандомного заполнения уникальными числами
for (let i = beginID; i <= endID; i++) {
    numPool.push(i);
}

// Генератор рандомных повторяющихся чисел
function getRandom(lengthBeginArr, lengthEndArr) {
  lengthBeginArr = Math.ceil(lengthBeginArr);
  lengthEndArr = Math.floor(lengthEndArr);
  return Math.floor(Math.random() * (lengthEndArr - lengthBeginArr + 1)) + lengthEndArr; 
}

// набросок функции для рандомного заполнения чисел
/* function arrRandElement(arrPS) {
  const lengthArr = getRandom(lengthBeginArr,lengthEndArr);
  for (let i = 0; i < lengthArr; i++) {
    let rand = Math.floor(Math.random() * arrPS.length);
  }
  return arrPS[rand];
} */


// Функция проверка на гостя
function tsisGuest() {
  return (Math.floor(Math.random() * 2) === 0);
}

// Еще один вариант функции рандомных уникальных чисел через отдельный массив 
function getRandomUniq(numPool) {
  for ( var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
  return numPool;
};

var ranResult = getRandomUniq(numPool);


const alph = {
  eng: 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm',
  rus: 'ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮюбьтимсчяэждлорпавыфъхзщшгнекуцйё'
}
  word = '',
  lengthWord = 10;

// Генератор рандомных несвязных слов из символов;  
function getRandomWord(word, lang = "rus") {
  for (let i = 0; i < lengthWord; i++) {
    if (lang === 'eng') {
      word += alph['eng'][Math.round(Math.random() * (alph['eng'].length - 1))];
    } else {
      word += alph['rus'][Math.round(Math.random() * (alph['rus'].length - 1))];
    }
  }
  return word;
}

//console.log(getRandomWord(word))




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Функция-генратор рандомных имен из списка
function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateFName(gender) {
  const fName = [];
  if (gender === 'man') {
    const tmp = ["андрей", "алексей", "иван", "антон", "вадим", "михаил"];
    fName.push(...tmp)
  } else {
    const tmp = ["анна", "ольга", "мария", "виктория"];
    fName.push(...tmp);
  } 
  const name = capFirst(fName[getRandomInt(0, fName.length + 1)]);
  return name;
  
}

function generateSName(gender) {
  const surName = [];
  if (gender === 'man') {
    const tmp = ["иванов", "смирнов", "великий", "руд", "шикан", "петров"];
    surName.push(...tmp)
  } else { 
    const tmp = ["иванова", "смирнова", "великая", "руд", "шикан", "петрова"];
    surName.push(...tmp);
  } 
  const name = capFirst(surName[getRandomInt(0, surName.length + 1)]);
  return name;
}

function generatePName(gender) {
  const pName = [];
  if (gender === 'man') {
    const tmp = ["иванович", "петрович", "владимирович", "константинович", "алексеевич", "андреевич"];
    pName.push(...tmp)
  } else { 
    const tmp = ["ивановна", "петровна", "владимировна", "константиновна", "алексеевна", "андреевна"];
    pName.push(...tmp);
  } 
  const name = capFirst(pName[getRandomInt(0, pName.length + 1)]);
  return name;
}

function getSFPName(gender) {
  const result = generateSName(gender) + ' ' + generateFName(gender) + " " + generatePName(gender);
  return result;
}

console.log(getSFPName('man'));

//  Создание макета Json файла для генератора
const shemesBackend = {
  users: {
    thisGuest: "boolean",
    idCustomer: "number",
    surNameCustomer: 'string[SName]',
    firstNameCustomer: 'string[FName]',
    patronymicCustomer: "string",
    loginCustomer: "string[Login]",
    projects: "array[number]",
    snippets: "array[number]", //; (зависит от проекта)
    email: "string"
  },
  usersProject: {
      thisGuest: "boolean",
      id: "number",
      surName: "string",
      firstName: "string",
      patronymic: "string",
      role: "string"
  },
  projects: {
    id: "number", // (не показывает)
    nameProject: "string",
    creatorProject: "string", // (только владельцы)
    dateCreate: "string",
    dateChange: "string",
    snippets:  "array[number]", // (зависит от проекта)
    contentProject: "string"
  },
  snippets: {
    id: "number", // (не показывает)
    access: "boolean",
    issyedBy: "string" // (кем выдан доступ, только владельцы)
  },
  snippetsProject: {
    id: "number",  // (не показывает)
    idProject: "number", // (не показывает)
    nameSnippet: "string",
    languageSnippet: "string",
    creatorSnippet: "string",
    dateCreate: "string",
    dateChange: "string",
    contentSnippet: "string"
  }
}

// Генератор рандомных уникальных чисел без повторов
function* random(max) {
  const oldValue = [];
  const newNumber = (n) => Math.round(Math.random() * n);
  while (oldValue.length < (max)) {
    let newNum = newNumber(max);
    if (!oldValue.some((n) => n === newNum)) {
      oldValue.push(newNum);
      yield newNum;
    }
  }
  return -1;
}

// Генератор JSON файлов
function generatorData(sheme, max) {
  const data = {};
  const keys = Object.keys(sheme); 
  for (let i = 0; i < keys.length; i++){
    const subKeys = Object.keys(sheme[keys[i]]);
    data[keys[i]] = [];
    for (let x = 0; x < max; x++) {
      data[keys[i]].push({});
      for (let j = 0; j < subKeys.length; j++) {
        const typeKeySheme = sheme[keys[i]][subKeys[j]];
        switch (typeKeySheme) {
          case "boolean":
            data[keys[i]][x][subKeys[j]] = tsisGuest();
            break;
          case "number":
            data[keys[i]][x][subKeys[j]] = ranResult.pop();
            break;
          case "string[FName]":
            data[keys[i]][x][subKeys[j]] = generateFName();
            break;
            case "string[SName]":
              data[keys[i]][x][subKeys[j]] = generateSName();
              break;
            case "string[Login]":
              data[keys[i]][x][subKeys[j]] = getRandomWord(word);
              break;
          default:
            console.log(`Нет значений для ${subKeys[j]}`);       
        }
      }
    }
  }
  

return JSON.stringify(data);
}



/*const userId = random(5);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);*/

//console.log(generatorData(shemesBackend, 2));