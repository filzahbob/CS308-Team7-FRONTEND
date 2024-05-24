import React, {useEffect} from 'react'
import { HiHashtag, HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Search= ()=> {


    useEffect(()=>{
        Aos.init({duration: 2000})
    })
    
    return (
    <div className= 'search container section'>
        <div className="sectionContainer grid">
            <div className="btns flex">

                <div className="singlebtn">
                    <span>Economy</span>
                </div>

                <div className="singleBtn">
                    <span>Businness Class</span>
                </div>

                <div className="singleBtn">
                    <span>First Class</span>
                </div>
            </div> 

            <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
                <div className="singleInput flex">
                    <div className="iconDiv">
                        <HiOutlineLocationMarker className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Location</h4>
                        <input type="text" placeholder= 'Where do you want to go?'/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                        <RiAccountPinCircleLine className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Travellers</h4>
                        <input type="text" placeholder= 'Add Guests'/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                        <RxCalendar className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Departure</h4>
                        <input type="text" placeholder= 'Add Date'/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                        <RxCalendar className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Return</h4>
                        <input type="text" placeholder= 'Add Date'/>
                    </div>
                </div>

                <div className="singleInput flex">
                    <div className="iconDiv">
                        <HiHashtag className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Flight Number</h4>
                        <input type="text" placeholder= 'Enter you flight number'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search