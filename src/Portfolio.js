import './Portfolio.css'
import MyButton from './MyButton'
function Portfolio({image , firstName , lastName, jobTitle , articles , followers , ratings}){
    return(
        <div className="portfolio">
            <img src = {image}/>
            <div className="informations">
                <div className="fullName">
                    <h2>{firstName}</h2>
                    <h2>{lastName}</h2>
                </div>
                <h3>{jobTitle}</h3>
                <div className="statistics">
                    <div>
                        <h2 style={{marginBottom : '10px'}}>Articles</h2>
                        <p>{articles}</p>
                    </div>
                    <div>
                        <h2 style={{marginBottom : '10px'}}>Followers</h2>
                        <p>{followers}</p>
                    </div>
                    <div>
                        <h2 style={{marginBottom : '10px'}}>Ratings</h2>
                        <p>{ratings}</p>
                    </div>

                </div>
                <div className='buutons'>
                     <MyButton click='chat'/>
                    <MyButton click='follow'/>
                </div>
               
            </div>
        </div>
    )
}
export default Portfolio