const color = ["зеленый", "синий", "красный", "серый"]
const choice = ["нравится", "не нравится", "не очень нравится"]
let randomColor = color[Math.floor(Math.random() * color.length)]
let randomChoice = choice[Math.floor(Math.random() * choice.length)]
let result = ["Мне", randomChoice, randomColor, "цвет."]

console.log(result.join(" "))
