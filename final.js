var q1 = document.querySelector(".q1");
var q2 = document.querySelector(".q2");
var q3 = document.querySelector(".q3");
var q4 = document.querySelector(".q4");
var q5 = document.querySelector(".q5");

var form = document.getElementById("form");
var formName = document.getElementById("name-input").value;
var results1 = document.getElementsByName("salad").value;
var results2 = document.getElementsByName("ingredient").value;
var results3 = document.getElementsByName("dressing").value;
var results4 = document.getElementsByName("age").value;

var nameButton = document.querySelector(".name-button");
var q2Button = document.getElementById("q2-button");
var q3Button = document.getElementById("q3-button");
var q4Button = document.getElementById("q4-button");
var q5Button = document.getElementById("q5-button");

var survey = document.querySelector(".survey");
var end = document.querySelector(".end");

resultsButton = document.getElementById("results-button");

nameButton.addEventListener("click", function () {
  if (document.querySelector(".name-input").value.length > 1) {
    q1.style.display = "none";
    q2.style.display = "block";
    event.preventDefault();
    event.stopPropagation();
  } else if (document.querySelector(".name-input").value.length === 0) {
    console.log("this field is empty");
    alert("Please Enter Your Name");
  }
  formName = document.getElementById("name-input");
  console.log(formName.value);
});

q2Button.addEventListener("click", function () {
  q2.style.display = "none";
  q3.style.display = "block";
  event.preventDefault();
  event.stopPropagation();
  results1 = document.querySelector('input[name="salad"]:checked');
  console.log(results1.value);
});

q3Button.addEventListener("click", function () {
  q3.style.display = "none";
  q4.style.display = "block";
  event.preventDefault();
  event.stopPropagation();
  results2 = document.querySelector('input[name="ingredient"]:checked');
  console.log(results2.value);
});

q4Button.addEventListener("click", function () {
  q4.style.display = "none";
  q5.style.display = "block";
  event.preventDefault();
  event.stopPropagation();
  results3 = document.querySelector('input[name="dressing"]:checked');
  console.log(results3.value);
});
q5Button.addEventListener("click", function () {
  q4.style.display = "none";
  survey.style.display = "none";
  end.style.display = "block";
  event.preventDefault();
  event.stopPropagation();
  results4 = document.querySelector('input[name="age"]:checked');
  console.log(results4.value);
});

function results() {
  alert(
    "Your results are: " +
      formName.value +
      " " +
      results1.value +
      " " +
      results2.value +
      " " +
      results3.value +
      " " +
      results4.value
  );
}
resultsButton.addEventListener("click", results);
