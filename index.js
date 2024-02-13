const container = document.querySelector('.container');

const results = [];

const grades = [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
];

const addGradesInfo = () => {
    const gradesInfo = `Студенты получили следующие оценки: ${grades.join(', ')}.`;
    results.push(gradesInfo);
};
addGradesInfo();

//Рассчитайте и выведите средний балл студентов, используя методы массивов.
const calculateAverage = () => {
    let sum = 0;
    grades.forEach((grade) => {
        sum += grade});
    const average = Math.round(sum / grades.length);

    const averageInfo = `Средний балл студентов: ${average}.`;
    results.push(averageInfo);  
}
calculateAverage();

//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const findMaxGrade = () => {
    const gradesCopy = [...grades];
    const gradesCopySorted = gradesCopy.sort((a,b) => b-a);
    const maxNumber = gradesCopySorted[0];

    const maxGradeInfo = `Максимальный балл студентов: ${maxNumber}.`;
    results.push(maxGradeInfo);
};

findMaxGrade();

//Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.

const findMinGrade = () => {
    const gradesCopy = [...grades];
    const gradesCopySorted = gradesCopy.sort((a,b) => a-b);
    const minNumber = gradesCopySorted[0];

    const minGradeInfo = `Минимальный балл студентов: ${minNumber}.`;
    results.push(minGradeInfo);
};

findMinGrade();

//Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.

const calculateQuantityOfPositiveGrades = () => {
    const positiveGrades = grades.filter((grade) => grade>=60);
    const quantityOfPositiveGrades = positiveGrades.length;

    const maxStudentsQuantity = `Количество студентов, получивших положительную оценку: ${quantityOfPositiveGrades}.`;
    results.push(maxStudentsQuantity);
};

calculateQuantityOfPositiveGrades();

//Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const calculateQuantityOfNegativeGrades = () => {
    const negativeGrades = grades.filter((grade) => grade<=60);
    const quantityOfNegativeGrades = negativeGrades.length;

    const minStudentsQuantity = `Количество студентов, получивших отрицательную оценку: ${quantityOfNegativeGrades}.`;
    results.push(minStudentsQuantity);
};

calculateQuantityOfNegativeGrades();

//Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// - Если оценка ниже 20, преобразуйте её в "E"

const assignLettersToGrades = () => {
    const gradesAsLetters = grades.map((grade) => {
        if(grade>=80 && grade<=100){
            return 'A';
        }
        else if(grade>=60 && grade<=79){
            return 'B';
        }
        else if(grade >=40 && grade<=59){
            return 'C';
        }
        else if(grade >=20 && grade<=39){
            return 'D';
        }
        else {
            return 'E';
        }
    });

    const gradesAsLettersInfo = `Оценки студентов в буквенном формате: ${gradesAsLetters.join(', ')}.`;
    results.push(gradesAsLettersInfo);
};

assignLettersToGrades();

const addResultsToPage = () => {
    results.forEach((result) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = result;
        container.append(paragraph);
    }); 
};
addResultsToPage();