import React from 'react'

function Description({name,address}) {
  return (
    <>
    <div class="description">
        <h5>Description</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet aliquam modi animi culpa maiores recusandae dolore libero atque officiis nostrum.</p>
        <div class="address">
            <div>
             <h5>Contact Person</h5>  
           {name}
            </div>
            <div>
            <h5>Address</h5>
            {}
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Description