import React from 'react';
import '../styles/Contacts.css'
import '../styles/App.css'

function TextVisible() {
    const change = document.getElementById("change")
    change.style.visibility = "visible"
  
}
function TextInvisible() {
    const change = document.getElementById("change")
    change.style.visibility = 'hidden'
    
}
function openImg() {
    const addPic = document.querySelector('.addPic')
    addPic.style.visibility='visible'
   }

   
const Contacts = () => {
     
    return (
        <div className="contacts">
            <div onClick={openImg} onMouseLeave={TextInvisible} onMouseEnter={() => TextVisible()} className="contacts-image">
       
        <img className="picture" src='https://th.bing.com/th/id/OIP.S0PlbsJeWP-i3eJ_GtZXsAAAAA?pid=ImgDet&w=370&h=413&rs=1' alt=""></img>
        <p  id="change" className="change">Click to change photo</p>
        </div>
        <div className="contactMe">

            <p>Contact me</p>

        </div>
        <div className="allContacts">
        <div className="contacts-row">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="6vh" width="6vh" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M18.285 0c-.11 0-.218.004-.326.01-.03.001-.062.005-.092.008a5.723 5.723 0 00-.549.064c-.037.006-.074.015-.111.022-.07.013-.138.027-.207.042l-.1.024a5.635 5.635 0 00-.273.074l-.023.008a5.67 5.67 0 00-.301.102c-.022.007-.043.017-.065.025a5.669 5.669 0 00-.22.09l-.096.043a5.765 5.765 0 00-.184.088l-.097.05c-.061.032-.122.064-.182.098l-.088.05c-.066.04-.13.082-.195.124l-.063.039a5.746 5.746 0 00-.488.367l-.072.063a5.803 5.803 0 00-.451.433 5.7 5.7 0 00-.14.156l-.06.07a5.692 5.692 0 00-1.33 3.664 5.712 5.712 0 009.143 4.571l.017-.014a5.778 5.778 0 00.452-.38l.062-.06a5.747 5.747 0 00.37-.39l.054-.062c.06-.07.116-.143.172-.217l.017-.021.002-.004c.06-.08.118-.163.174-.246.018-.026.034-.054.05-.08.04-.06.078-.12.114-.182l.051-.088c.035-.061.069-.123.102-.186.016-.03.033-.06.048-.091.03-.06.058-.121.086-.182l.047-.103c.031-.072.06-.144.088-.217l.025-.065c.036-.097.07-.195.1-.295l.02-.07c.022-.075.043-.15.062-.227a5.675 5.675 0 00.068-.313 5.758 5.758 0 00.086-.645l.008-.112a5.759 5.759 0 00-.056-1.191 5.677 5.677 0 00-.114-.559 5.655 5.655 0 00-.648-1.533 5.73 5.73 0 00-.477-.672A5.76 5.76 0 0021.248.826l-.086-.049a5.716 5.716 0 00-.398-.215A5.681 5.681 0 0018.285 0zM1.715 2.285A1.72 1.72 0 000 3.995v18.29L12.941 9.344a6.426 6.426 0 01-1.12-3.63c0-1.26.38-2.432 1.007-3.429H1.715zM4.857 4c.848 0 1.557.31 2.102.818l-.912.891a1.698 1.698 0 00-1.19-.459c-.818 0-1.512.551-1.76 1.295a1.889 1.889 0 000 1.195c.248.744.942 1.295 1.76 1.295.46 0 .808-.121 1.067-.297.396-.27.624-.722.623-1.025h-1.69V6.57h2.94c.045.197.078.386.078.645 0 .957-.342 1.765-.936 2.312-.52.48-1.233.758-2.082.758a3.142 3.142 0 110-6.285zm9.8 7.059l-2.452 2.45a12 12 0 014.428-1.56 6.456 6.456 0 01-1.977-.89zm7.058.113a6.601 6.601 0 01-1.774.775c.607.087 1.2.22 1.774.395v-1.17zm-3.43 1.4c-2.51 0-4.868.864-6.73 2.264-.425.34-.698.863-.698 1.45V24H20a1.72 1.72 0 001.715-1.715v-9.164a11.078 11.078 0 00-3.43-.549zm-8.025 2.883L1.715 24h8.392v-7.715c0-.292.063-.567.153-.83Z"></path></svg>
        <input className="street"   type="text" name="Street" placeholder="React Street 16."></input>

        </div>
        <div className="contacts-row">
         <div className="contacts-svg">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="6vh" width="6vh" xmlns="http://www.w3.org/2000/svg"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>
        </div>
        <input className="phone-number"    type="text" name="phone-number" placeholder="205-200-4416"></input>

        </div>
        <div className="contacts-row">
        <div className="contacts-svg">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="6vh" width="6vh" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
        </div>
        <input className="email"    type="text" name="email" placeholder="react@gmail.com"></input>

        </div>
        <div className="contacts-row">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="6vh" width="6vh" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
        <input className="linkedIn"   type="text" name="linkedin" placeholder="LinkedIn/name"></input>

        </div>
        </div>
        </div>
    )
}

export default Contacts;