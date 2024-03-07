const color = ["зеленый", "синий", "красный", "серый"]
const choice = ["нравится", "не нравится", "не очень нравится"]
let randomColor = color[Math.floor(Math.random() * 4)]
let randomChoice = choice[Math.floor(Math.random() * 3)]
let result = "Мне " + randomChoice + " " + randomColor + " " + "цвет."

console.log(result)
