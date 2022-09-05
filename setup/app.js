//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (eachQues) {
    const eachBtn = eachQues.querySelector(".question-btn")
    eachBtn.addEventListener("click", function () {
        
        questions.forEach(function (item) {
            if (item != eachQues) {
                item.classList.remove("show-text");
            };
        });

        eachQues.classList.toggle("show-text");
    });
});





// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         console.log(e.currentTarget.classList)
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })
// })