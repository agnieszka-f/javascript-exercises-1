//////////////////////Tablice i obiekty///////////////////////////////////////////
/* Zad. 1 istnieje podana tablica:
const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
Twoim zadaniem jest stworzenie nowej, w której będą zawarte tylko imiona żeńskie obecne w tej oryginalnej. 
Dla uproszczenia załóżmy, że imiona żeńskie to takie, które kończą się na "a". */

const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
const resultNames = [];

for(let name of names){
    if(name.charAt(name.length -1) === 'a'){
        resultNames.push(name);
    }
}
console.log('result: ', resultNames);

/*Zad. 2  Za pomocą pętli for przejdź po każdym obiekcie w employees i wygeneruj dwie nowe tablice. 
employeesNames powinno być listą imion pracowników (tylko imion!). employeesSalaries powinno być listą pensji.*/

const employees = {
    john: {
      name: 'John Doe',
      salary: 3000
    },
    amanda: {
      name: 'Amanda Doe',
      salary: 4000
    },
  }
  const employeesNames = [];
  const employeesSalaries = [];

  for(let employee in employees){
    //console.log(employees[employee]); //{name: "John Doe", salary: 3000} , {name: "Amanda Doe", salary: 4000}
    employeesNames.push(employees[employee].name.split(' ')[0]);
    employeesSalaries.push(employees[employee].salary);
  }
  console.log(employeesNames);
  console.log(employeesSalaries);

/* Zad. 3 Twoim zadaniem jest ustalenie i wyświetlenie w konsoli:

sumy wszystkich pensji
najwyższej pensji
najniższej pensji */

const salaries = [2000, 3000, 1500, 6000, 3000];
let sum = 0;
let min = salaries[0];
let max = salaries[0];
for(let salary of salaries){
    sum += salary;
    if(salary > max){
        max = salary;
    }
    if(salary < min){
        min = salary;
    }
}
console.log('suma wszystkich pensji', sum,' pensja najmniejsza: ',min,' pensja najawiększa: ',max);

/*Zad. 4 zadanie jak powyżej ale dla obiektu */
const persons = {
    john: 2000,
    amanda: 3000,
    thomas: 1500,
    james: 6000,
    claire: 3000
  };
  let sumObj = 0;
  const firstValue = Object.values(persons)[0];
  let minObj = firstValue;
  let maxObj = firstValue;
  for(person in persons){
    sumObj += persons[person];
    if(persons[person] > maxObj){
        maxObj = persons[person];
    }
    if( persons[person] < minObj){
        minObj = persons[person];
    }
  }
  console.log('suma wszystkich pensji', sumObj,' pensja min ',minObj,'pensja max ',maxObj);

  /*Zad. 5 zbudowanie na podstawie poniższej tablicy, obiektu uniqueTags, który posiada tylko unikalne tagi. 
  W taki sposób, że każdy unikalny tag, to nowa właściwość w tym obiekcie. 
  Jego wartością powinien być za to kolejny obiekt z właściwością appearances o wartości liczby wystąpień tego tagu.
    Czyli, dla naszych tagów wyżej, powinno wygenerować się coś w stylu:

    {
    news: { appearances: 3 },
    code: { appearances: 2 },
    sport: { appearances: 1 },
    hot: { appearances: 1 },
    }*/
const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];
let uniqueTags = {};

for(tag of tags){
    if(!uniqueTags.hasOwnProperty(tag)){ 
        uniqueTags[tag] = {appearances:1,};
    } else uniqueTags[tag].appearances++;
}
console.log(uniqueTags);

////////////////////////////////Funkcje////////////////////////////////////////
/* Zad. 6 Napisz funkcję filterEmployees, która będzie pobierać dwa argumenty:

tablicę z obiektami o strukturze { name: 'Imię nazwisko', salary: kwota-pensji }
wartość minimalną zakresu,
wartość maksymalną zakresu.
Zadaniem naszej funkcji ma być zwrócenie nowej tablicy, która będzie posiadać tylko te osoby, 
których dochód jest większy niż wartość minimalna i mniejszy niż maksymalna.*/

function filterEmployees(tab,min,max){
    const res =[];
        for(let element of tab){
            if(element.salary > min && element.salary < max) res.push(element);
        }
    return res;
}
const emp = [
    { name: 'Amanda Doe', salary: 3000 },
    { name: 'John Doe', salary: 4000 },
    { name: 'Claire Downson', salary: 2000 },
    { name: 'Freddie Clarkson', salary: 6000 },
    { name: 'Thomas Delaney', salary: 8200 }
  ];
  const resultTab = filterEmployees(emp,2000,8200);
  console.log('resultTab: ',resultTab);

  /* Zad. 7 Napisz funkcję, która przyjmie jeden argument (dowolny obiekt), 
  a następnie wyświetli w konsoli informacje o jego wszystkich właściwościach. */

  function viewObj(obj){
    for(let el in obj){
        console.log('key-',el,', value-',obj[el]);
    }
  }
  const obj = {
    firstName: 'John',
    lastName: 'Doe'
  }
  viewObj(obj);

  /* Zad. 8 Napisz funkcję forEach, która przyjmie dwa argumenty:

dowolną tablicę,
dowolną funkcję callback.
Zadaniem funkcji powinna być przejście po każdym elemencie tablicy i wywołanie dla każdego z osobna funkcji callback. Tej, którą otrzymamy w drugim parametrze. 
Co ważne, ta funkcja callback powinna być wywołana z jednym argumentem, równym właśnie obsługiwanemu w danej chwili elementowi. */

function forEach(tab,fun){
    for(let el of tab){
        fun(el);
    }
}
function callback(flower){
    console.log('kwiat: ',flower);
}
const flowers = ['Konwalia','Róża','Piwonia','Bez'];
forEach(flowers,callback);

/* Zad. 9 Napisz funkcję formatName, która przyjmie w argumencie imię i nazwisko, a następnie zwróci poprawioną jego formę. 
Poprawioną, czyli taką, w której tylko pierwsza litera imienia i nazwiska będą duże, a pozostałe małe.*/

function formatName(name){ 
    const tabNames = name.split(' '); 
    for(let i = 0; i < tabNames.length; i++){
        tabNames[i]  = tabNames[i].charAt(0).toUpperCase() + tabNames[i].substring(1).toLowerCase();
    }
    return tabNames[0].concat(' ',tabNames[1]);
}
const listName = ['KAJetAn sAłATA','rYszaRd BIAłowąS','aDELajDA BĄbel','KArOl MIazGa'];
for(let i = 0; i<listName.length; i++){
    listName[i] = formatName(listName[i]);
}
console.log(listName);

/* Zad. 10 Przygotuj funkcję getEvensInRange, która przyjmie dwa argumenty:

liczbę wskazującą początek zakresu do sprawdzenia,
liczbę wskazującą jego koniec.
Zadaniem funkcji jest przejście po wszystkich liczbach wewnątrz podanego zakresu i zwrócenie tablicy, która będzie zawierać tylko te, które są parzyste. */

function getEvensInRange(start,end){
    const evenNumbers = [];
    for(let i = start; i <= end; i++){
        if(i % 2 == 0) evenNumbers.push(i);
    }
    console.log(evenNumbers);
}
getEvensInRange(3,18);

/* Zad. 11 napisanie funkcji o nazwie filter, która przyjmie dwa argumenty – dowolną tablicę oraz funkcję callback. 
Celem funkcji jest zwrócenie nowej przefiltrowanej tablicy, w której znajdą się tylko te elementy, dla których przekazana funkcja callback zwróci true */

function filter(tab,callback){
    const newTab = [];
    for(let el of tab){
        if(callback(el)) newTab.push(el);
    }
    return newTab;
}
function even(number){
    return number % 2 === 0;
}
const evenNumberList = filter([2,3,4,7,9,12,13,15,18], even);
console.log(evenNumberList);