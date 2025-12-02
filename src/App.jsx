

import './App.css'

function App() {


  return (
    <>
      <div>
        <section className='hero site-hero'>
        <h1 className='main-heading'>
          How developers build <br /> real-time <span className='primary-graidient-text'>experiences</span>
        </h1>
        <div className='hero-info-copy'>
          <span className='primary-graidient-text'>Conversational AI </span> .Video . Voice .Chat
        </div>
        <div className='hero-info'>
          Flexible APIs supported by the only <strong className='bold-text-10'>global network</strong> engineered for the live interaction
        </div>
        <div className="hero-video-container">
          <div className="hero-bg-vid w-iframe">
            <iframe title="Hero video" loading="lazy" src="https://player.vimeo.com/video/1000447406?background=1&dnt=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
        <div className='talktous'>
          <div className="cta-block">
            <a href="/en/talk-to-us" className='tertiary-button w-inline-block'>
              <div className='text-block-8'> Talk to Us</div>
            </a>
          </div>

          <div className='button'>
            <a href="#" className='button-primary'>
              <div className='rounded-btn'>
                <span className='arrow'><i class="fa-solid fa-arrow-right"></i></span>
                <div className='text'>Get Started</div>
              </div>
            </a>
          </div>
        </div>

      </section>
      <section className='img-slider'>
        <div className='txtblock'>
          <div className="text-block">
            The Expert trusted worldwide <br /> by 1700+ leading organization
          </div>
        </div>
        <div className="image-slider">
          <div className="image-track">

            {/* 8 Original Images */}
            <img src="../public/components/aimg1.svg" alt="" className="slide-img" />
            <img src="../public/components/aimg2.svg" alt="" className="slide-img" />
            <img src="../public/components/aimg3.svg" alt="" className="slide-img" />
            <img src="../public/components/aimg4.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg5.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg6.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg7.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg8.webp" alt="" className="slide-img" />

            {/* Duplicate Images (Important for seamless loop) */}
           <img src="../public/components/aimg1.svg" alt="" className="slide-img" />
            <img src="../public/components/aimg2.svg" alt="" className="slide-img" />
            <img src="../public/components/aimg3.svg" alt="" className="slide-img" />
            <img src="../public/components/aimg4.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg5.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg6.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg7.webp" alt="" className="slide-img" />
            <img src="../public/components/aimg8.webp" alt="" className="slide-img" />
          </div>
        </div>

      </section>
      </div>
    </>
  )
}

export default App
