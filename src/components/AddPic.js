import React from 'react'
import '../styles/NewPic.css'
const AddPic = (props) => {
    const closeImg = () =>{
        const addPic = document.querySelector('.addPic')
        addPic.style.visibility='hidden'
       }
    const addImg = () =>{
       
        const Pic =document.querySelector('.picture')
        const input = document.querySelector('.img-submit')
        Pic.src = input.value
        const addPic = document.querySelector('.addPic')
        addPic.style.visibility='hidden'
       
        
      }
    return (
        <div className="addPic">
        <div className="first-line">
        <p>Add your picture!</p>
        <button onClick={closeImg}>x</button>
        </div>
        <div className="second-line">
         <label>url:</label>
         <input className="img-submit" type="text"></input>
         </div>
         <div className="third-line">
          <button onClick={addImg} type="submit">Submit</button>
         </div>
       </div>
    )

}

export default AddPic