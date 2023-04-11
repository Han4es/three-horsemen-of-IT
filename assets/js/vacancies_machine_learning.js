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
      $(`#${elementId}`).attr("href", `https://hh.ru/search/vacancy?text=${text}`);
    },
  });
}

document.addEventListener("DOMContentLoaded", function() {
  updateVacancyCount('Исследователь машинного обучения', 'ml-researcher');
  updateVacancyCount('Инженер машинного обучения', 'ml-engineer');
  updateVacancyCount('Специалист по обработке естественного языка', 'language_specialist');
  updateVacancyCount('Инженер-робототехник', 'eng-robot');
  updateVacancyCount('Инженер-программист машинного обучения', 'eng-progr-ml');
  updateVacancyCount('ML OPS инженер', 'ml-ops-eng');
});