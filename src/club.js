function Club(props){
    return(
        <div>
         <div className='Club'>
             <div className="ClubName">
                 {props.name}
             </div>
             <br></br>
             <br></br>
             <div className='ClubDesc'>
                {props.Desc}
             </div>
             <br></br>
             <br></br>

             <div className='ClubSocials'>
                {props.socials}
             </div>
             <br></br>
             <br></br>

             <div className='ClubWebsite'>
                 {props.website}
             </div>
            
        </div>
        </div>
       
        
    )
  }

  export default Club;