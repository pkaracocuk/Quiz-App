const quizData = [
    {
        question: 'Hangi sorunun muhatabı genellikle çocuklardır?',
        a: 'Kaç gün kaldı?',
        b: 'Kaçta gelirsin?',
        c: 'Kaç gibi biter?',
        d: 'Kaça gidiyorsun?',
        correct: 'd',
    },
    {
        question: 'Becerikli,zeki,güçlü anlamında kullanılan kelime hangisidir? ',
        a: 'Temkinli',
        b: 'Dirayetli',
        c: 'Görgülü',
        d: 'Sıhhatli',
        correct: 'b',
    },
    {
        question: 'Hangi enstrüman hem dizlerin arasına hem koltuk altına konularak çalınır',
        a: 'Kanun',
        b: 'Keman',
        c: 'Klarnet',
        d: 'Darbuka',
        correct: 'd',
    },
    {
        question: 'Masal sonlarında, karakterlerin ne kadarlık süre boyunca mutlu yaşadıklarını öğreniriz?',
        a: 'Üç vakte kadar',
        b: 'Kırk gün kırk gece',
        c: 'Sonsuza kadar',
        d: 'Ay sonuna kadar',
        correct: 'c',
    },
    {
        question: 'Bir trilyonda kaç adet sıfır vardır?',
        a: '6',
        b: '9',
        c: '12',
        d: '15',
        correct: 'c',
    },
]


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer")
const questionEls = document.getElementById('question')
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]


    deselectedAnswers()
    questionEls.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function deselectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}



submitBtn.addEventListener("click", () => {
    const answer = getSelected()


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++



        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
    <h2>Test tamamlandı, ${score * 20} puan aldınız 🥳 </h2>
    <button class='submit' onClick="location.reload()"> Tekrar Dene 😔</button>
    `
        }
    }
})
