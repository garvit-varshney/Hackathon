// JavaScr// Function to populate the spotlight section with articles
function populateArticles() {
  const articlesContainer = document.getElementById('articles-container');
  if (!articlesContainer) return;

  // Fetch articles from an API
  fetch('https://api.example.com/articles')
      .then(response => response.json())
      .then(articles => {
          articles.forEach(article => {
              const articleElement = document.createElement('div');
              articleElement.classList.add('article');
              
              const titleElement = document.createElement('h3');
              titleElement.textContent = article.title;
              
              const summaryElement = document.createElement('p');
              summaryElement.textContent = article.summary;
              
              articleElement.appendChild(titleElement);
              articleElement.appendChild(summaryElement);
              
              articlesContainer.appendChild(articleElement);
          });
      })
      .catch(error => console.error('Error fetching articles:', error));
}

// BMI Calculator
function setupBMICalculator() {
  const form = document.getElementById('bmi-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const height = document.getElementById('height').value / 100; // cm to m
      const weight = document.getElementById('weight').value;
      const bmi = weight / (height * height);
      document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;
  });
}

// GAD Assessment
function setupGADAssessment() {
  const form = document.getElementById('gad-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      let score = 0;
      for (let i = 1; i <= 7; i++) {
          score += parseInt(form[`q${i}`].value);
      }
      document.getElementById('gad-result').textContent = `Your GAD-7 score is ${score}`;
  });
}

// Symptom Tracker
function setupSymptomTracker() {
  const form = document.getElementById('symptom-form');
  const list = document.getElementById('symptom-list');
  if (!form || !list) return;

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const symptom = document.getElementById('symptom').value;
      const severity = document.getElementById('severity').value;
      const date = document.getElementById('date').value;

      const listItem = document.createElement('div');
      listItem.textContent = `${date}: ${symptom} (Severity: ${severity})`;
      list.appendChild(listItem);

      form.reset();
  });
}

// Call setup functions when the page loads
window.onload = function() {
  populateArticles();
  setupBMICalculator();
  setupGADAssessment();
  setupSymptomTracker();
};ipt for interactive elements can go here (currently none)