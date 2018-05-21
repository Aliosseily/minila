// ||                     Header                   ||
// ||         projectRendered(projectsList)        ||
// ||         (mapProjects function render         ||
// ||         the projects from the list to        ||
// ||                   there form)                ||

var Header = "";
var projectsList = "";
var projectsRendered = "";
var formal_education = document.getElementById('Non-formal-education-1')

function mapProjects() {
  var projectsList = [
    {
      id: 1,
      title: 'Educating for Peace',
      description: "This one year project targeted five schools from Sour, Saida, Aley, Jounieh and Beirut. The goal was to prevent violence, foster cultural pluralism and promote civic education through working on conflict resolution with over 300 children, 50 parents and more than 40 teachers throughout Lebanon. The project was characterized by dynamic platforms for students, trainings for teachers and workshops for parents on a regular basis. In this project we tackled intercultural and interreligious dialogue, democratic values and critical thinking. It resembles a first step towards “Global Education” in which citizens are embraced with the problems of today’s society and thus creating a ground for future progress",
      photo: "random.png",
      Budget:"150,000$"
    },
    {
      id: 2,
      title: 'Content A',
      description: "Min ila is continuously looking for cooperation and collective engagement on the matter of Civic Education in the framework of its Formal Educational Program. We are in the process of writing and elaborating new projects to evolve and further our program.",
      photo: "random.png"
    }
  ]
  for (i = 0; i < projectsList.length; i++) {
    projectsRendered += `
      <div class="ui items">
        <div class="item projects">
          <div class="ui small image">
            <img src="`+ projectsList[i].photo + `">
          </div>
          <div class="middle aligned content">
            <div class="header">
              `+ projectsList[i].title + `
            </div>
            <div class="description">
              <p>`+ projectsList[i].description + `</p>
            </div>
            
            <div class="extra">
              <button class="btn white-btn">Photos</button>
              <button class="btn white-btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
      `
  }
}

function renderNow() {
  Header = `<h4>Objectives</h4>
            <p>
                Min ila supports and aims to further strengthen relations with the Ministry of Education and Higher Education in
              Lebanon with regard to Civic Education in the national curriculum. We envision a curriculum that promotes and
              fosters Civic Education in formal education through interactive, innovational and collective methods. In cooperation
              with the Ministry we aim to inspire students to engage with the topic on a new level. This would lead to an efficient
              implementation of Civic Education in the national curriculum that paves the path for future generations. </p>
            <h4>Projects</h4>`
  mapProjects();
  formal_education.innerHTML = Header + projectsRendered
}

renderNow();