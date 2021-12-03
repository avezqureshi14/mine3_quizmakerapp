//selecting all the required elements

const start_btn_container = document.querySelector(".start_btn_container");
const infocontcontainer = document.querySelector(".infocontcontainer")
const exit_btn = infocontcontainer.querySelector(".exit_btn")
const continue_btn = infocontcontainer.querySelector(".continue_btn_container")
const quizboxcontainer = document.querySelector(".quizboxcontainer")
const outro_container = document.querySelector(".outro_container")

//if start_btn button is clicked


start_btn_container.onclick = () => {
    infocontcontainer.classList.add("activeinfocontcontainer"); //show info box
}
exit_btn.onclick = () => {
    infocontcontainer.classList.remove("activeinfocontcontainer"); //show info box
}
continue_btn.onclick = () => {
    infocontcontainer.classList.remove("activeinfocontcontainer"); //show info box
    quizboxcontainer.classList.add("activequizboxcontainer"); //show Quiz box
    showquestions(0);
    quesCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quizboxcontainer.querySelector(".next_btn_container")
const footer_left = quizboxcontainer.querySelector(".footer_left")
next_btn.onclick = () => {
    if (que_count < (questions.length - 1)) {
        que_count++;
        que_numb++;
        showquestions(que_count);
        quesCounter(que_numb);
    }
    else {
        console.log("Questions Completed")
    }
}




//getting questions and options from array
function showquestions(index) {
    const j_text = document.querySelector(".j_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].number + "." + questions[index].question + '</span>';
    let opt_tag =
        '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>'
    j_text.innerHTML = que_tag;
    option_list.innerHTML = opt_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");

    }
}


function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    const alloptions = option_list.children.length;
    const option_list = document.querySelector(".option_list");
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is correct");
    }
    else {
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
        //if answer is incorrect then automatically select the right answer
        for (let i = 0; i < alloptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }


        //once user selected disabled all options
        for (let i = 0; i < alloptions; i++) {
            option_list.children[i].classList.add("disabled");
        }
    }

}

    function quesCounter(index) {
       
        let Total_Question_Tag = '<span><p>' + index + '</p> <p>of</p><p>' + questions.length + '</p><p> Questions</p> </span>'
        footer_left.innerHTML = Total_Question_Tag;
    }
