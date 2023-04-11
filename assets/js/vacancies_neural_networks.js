function updateVacancyCount(text, elementId) {
  $.ajax({
    type: "GET",
    url: "https://api.hh.ru/vacancies",
    data: {
      'text': text
    },
    success: function (result) {
      const count = result['found'];
      $(`#${elementId}`).text(`${count} открытых вакансий на hh.ru`);
    },
  });
}

document.addEventListener("DOMContentLoaded", function() {
  updateVacancyCount('Разработчик нейросетей', 'neural-net-developer');
  updateVacancyCount('Исследователь в области нейросетей', 'neural-net-researcher');
  updateVacancyCount('Специалист по компьютерному зрению', 'computer-vision-specialist');
  updateVacancyCount('Инженер по глубокому обучению', 'deep-learning-engineer');
  updateVacancyCount('Специалист по рекомендательным системам', 'recommend-systems-specialist');
  updateVacancyCount('Инженер по естественному языку', 'natural-language-specialist');
});