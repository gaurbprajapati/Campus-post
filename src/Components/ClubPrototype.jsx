import React from 'react'

const ClubPrototype = ({clubdata}) => {

    const {clubname, clubbg, discription, studentcodinators, facalitycodinators} = clubdata;
  return (
    <div>
 
<img src={clubbg} alt={clubname} />
            <h1>{clubname}</h1>
            <h4>{discription}</h4>

          <div>
    
            <h2>Club Member </h2>
            <h3>Student Coordinators</h3>
            <h2>President:- {studentcodinators.president}</h2>
            <h2>VisePresident:- {studentcodinators.visepresident}</h2>
            <h2>Club Member : -</h2>
            {studentcodinators.clubmember.map((member,index) => {
                return (
                  <h3 key={index}>{member}</h3>
                )
              })}
        </div>

        <div>
            <h2>Facality Coordinators</h2>
            {
                facalitycodinators.map((member,index) =>{
                    return(
                        <h3 key={index}>{member}</h3>
                    )
                })}

        </div> 
        
        {/* <div>
            <h2>club Community</h2>
            {
                clubCommunity.map((member,index) =>{
                    return(
                        <h3 key={index}>{member}</h3>
                    )
                })}

        </div> */}

        <h1>Hello I am Club Prototype</h1>


    </div>
  )
}

export default ClubPrototype