import Chart from 'https://dev.jspm.io/chart.js';
import { DATA } from './data.js';

// TODO: Provide option to select other questions

function main() {
  const ctx = document.getElementById('chart');
//   console.log('DATA', DATA);
  const selectedQuestionId = 0;
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

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: countries.map((country) => country.title),
      datasets: [
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
      ]
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
        text: [selectedQuestion.title, selectedQuestion.title2]
      }
    }
  });
}
main();
