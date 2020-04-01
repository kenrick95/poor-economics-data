import Chart from 'https://dev.jspm.io/chart.js';
import { DATA } from './data.js';

function main() {
  const ctx = document.getElementById('chart');
  const questionSelectEl = document.getElementById('question');

  let state = {
    selectedQuestionId: 0
  };

  function setState(newPartialState) {
    state = {
      ...state,
      ...newPartialState
    };
    renderChart();
  }
  //   console.log('DATA', DATA);

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

  function renderChart() {
    const { selectedQuestionId } = state;
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
        // TODO: Provide option to select other "Living on" group
        data: answersForSelectedQuestion.map((answer) => answer.values[0][0]),
        borderWidth: 1,
        backgroundColor: '#ffcc99'
      },
      {
        label: 'Urban',
        data: answersForSelectedQuestion.map((answer) => answer.values[0][1]),
        borderWidth: 1,
        backgroundColor: '#ff9900'
      }
    ];

    chart.options.title.text = [
      selectedQuestion.title,
      selectedQuestion.title2
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
  questionSelectEl.addEventListener('change', handleQuestionSelect);

  renderQuestions();
  renderChart(0);
}
main();
