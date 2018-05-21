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
      title: 'Lika',
      description: "The project aims to shed the light on critical issues and causes in this country, in order to discuss them and raise awareness around them and ultimately fight for them. It is through a gathering “Lika’” that these issues are discussed among participants coming from all over the country.",
      Partner:  "Min ila",
      ImplementationPeriod:  "April 1, 2018 - Ongoing",
      photo: "images/projects/Lika.jpg",
      gallery:""

    },
    {
      id: 2,
      title: 'Civic Education through Arts and Sports',
      description: "The project aims at promoting civic knowledge and civic engagement for disadvantaged youth coming from three public schools: Aley, Beit Chabeb and Saida. This project created the opportunity for them to explore new activities as well as express themselves through creative and alternative mediums, such as photography documentation, street art, basketball and city cycling ",
      Donor: "The Embassy of Switzerland in Lebanon",
      Partner:  "Min ila",
      ImplementingPartners: " Development and Beyond, The Chain Effect and Frame",
      ImplementationPeriod:  "January 25, 2017 - November 25, 2017",
      photo: "images/projects/CETAS.jpg",
      gallery: ''
    },
    {
      id: 3,
      title: 'Educating for Peace',
      description: "This one year project targeted five schools from Sour, Saida, Aley, Jounieh and Beirut. The goal was to prevent violence, foster cultural pluralism and promote civic education through working on conflict resolution with over 300 children, 50 parents and more than 40 teachers throughout Lebanon. The project was characterized by dynamic platforms for students, trainings for teachers and workshops for parents on a regular basis. In this project we tackled intercultural and interreligious dialogue, democratic values and critical thinking. It resembles a first step towards “Global Education” in which citizens are embraced with the problems of today’s society and thus creating a ground for future progress",
      Budget: "150,000$",
      Donor: "MEPI - Middle East Partnership Initiative of the U.S. Embassy",
      Partner: " Paradis d’Enfants",
      ImplementingPartners:  "Min ila and Sawiian",
      ImplementationPeriod:  "October 1, 2016 - September 30, 2017",
      photo: "images/projects/Educating for Peace.jpg",
      gallery:""
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
              <p>`+ projectsList[i].description + '<br><br>' + ' <b>Buddget:</b> ' + projectsList[i].Budget + '<br/> <b>Donor:</b>' + projectsList[i].Donor + '<br/> <b>Lead Partner:</b>' + projectsList[i].Partner + '<br/> <b>Implementing Partners:</b>' + projectsList[i].ImplementingPartners + '<br/> <b>Implementing Period:</b>' + projectsList[i].ImplementationPeriod + `</p>
            </div>
            
            
            <div class="extra">
              <a href=`+projectsList[i].gallery+`>
                <button class="btn white-btn">Photos</button>
              </a>
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