import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {

  return (
    <>
        {/* Section 1 */}

<div className="hero1">
<div className="px-4 pb-5 mb-5 text-center topHero d-flex flex-column align-items-center justify-content-center ">
        
        <h1 className="display-5 fw-bold text-light mt-5">Blog</h1>
        <div className="col-lg-6 mx-auto d-flex justify-content-center">
          <div className="d-flex align-items-center lead mb-4">
            <Link className='nav-link me-3' to="/">Home</Link> 
            <i className="fa-solid fa-mug-hot me-3"></i>
             <Link className='nav-link' to="/about">Blog</Link>
              </div>
        </div>
      </div>
      <div className="below">
        <img width={1519} src="https://templates.envytheme.com/handout/default/assets/img/page-title/down-shape.png" alt="" />
      </div>
</div>
{/* Section 2 */}

<div className='container blogSection'>
<h1 className='mt-5 whoAre ms-5 text-center'>News</h1>
<h1 className="display-5 fw-bold  lh-1 mb-3 ms-5 title1 text-center mb-5">Read Burger News</h1>
<div className="row">
    <div className="col-lg-4 col-md-6 mb-5">
    <div className="card border-0 rounded-0" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/blog/image1.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="comment d-flex justify-content-between align-items-center ">
            <div className="author d-flex align-items-center">
            <img width={40} src="https://templates.envytheme.com/handout/default/assets/img/user/user1.jpg" className="rounded-circle" alt="..."></img>
            <p className='authorName ms-2 mt-3'>Adam Smith</p>
            </div>
            <div className="date d-flex align-items-center justify-content-between">
            <i class="fa-regular fa-calendar-days"></i>
            <p className='day ms-2 mt-3'>2022-23-06</p>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">Burgers Of Melbourne Is Helping</h5>
          <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur adipiscingum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-5">
    <div className="card border-0 rounded-0" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/blog/image2.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="comment d-flex justify-content-between align-items-center ">
            <div className="author d-flex align-items-center">
            <img width={40} src="https://templates.envytheme.com/handout/default/assets/img/user/user2.jpg" className="rounded-circle" alt="..."></img>
            <p className='authorName ms-2 mt-3'>Julfikar Don</p>
            </div>
            <div className="date d-flex align-items-center justify-content-between">
            <i class="fa-regular fa-calendar-days"></i>
            <p className='day ms-2 mt-3'>2022-23-06</p>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">Savoir Faire Is Everywhere</h5>
          <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur adipiscingum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-5">
    <div className="card border-0 rounded-0" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/blog/image3.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="comment d-flex justify-content-between align-items-center ">
            <div className="author d-flex align-items-center">
            <img width={40} src="https://templates.envytheme.com/handout/default/assets/img/user/user3.jpg" className="rounded-circle" alt="..."></img>
            <p className='authorName ms-2 mt-3'>Adam Smith</p>
            </div>
            <div className="date d-flex align-items-center justify-content-between">
            <i className="fa-regular fa-calendar-days"></i>
            <p className='day ms-2 mt-3'>2022-23-06</p>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">Brie Burger Served With Curly</h5>
          <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur adipiscingum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-5">
    <div className="card border-0 rounded-0" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/blog/image4.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="comment d-flex justify-content-between align-items-center ">
            <div className="author d-flex align-items-center">
            <img width={40} src="https://templates.envytheme.com/handout/default/assets/img/user/user1.jpg" className="rounded-circle" alt="..."></img>
            <p className='authorName ms-2 mt-3'>Adam Smith</p>
            </div>
            <div className="date d-flex align-items-center justify-content-between">
            <i className="fa-regular fa-calendar-days"></i>
            <p className='day ms-2 mt-3'>2022-23-06</p>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">Toasty Buns Burgers</h5>
          <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur adipiscingum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-5">
    <div className="card border-0 rounded-0" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/blog/image5.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="comment d-flex justify-content-between align-items-center ">
            <div className="author d-flex align-items-center">
            <img width={40} src="https://templates.envytheme.com/handout/default/assets/img/user/user2.jpg" className="rounded-circle" alt="..."></img>
            <p className='authorName ms-2 mt-3'>Julfikar Don</p>
            </div>
            <div className="date d-flex align-items-center justify-content-between">
            <i className="fa-regular fa-calendar-days"></i>
            <p className='day ms-2 mt-3'>2022-23-06</p>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">BPatty Buns Burgers</h5>
          <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur adipiscingum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-5">
    <div className="card border-0 rounded-0" style={{width: '18rem'}}>
        <img src="https://templates.envytheme.com/handout/default/assets/img/blog/image6.jpg" className="card-img-top rounded-0" alt="..." />
        <div className="comment d-flex justify-content-between align-items-center ">
            <div className="author d-flex align-items-center">
            <img width={40} src="https://templates.envytheme.com/handout/default/assets/img/user/user3.jpg" className="rounded-circle" alt="..."></img>
            <p className='authorName ms-2 mt-3'>Adam Smith</p>
            </div>
            <div className="date d-flex align-items-center justify-content-between">
            <i className="fa-regular fa-calendar-days"></i>
            <p className='day ms-2 mt-3'>2022-23-06</p>
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">Riley's Smiley Burgers</h5>
          <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur adipiscingum suspendisse ultrices gravida.</p>
        </div>
      </div>
    </div>
    
</div>
</div>
    </>
  )
}

export default Blog