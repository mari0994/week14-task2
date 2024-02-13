const container = document.querySelector('.container');

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
//console.log(grades);

const showGrades = () => {
    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = `Студенты получили следующие оценки: ${grades.join(', ')}.`;
    container.append(firstParagraph);
};

showGrades();

//Рассчитайте и выведите средний балл студентов, используя методы массивов.
const calculateAverage = () => {
    let sum = 0;
    grades.forEach((grade) => {
        sum += grade});
    console.log(sum);
    const average = Math.round(sum / grades.length);
    //console.log(average); 

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = `Средний балл студентов: ${average}.`;
    container.append(secondParagraph);  
}
calculateAverage();

//Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const findMaxGrade = () => {
    const gradesCopy = [...grades];
    const gradesCopySorted = gradesCopy.sort((a,b) => b-a);
    const maxNumber = gradesCopySorted[0];
    //console.log(maxNumber);

    const thirdParagraph = document.createElement('p');
    thirdParagraph.textContent = `Максимальный балл студентов: ${maxNumber}.`;
    container.append(thirdParagraph);
};

findMaxGrade();

//Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.

const findMinGrade = () => {
    const gradesCopy = [...grades];
    const gradesCopySorted = gradesCopy.sort((a,b) => a-b);
    const minNumber = gradesCopySorted[0];
    //console.log(minNumber);

    const fourthParagraph = document.createElement('p');
    fourthParagraph.textContent = `Минимальный балл студентов: ${minNumber}.`;
    container.append(fourthParagraph);
};

findMinGrade();

//Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.

const calculateQuantityOfPositiveGrades = () => {
    const positiveGrades = grades.filter((grade) => grade>=60);
    const quantityOfPositiveGrades = positiveGrades.length;
    //console.log(quantityOfPositiveGrades);

    const fifthParagraph = document.createElement('p');
    fifthParagraph.textContent = `Количество студентов, получивших положительную оценку: ${quantityOfPositiveGrades}.`;
    container.append(fifthParagraph);
};

calculateQuantityOfPositiveGrades();

//Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const calculateQuantityOfNegativeGrades = () => {
    const negativeGrades = grades.filter((grade) => grade<=60);
    const quantityOfNegativeGrades = negativeGrades.length;
    //console.log(quantityOfNegativeGrades);

    const sixthParagraph = document.createElement('p');
    sixthParagraph.textContent = `Количество студентов, получивших отрицательную оценку: ${quantityOfNegativeGrades}.`;
    container.append(sixthParagraph);
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
    //console.log(gradesAsLetters);

    const seventhParagraph = document.createElement('p');
    seventhParagraph.textContent = `Оценки студентов в буквенном формате: ${gradesAsLetters.join(', ')}.`;
    container.append(seventhParagraph);
};

assignLettersToGrades();