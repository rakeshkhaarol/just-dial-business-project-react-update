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
          <ul className="nav">
            {
                getBusiness_Category.map((cv,idx,arr)=>{
                    return  <li key={idx} className=" pt-5 ps-3">
                                <Link to={"/search?cat_name="+cv.attributes.name} style={{ textDecoration: 'none', color: 'black' }}>
                                    <img className='homedesion' src={URL+cv.attributes.image.data.attributes.url} alt='' />
                                    <div className='pt-3 text-center'>{cv.attributes.name}</div>
                                    
                                </Link>
                            </li>
                })
            }
           
            
        </ul>
    </main>
  )
}

export default Home





