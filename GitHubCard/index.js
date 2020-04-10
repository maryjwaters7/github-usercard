/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const gitObj = axios.get('https://api.github.com/users/maryjwaters7')
//   .then(response => {
//       const gitData = (response.data)
//       // console.log(gitData)
//       return(gitData)
//   })
//   .catch(error => {
//     console.log('error:', err);
//   })



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['SandraCoburn', 'liamcox', 'jonush', 'msheets1983', 'code-dependent', 'tetondan',
 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function make(selector) {
  return document.createElement(selector);
};

const entry = document.querySelector('.cards');

const createCard = ({login, avatar_url, html_url, name, location, bio, followers, followers_url, following, following_url}) => {
  const card = make('div')
  const cardImg = make('img')
  const cardInfo = make('div')
  const cardName = make('h3')
  const userName = make('p')
  const loca = make('p')
  const profile = make('p')
  const link = make ('a')
  const cardFollowers = make('p')
  const cardFollowing = make('p')
  const cardBio = make('p')
  
  //structure
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(loca)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  //classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  userName.classList.add('username')
 
  

  //content
  cardImg.src = avatar_url
  cardName.textContent = `${name}`
  userName.textContent = `${login}`
  loca.textContent = `${location}`
  profile.textContent = `Profile: `
  console.log(profile)
  profile.appendChild(link)
  link.href = html_url
  link.text = `View`
  console.log(link)
  console.log(profile)
  cardFollowers.textContent = `Followers: ${followers}`
  cardFollowing.textContent = `Following: ${following}`
  cardBio.textContent = `Bio: ${bio}`

  return card
};


axios.get('https://api.github.com/users/maryjwaters7')
  .then (
    response => {
      console.log(response);
      const gitData = response.data;
      console.log(gitData)
      entry.appendChild(createCard(gitData));
    }
  )
  .catch (
    error => {
      console.log(error)
    }
  )



// ****

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
function getArray(array) {
  for (let i = 0; i < array.length; i++) {
    axios.get(`https://api.github.com/users/${array[i]}`)
      .then (
        response => {
          const newGitData = response.data;
    
          entry.appendChild(createCard(newGitData));
        })
      .catch (
        error => {
          console.log(error)
        })
  }}

getArray(followersArray);