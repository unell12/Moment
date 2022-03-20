const quotes = [
    {
        quote: "때때로 포기하고 때때로 깽판치면 이 또한 기쁘지 아니한가?\n",
        eng: "Wouldn't it be fun to give up sometimes and screwing up every now and then?\n",
        author: "Super Troll Artemia"
    },
    {
        quote: "It dosen't works, Why?\n",
        eng: "It works, Why?\n",
        author: "someone who is developer"
    },
    {
        quote: "오류를 고치느니 차라리 시그너스 X - 1에 가겠다\n",
        eng: "I'd rather go to the Cygnus X-1 (Black Hole) than fix bugs\n",
        author: "artemia"
    }
]

const quote = document.querySelector("#quote span:first-child")
const eng = document.querySelector("#quote span:nth-child(2)")
const author = document.querySelector("#quote span:last-child")

const random = Math.floor(Math.random() * quotes.length)
quote.innerText = quotes[random].quote
eng.innerText = quotes[random].eng
author.innerText = "        - " + quotes[random].author