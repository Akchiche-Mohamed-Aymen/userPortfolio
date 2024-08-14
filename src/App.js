import './App.css';
import Portfolio from './Portfolio';
const users = [
  {
    image : "https://th.bing.com/th/id/OIP.OTI_3okyp2HLDnWXpyLW5QHaHa?rs=1&pid=ImgDetMain",
    firstName : "Cristiano",
    lastName : "Ronaldo",
    jobTitle : "Attacker Football Player",
    articles : 100 , followers : "30M" , ratings: 9.7
  },
  {
    image : "https://e0.pxfuel.com/wallpapers/923/986/desktop-wallpaper-kylian-mbappe-real-madrid-mbappe-2022.jpg",
    firstName : "Kylyan",
    lastName : "Mbappe",
    jobTitle : "Attacker Football Player",
    articles : 56 , followers : "4M" , ratings: 9.8
  },
  {
    image : "https://i.pinimg.com/736x/41/5c/18/415c1892e9cc62aa39c771b05269937c.jpg",
    firstName : "Fedirico",
    lastName : "Valverdi",
    jobTitle : "Middle Football Player",
    articles : 86 , followers : "30M" , ratings: 9.9
  },
  {
    image : "https://th.bing.com/th/id/OIP.7KRIaeVSRPETT0ltOxSG2AAAAA?rs=1&pid=ImgDetMain",
    firstName : "Jod",
    lastName : "Bellingham",
    jobTitle : "Middle Football Player",
    articles : 70 , followers : "30M" , ratings: 8.7
  }
]
for(let i = 0 ;  i < users.length ; i++)
  users[i].id = i

const usersList = users.map(( user)=>{
  return  <Portfolio image={user.image}
        firstName ={user.firstName} lastName = {user.lastName} jobTitle ={user.jobTitle} key={user.id}
        articles={user.articles} followers={ user.followers } ratings={ user.ratings}
         />
})

function App() {
  return (
    <div className="App">
        <div className='conteiner'>
           {usersList}
        </div>
    </div>
  );
}

export default App;
