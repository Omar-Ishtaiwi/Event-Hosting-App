function Event(props){
    return(
        <div>
         <div className='EventButton'>
             <div className="EventName">
                 {props.name}
             </div>
             <div className='EventDate'>
                {props.date}
             </div>
             <div className='EventTime'>
                {props.time}
             </div>
             <div className='EventLocation'>
                 {props.location}
             </div>
             <br></br>
             <div className='EventDesc'>
                 {props.desc}
             </div>
        </div>
        <br></br>
        </div>
       
        
    )
  }

  export default Event;