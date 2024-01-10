
// 1번째 카드 정보 받기

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWJmMzllNTVkNzIyNzVlMzU5MjQ1ODkyYjI4YzhiNiIsInN1YiI6IjY1OTEzOTc0ZTY0MGQ2MDJlMmQ1NTlmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m2I5wF9VNjKizDCzI822Xc37I4FSyUQosoSd-Hj4lvM'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(response => response.json())
.then(response => (response['results'].forEach(row => {
  let cardAll = document.getElementById('card-all-container');

  let poster = row['poster_path'];
  let title = row['title'];  
  let vote = row['vote_average'];    
  let view = row['overview'];

  let temp_html = `<div class="card-container">
      <div class="card-item">
        <div><img src="https://image.tmdb.org/t/p/w500${poster}" class="img-size"></div>
      </div>
        <div class="card-item" id="card_all_info">
            <div>영화 제목 ${title}</div>
            <div>평점 ${vote}</div>
            <div>영화 설명 ${view}</div>
        </div>
      </div>`

    cardAll.innerHTML += temp_html
})
))


// 2번째 카드 정보 받기

const options1 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWJmMzllNTVkNzIyNzVlMzU5MjQ1ODkyYjI4YzhiNiIsInN1YiI6IjY1OTEzOTc0ZTY0MGQ2MDJlMmQ1NTlmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m2I5wF9VNjKizDCzI822Xc37I4FSyUQosoSd-Hj4lvM'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options1)
  .then(response => response.json())
  .then(response => (response['results'].forEach(row => {
    let cardAll1 = document.getElementById('card-all-container1');
  
    let poster1 = row['poster_path'];
    let title1 = row['title'];  
    let vote1 = row['vote_average'];    
    let view1 = row['overview'];
  
    let temp_html1 = `<div class="card-container1">
        <div class="card-item">
          <div><img src="https://image.tmdb.org/t/p/w500${poster1}" class="img-size"></div>
        </div>
          <div class="card-item" id="card_all_info">
              <div>영화 제목 ${title1}</div>
              <div>평점 ${vote1}</div>
              <div>영화 설명 ${view1}</div>
          </div>
        </div>`
  
      cardAll1.innerHTML += temp_html1
    })
    ));


    // alert 창 띄우기
    const options3 = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWJmMzllNTVkNzIyNzVlMzU5MjQ1ODkyYjI4YzhiNiIsInN1YiI6IjY1OTEzOTc0ZTY0MGQ2MDJlMmQ1NTlmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m2I5wF9VNjKizDCzI822Xc37I4FSyUQosoSd-Hj4lvM'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options3)
    .then(response => response.json())
    .then(response => (response['results'].forEach(row => {
      let movieID= row['id'];

      document.getElementById("card-all-container").onclick = function () {
        alert(`영화 ID :${movieID}`);
      };
     }
    ))
    );









    //node.innerHTML += title
    //node.innerHTML += vote
    //node.innerHTML += view
    // let node= document.createElement("div"); // node 요소를 만들고 div에 저장합니다.
    // cardAll.appendChild(temp_html); // cardAll에 node를 넣습니다.
  //console.log(poster);
  //console.log(poster);

    //let over = row['overview'];
    //const node1 =cardAll.createElement("p");
    
    //let poster = row['poster_path'];
    //const node2 =cardAll.createElement("p");
    
    //let vote = row['vote_average'];
    //const node3 =cardAll.createElement("p");
    





    //node.innerHTML += title
    //node.innerHTML += vote
    //node.innerHTML += view
    // let node= document.createElement("div"); // node 요소를 만들고 div에 저장합니다.
    // cardAll.appendChild(temp_html); // cardAll에 node를 넣습니다.
  //console.log(poster);
  //console.log(poster);

    //let over = row['overview'];
    //const node1 =cardAll.createElement("p");
    
    //let poster = row['poster_path'];
    //const node2 =cardAll.createElement("p");
    
    //let vote = row['vote_average'];
    //const node3 =cardAll.createElement("p");
    
