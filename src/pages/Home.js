//import area
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { URL } from '../helpers/Helper';


//definetion area
function Home() {
    //2.1 hooks area
    //const[varibleName,setVaribleName] = useState['iniatialValue']
    const [getBusiness_Category,setgetBusiness_Category] =useState([])


    //every hooks is a function 
    useEffect(()=>{
        fetch(`${URL}/api/business-categories?populate=*`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log("besiness------..,>>>>>>>>>>>",data.data)
            setgetBusiness_Category(data.data)
            
        })
        .catch(()=>{})
    },[])

    //2.2 function definetion arae




    //2.3 return statments
  return (
    <main>
      <Link className='box nav mt-4 ms-3 '>
        {
          getBusiness_Category.map((cv,idx,arr)=>{
              return <ul  className=' nav nav-link '>
                        <li key={idx} className="me-3 homedesion" >
                          <img  src ={URL+cv.attributes.image.data.attributes.url} alt='' />
                        </li>
                        <li className='textdesion text-center pt-2 '>
                          {cv.attributes.name}
                        </li>
                    </ul>
                  })
        }
        
      </Link>
    </main>
  )
}

export default Home