import Chart from 'https://dev.jspm.io/chart.js';
import { DATA } from './data.js';

function main() {
  const ctx = document.getElementById('chart');
  const questionSelectEl = document.getElementById('question');
  const livingOnRadioEls = document.getElementsByClassName('livingon-radio');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      dataset: []
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      title: {
        display: true,
        text: ''
      }
    }
  });

  let state = {
    selectedQuestionId: 0,
    selectedLivingOnGroupId: 0
  };
  function setState(newPartialState) {
    state = {
      ...state,
      ...newPartialState
    };
    renderChart();
  }

  function renderChart() {
    const { selectedQuestionId, selectedLivingOnGroupId } = state;
    const selectedQuestion = DATA.questions.find((question) => {
      return question.qID === selectedQuestionId;
    });
    const answersForSelectedQuestion = DATA.answers.filter((answer) => {
      return answer.qID === selectedQuestionId;
    });
    const countries = DATA.countries;
    answersForSelectedQuestion.sort((a, b) => {
      return a.cntryID - b.cntryID;
    });

    chart.data.labels = countries.map((country) => country.title);
    chart.data.datasets = [
      {
        label: 'Rural',
        data: answersForSelectedQuestion.map(
          (answer) => answer.values[selectedLivingOnGroupId][0]
        ),
        borderWidth: 1,
        backgroundColor: '#ffcc99'
      },
      {
        label: 'Urban',
        data: answersForSelectedQuestion.map(
          (answer) => answer.values[selectedLivingOnGroupId][1]
        ),
        borderWidth: 1,
        backgroundColor: '#ff9900'
      }
    ];

    chart.options.title.text = [
      selectedQuestion.title,
      selectedQuestion.title2,
      `Living on ${DATA.livingOn[selectedLivingOnGroupId]}`
    ];
    chart.update();
  }

  function renderQuestions() {
    questionSelectEl.innerHTML = '';
    const questionsGrouped = DATA.categories.map((category) => {
      return {
        cID: category.cID,
        name: category.name,
        questions: DATA.questions.filter((question) => {
          return question.cID === category.cID;
        })
      };
    });

    for (const group of questionsGrouped) {
      const questionGroupEl = document.createElement('optgroup');
      questionGroupEl.label = group.name;
      questionGroupEl.dataset.cid = group.cID;
      for (const question of group.questions) {
        const questionEl = document.createElement('option');
        questionEl.value = question.qID;
        questionEl.textContent = question.title;
        questionGroupEl.appendChild(questionEl);
      }
      questionSelectEl.appendChild(questionGroupEl);
    }
  }

  function handleQuestionSelect(event) {
    const selectedQuestionId = parseInt(event.target.value, 10);
    setState({
      selectedQuestionId
    });
  }

  function handleLivingOnInput(event) {
    const selectedLivingOnGroupId = parseInt(event.target.value, 10);
    setState({
      selectedLivingOnGroupId
    });
  }

  questionSelectEl.addEventListener('change', handleQuestionSelect);
  for (let i = 0; i < livingOnRadioEls.length; i++) {
    const livingOnRadioEl = livingOnRadioEls[i];
    livingOnRadioEl.addEventListener('input', handleLivingOnInput);
    if (i === 0) {
      livingOnRadioEl.checked = true;
    } else {
      livingOnRadioEl.checked = false;
    }
  }

  renderQuestions();
  renderChart(0);
}
main();
