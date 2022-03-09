console.log('News Website');

getNews();
function getNews(){
  let html = ''
  let indiaNews = new XMLHttpRequest();
  
  // Open indiaNews
  indiaNews.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0ed67480b4c844239a7e44753cc74140',true);
  
  // On Progress
  indiaNews.onprogress = function(){
      document.getElementById('accordion').innerHTML +=  `Loading...`
  }
  
  // When Response is Ready
  indiaNews.onload = function(){
      if(this.status == 200){
        let news = JSON.parse(indiaNews.responseText)
      console.log(news)
      Array.from(news.articles).forEach(function(element,index){
        console.log(element.content);
          html +=  `
          <div class="accordion-item">
          <h2 class="accordion-header accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#news${index}" aria-expanded="false" aria-controls="flush-collapseOne">
          <b>${element.title}</b>
          <img src="${element.urlToImage}" alt="Image Not Found">
          </h2>
          <div id="news${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <h3>${element.description}</h3>
            ${element.content} 
            </div>
          </div>
        </div>`
        document.getElementById('accordion').innerHTML = html
      })
      }
      else{
        document.getElementById('accordion').innerHTML = `Sorry Some error Occured`
      }
      
  }
  indiaNews.send();
  let appleNews = new XMLHttpRequest();
  
  // Open appleNews
  appleNews.open('GET', 'https://newsapi.org/v2/everything?q=apple&from=2022-03-08&to=2022-03-08&sortBy=popularity&apiKey=0ed67480b4c844239a7e44753cc74140',true);
  
  // On Progress
  appleNews.onprogress = function(){
      document.getElementById('accordion').innerHTML +=  `Loading...`
  }
  
  // When Response is Ready
  appleNews.onload = function(){
      if(this.status == 200){
        let news = JSON.parse(appleNews.responseText)
      // let html = '';
      console.log(news)
      Array.from(news.articles).forEach(function(element,index){
        console.log(element.content);
          html +=  `
          <div class="accordion-item">
          <h2 class="accordion-header accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#news${index}" aria-expanded="false" aria-controls="flush-collapseOne">
          <b>${element.title}</b>
          <img src="${element.urlToImage}" alt="Image Not Found">
          </h2>
          <div id="news${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <h3>${element.description}</h3>
            ${element.content} 
            </div>
          </div>
        </div>`
        document.getElementById('accordion').innerHTML = html
      })
      }
      else{
        document.getElementById('accordion').innerHTML = `Sorry Some error Occured`
      }
  }
  appleNews.send();
  let techNews = new XMLHttpRequest();
  
  // Open techNews
  techNews.open('GET', 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ed67480b4c844239a7e44753cc74140',true);
  
  // On Progress
  techNews.onprogress = function(){
      document.getElementById('accordion').innerHTML +=  `Loading...`
  }
  
  // When Response is Ready
  techNews.onload = function(){
      if(this.status == 200){
        let news = JSON.parse(techNews.responseText)
      console.log(news)
      Array.from(news.articles).forEach(function(element,index){
        console.log(element.content);
          html +=  `
          <div class="accordion-item">
          <h2 class="accordion-header accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#news${index}" aria-expanded="false" aria-controls="flush-collapseOne">
          <b>${element.title}</b>
          <img src="${element.urlToImage}" alt="Image Not Found">
          </h2>
          <div id="news${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <h3>${element.description}</h3>
            ${element.content} 
            </div>
          </div>
        </div>`
        document.getElementById('accordion').innerHTML = html
      });
      }
      else{
        document.getElementById('accordion').innerHTML = `Sorry Some error Occured`
      }
  }
  techNews.send();
}


