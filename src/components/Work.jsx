import React from 'react'
import './work.css'
function Work() {
  return (
    <>
      <div className="work">
       <h1 style={{color:'wheat'}}>Work</h1>
        <hr />
      </div>

     <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, veniam at. Ipsum voluptate omnis necessitatibus voluptates optio velit quidem ea deserunt neque blanditiis. Sequi beatae magnam ad repudiandae, fugiat exercitationem!
      Commodi similique autem iusto quaerat facere dignissimos ipsum ratione, doloremque temporibus itaque, soluta suscipit. Dolor incidunt necessitatibus odio dolores obcaecati architecto! Voluptate quam quae molestias aut quas rerum illo! Enim.
      Numquam enim harum eius temporibus laborum suscipit rerum obcaecati sapiente a debitis voluptatem fuga, deserunt quibusdam laboriosam mollitia blanditiis cumque similique! Cumque laudantium deleniti vero. Delectus quis harum culpa eaque?
      </p>
     <div className="work-container">
        {/*<div className="work">
            <img src="./portfolio1.png" alt="" srcset="" />
            <p>Website Design</p>
            <p>HTML CSS REACT</p>
        </div> */}

{/* flip img  */}
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
            <img src="./portfolio1.png" alt="Paris" style={{width:'500px',height:'300px'}}></img>
            </div>
            <div class="flip-box-back">
            
            <p> Designed using <br />HTML CSS REACT</p>
            </div>
        </div>
    </div>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
            <img src="./portfolio2.png" alt="Paris" style={{width:'500px',height:'300px'}}></img>
            </div>
            <div class="flip-box-back">
            
            <p> Designed using <br />HTML CSS REACT</p>
            </div>
        </div>
    </div>
        {/* <div className="work">
            <img src="./portfolio2.png" alt="" srcset="" />
            <p>Website Design</p>
            <p>HTML CSS REACT</p>
        </div> */}
    </div>
    </>
  )
}

export default Work
