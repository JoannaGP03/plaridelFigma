import { useState } from 'react'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import '../Styles.css'

function Products() {
  const [count, setCount] = useState(0)
  return (
    <>
      
      <div class="container mt-5">
        <div class="row pt-5">
        <h2 class="">Products</h2>
        <div id="carousel2" class="carousel slide mt-5" data-bs-touch="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={p4} class="d-block w-100" alt="Plaridel4"/>
            </div>
            <div class="carousel-item">
              <img src={p5} class="d-block w-100" alt="Plaridel5"/>
            </div>
            <div class="carousel-item">
              <img src={p6} class="d-block w-100" alt="Plaridel6"/>
            </div>
          </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </div>
      </div>
    </>
  )
}

export default Products
