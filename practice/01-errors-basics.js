//случаи когда мне нужно самому выбросить ошибку.
//----------------1.2 Cобственные ошибки----------------

// console.log("Привет! Я запустил этот код через Node.js 🚀");
// throw new Error('');

// try {
//   throw new SyntaxError("Ошибка синтаксиса, отвратительный у тебя код!");
// } catch (err) {
//   console.log("обработка ошибки", err);
// }



//-------------1.3 Фильтрация ошибок----------------

const errFn = () => {
  if (Math.random() < 0.3) {
    throw new SyntaxError('Ошибка сообщения от сервера');
  }
  return Math.floor(Math.random() * 100);
}

const getResult = () => {
  try {
    const result = errFn();
    return `Результат: ${result}`;
  } catch (err) {
    return 'Ошибка ответа от сервера!'
  }
}

console.log(getResult());
