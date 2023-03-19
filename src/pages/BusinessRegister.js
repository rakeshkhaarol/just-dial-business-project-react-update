//1. import area
import React, { useEffect,useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Url from '../help/Url';


//2. definetion area
function BusinessRegister() {
    //2.1 hooks area
    const [country,getCountry]=useState([])
    const [state,getState]=useState([])
    const [cities,getCities]=useState([])
    const [businessCategories,getBusinessCategories]=useState([])


    


    useEffect(()=>{

        //coll the country api 
        fetch(`${Url}/api/countries`)
        .then((res)=>{
            return res.json()
        })
        .then((countriydata)=>{
            console.log('countries---->>>>>>',countriydata.data)
            getCountry(countriydata.data)
        })
        .catch((err)=>{
            console.log(err)
        })


       


        //coll the business_catrgory api 
        fetch(`${Url}/api/business-categories`)
        .then((res)=>{
            return res.json()
        })
        .then((businescetesdata)=>{
            console.log('business category ----->>>>>>>',businescetesdata.data)
            getBusinessCategories(businescetesdata.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    //2.2 function definetion arae
    let Bres=(e)=>{
        //alert('hhhh')

        e.preventDefault();

        let bn = document.querySelector('[name="Business_name"]').value
        console.log( 'hhhhhhhhhhhhhhhhh',bn)
        let cid = document.querySelector('[name="city__id"]').value
        let bcid = document.querySelector('[name="busi_cat_id"]').value

    
        let payload =   {
                        "data": {
                            "name": bn,
                            "business_category":bcid,
                            "cities": [
                                cid
                                ]
                            }
                    }

        //coll the business category (bres)api 

        
            fetch(`${Url}/api/businesses`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)
            })
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                alert("Business Registered Succesffully");
            })
            .catch()           
        

    }



    var seeState=(e)=>{
        //alert("heeeee")
        
        let targetvalue = e.target.value
        
        console.log('e-----.............>>>>>>>>>>>',targetvalue)

         //coll the state api 
         fetch(`${Url}/api/states?filters[country][id][$eq]=${targetvalue}`)
         .then((res)=>{
             return res.json()
         })
         .then((statedata)=>{
             console.log('states---->>>>>>',statedata.data)
             getState(statedata.data)
         })
         .catch((err)=>{
             console.log(err)
        })
 

    }


    let seeCitys = (e) =>{

        console.log('e-->>>>>',e.target.value)

        
        //coll the city api 
        fetch(`${Url}/api/cities?filters[state][id][$eq]=${e.target.value}`)
        .then((res)=>{
            return res.json()
        })
        .then((citydata)=>{
            console.log('city---->>>>>>',citydata.data)
            getCities(citydata.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }


    //2.3 return statments
  return (
    <>
        <main>
            <h1 className='text-center'>Business Registeretion Form</h1>
            <Form className='w-50 ' >
                <Form.Group>
                    <Form.Label>country</Form.Label>
                    <Form.Select name='country_id' aria-label="Default select example" onChange={(e)=>{seeState(e)}}>
                        {
                            country.map((cv,idx,arr)=>{
                                return <option key={idx}  value={cv.id} > {cv.attributes.name}</option>
                            })
                        }
                        
                        
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>States</Form.Label>
                    <Form.Select name='States_id' aria-label="Default select example " onChange={(e)=>{seeCitys(e)}}>
                        {
                            state.map((cv,idx,arr)=>{
                                return <option key={idx}  value={cv.id} > {cv.attributes.name}</option>
                            })
                        }
                        
                        
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Select name='city__id' aria-label="Default select example">
                        {
                            cities.map((cv,idx,arr)=>{
                                return <option key={idx}  value={cv.id} > {cv.attributes.City_name}</option>
                            })
                        }
                        
                        
                    </Form.Select>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label>Business Category</Form.Label>
                    <Form.Select name="busi_cat_id" aria-label="Default select example">
                        {
                            businessCategories.map((cv,idx,arr)=>{
                                return <option key={idx}  value={cv.id}> {cv.attributes.name}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <br/>
                <Form.Group className="mb-3 "  controlId="user">
                    <Form.Label>Business Register</Form.Label>
                    <Form.Control name='Business_name' type="text" placeholder="Enter Business_name" />
                
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e)=>{Bres(e)}}>
                    Submit
                </Button>
            </Form>
        </main>
    </>
    )
}


//3. export area
export default BusinessRegister;