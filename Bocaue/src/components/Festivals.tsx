import { useState } from 'react'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import '../Styles.css'

function Festival() {
  const [count, setCount] = useState(0)
  return (
    <>
      
      <div class="container mt-5">
        <div class="row pt-5">
        <h2 class="">Festivals</h2>
        <div id="carousel3" class="carousel slide mt-5" data-bs-touch="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={p7} class="d-block w-100" alt="Plaridel3"/>
            </div>
            <div class="carousel-item">
              <img src={p8} class="d-block w-100" alt="Plaridel3"/>
            </div>
          </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </div>
      </div>
    </>
  )
}

export default Festival
