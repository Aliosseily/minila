// ||                     Header                   ||
// ||         projectRendered(projectsList)        ||
// ||         (mapProjects function render         ||
// ||         the projects from the list to        ||
// ||                   there form)                ||

var Header = "";
var projectsList = "";
var projectsRendered = "";
var formal_education = document.getElementById('Non-formal-education-arabic')

function mapProjects() {
  var projectsList = [
    {
      id: 1,
      title: 'لقاء',
      description: "الهدف الاساسي من المشروع هو الاضاءة على قضايا مصيرية في البلد، والنقاش فيها لأن نكون أكثر وعيا لأهميتها والعمل من اجل تطوير الايجابي منها من خلال لقاءات متتالية.",
      Partner:  "من إلى",
      ImplementationPeriod:  "١ نيسان ٢٠١٨ – جاري التنفيذ",
      photo: "images/projects/Lika.jpg",
      gallery:"https://photos.app.goo.gl/X3FtXQeppha9vJKL2"

    },
    {
      id: 2,
      title: ' التربية المدنية من خلال الفن والريضة',
      description: "هدف المشروع هو تعزيز المعرفة والمشاركة المدنية للشباب القادمين من ثلاث مدارس حكومية: عاليه وبيت شباب وصيدا. وقد أتاح هذا المشروع الفرصة لهم لاستكشاف أنشطة جديدة والتعبير عن أنفسهم من خلال وسائل إبداعية متنوعة وبديلة، مثل التصوير الفوتوغرافي وفنون الغرافيتي في الشوارع وكرة السلة وركوب الدراجات في المدينة. بالإضافة إلى ذلك، شارك الشباب في المناقشات التفاعلية والمحادثات الشيقة مع أشخاص تغلبوا على التحديات والعقبات في حياتهم، وبالتالي أثروا إيجابيا في عملية تعلمهم.g ",
      Budget: " ٢٧ ألف دولار",
      Donor: " السفارة السويسرية في لبنان",
      Partner:  "من إلى",
      ImplementingPartners: " ديفالوبمنت اند بيوند، ذا شاين افكت وفرايم",
      ImplementationPeriod:  "٢٥ كانون الثاني ٢٠١٧ – ٢٥ تشرين الثاني ٢٠١٧",
      photo: "images/projects/CETAS.jpg",
      gallery: 'https://photos.app.goo.gl/6xwlETHU8CB3uP082'
    },
    {
      id: 3,
      title: ' التعلم من أجل السلام',
      description: "هذا المشروع الذي تم إنجازه على سنة يستهدف خمسة مدارس من صور، صيدا، عااليه، جونيه وبيروت. الهدف منه كان منع العنف، تبني التعديدية الثقافية وتعزيز التربية المدنية بواسطة العمل على حل النزاعات مع أكثر من ٣٠٠ تلميذ، ٥٠ من أهالي الطلاب وأكثر من ٤٠ معلم/ة في جميع أنحاء لبنان. المشروع يتميز بفاعلية مستمرة للتلاميذ، وتدريب المعلمين/ات وورش عمل للأهل على مدار مستمر. في هذا المشروع، نستهدف الحوار الثقافي والديني، القيم الديمقراطية والتفكير النقدي. إنها تمثل خطوة أولى نحو حيث يواجه المواطنين/ات مشاكل مجتمع اليوم وبالتالي خلق أرضية لإرتقاء مستقبلي.",
      Budget: "١٥٠ الف دولار",
      Donor: "مبادرة الشراكة الشرق أوسطية للسفارة الاميركية",
      Partner: "  مدرسة جنة الاطفال",
      ImplementingPartners:  " من إلى وسويًّا",
      ImplementationPeriod:  "١ تشرين الأول ٢٠١٦ حتى ٣٠ أيلول ٢٠١٧",
      photo: "images/projects/Educating for Peace.jpg",
      gallery:"https://photos.app.goo.gl/ddgnB4dj3KPhdXV52"
    }



  ]
  for (i = 0; i < projectsList.length; i++) {
    if (projectsList[i].Budget || projectsList[i].Donor || projectsList[i].ImplementingPartners){
    projectsRendered += `
      <div  class="ui items">
        <div class="item projects">
          <div class="ui small image" style="margin-left: 1.5em;">
            <img src="`+ projectsList[i].photo + `">
          </div>
          <div class="middle aligned content">
            <div class="header">
              `+ projectsList[i].title + `
            </div>
            <div class="description">
              <p class="arabic">`+ projectsList[i].description + '<br><br>' + ' <b>ميزانية المشروع:</b> ' + projectsList[i].Budget + '<br/> <b>الممول:</b>' + projectsList[i].Donor + '<br/> <b>الشريك الرئيسي:</b>' + projectsList[i].Partner + '<br/> <b>شركة المشروع:</b>' + projectsList[i].ImplementingPartners + '<br/> <b>وقت التنفيذ:</b>' + projectsList[i].ImplementationPeriod + `</p>
            </div>
            
            
            <div class="extra">
              <a href=`+projectsList[i].gallery+`>
                <button class="btn white-btn">الصور</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      `}
      else{
        projectsRendered += `
        <div  class="ui items">
          <div class="item projects">
            <div class="ui small image" style="margin-left: 1.5em;">
              <img src="`+ projectsList[i].photo + `">
            </div>
            <div class="middle aligned content">
              <div class="header">
                `+ projectsList[i].title + `
              </div>
              <div class="description">
                <p class="arabic">`+ projectsList[i].description + '<br><br>'+ '<br/> <b>الشريك الرئيسي:</b>' + projectsList[i].Partner + '<br/> <b>وقت التنفيذ:</b>' + projectsList[i].ImplementationPeriod + `</p>
              </div>
              
              
              <div class="extra">
                <a href=`+projectsList[i].gallery+`>
                  <button class="btn white-btn">الصور</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        `
      }
  }
}

function renderNow() {
  Header = `<h4>الأهداف</h4>
            <p class="arabic">
            من إلى تسعى الى تمتين ودعم العلاقات مع وزارة التربية والتعليم العالي فيما يتعلق بالتربية المدنية بالمناهج الرسمية. إننا نتصور منهاجاً يؤسس ويعزز التربية المدنية بالتعليم الرسمي من خلال طرق تفاعلية جماعية ومبتكرة. بالتعاون مع الوزارة، نهدف لإلهام التلاميذ بالانخراط بهذا الموضوع على مستوى جديد. هذا قد يؤدي لتطبيق فعال للتربية المدنية بالمنهاج الوطني الذي يمهد الطريق للأجيال المستقبلية. </p>
            <h4>المشاريع</h4>`
  mapProjects();
  formal_education.innerHTML = Header + projectsRendered
}

renderNow();