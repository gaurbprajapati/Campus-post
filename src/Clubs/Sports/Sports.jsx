import React from 'react'

import Programming from '../../assets/cludclub.jpeg'

// import { Sportclub } from '../../Data'
import ClubPrototype from '../../Components/ClubPrototype'
const Sports = () => {
    const Sportclub ={
        id: 1,
        clubname: "Sport Club",
        clubbg:Programming,
        discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eligendi laborum voluptatum eius accusamus exercitationem facere debitis dolor magnamminus.",
        studentcodinators: {
            president: "Rama Ram", 
            visepresident: "Raju Raj",
            clubmember: ["Papu", 'bolu']
        },
        facalitycodinators: ["facality1", "Facality2"],
        clubCommunity: ['whatuplink', 'discodelink']
    }

    return (

        <div >
            <ClubPrototype clubdata={Sportclub} />    
        </div>




    )
}

export default Sports