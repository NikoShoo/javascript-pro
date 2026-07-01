//случаи когда мне нужно самому выбросить ошибку.
//собственные ошибки



throw new Error = ("это обьект ошибки! - об этом чуть позже");

const err1 = new SyntaxError("Ошибка синтаксиса");
console.dir(err1);

const err2 = new SyntaxError("Ошибка типа");
console.dir(err2);

