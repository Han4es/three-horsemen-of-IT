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
  updateVacancyCount('Data Scientist', 'data-scientist');
  updateVacancyCount('Data Analyst', 'data-analyst');
  updateVacancyCount('Data Engineer', 'data-engineer');
  updateVacancyCount('Big Data Engineer', 'big-data-engineer');
  updateVacancyCount('Database Administrator', 'database-admin');
  updateVacancyCount('Data Architect', 'data-architect');
});