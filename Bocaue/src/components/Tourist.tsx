import { useState } from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import '../Styles.css'

function Tourist() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div class="container mt-5">
        <div class="row pt-5">
        <h2 class="">Tourist Spots</h2>
        <div id="carousel" class="carousel slide mt-5" data-bs-touch="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={p1} class="d-block w-100" alt="Plaridel3"/>
            </div>
            <div class="carousel-item">
              <img src={p2} class="d-block w-100" alt="Plaridel3"/>
            </div>
            <div class="carousel-item">
              <img src={p3} class="d-block w-100" alt="Plaridel3"/>
            </div>
          </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </div>
      </div>
    </>
  )
}

export default Tourist
