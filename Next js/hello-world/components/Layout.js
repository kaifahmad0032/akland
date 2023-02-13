import React, { useEffect,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout() {
  const[count,setCount]=useState(1)
  const[project,setProject]=useState(1)
  const [year,setYear]=useState(1)

  function tick(){
    if(count < 180){
      setCount(count + 1)
    }
  }

  function tick2(){
    if(project < 46){
      setProject(project + 1)
    }
  }

  function tick3(){
    if(year < 26){
      setYear(year + 1)
    }
  }
  useEffect(() => {
    const Interval2=setInterval(tick2, 50)
    const Interval= setInterval(tick, 20)
    const Interval3= setInterval(tick3, 100)
    return ()=>{
      clearInterval(Interval);
      clearInterval(Interval2);
      clearInterval(Interval3);
    }
  },[count,project,year])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,500&display=swap" rel="stylesheet" />
      </Head>
      <section>
        <div className="container">
          <header>
            <nav>
              <div className="logo">
                <h2 className="logo-heading"><span className='ak'>AK</span> Land</h2>
              </div>
              <div className="menu">
                <ul>
                  <li><Link href="#">Home</Link></li>
                  <li><Link href="#">Other Pages</Link></li>
                  <li><Link href="#">About </Link></li>
                  <li><Link href="#">Serivices</Link></li>
                  <li><Link href="#">Projects</Link></li>
                  <li><Link href="#">Blog</Link></li>
                  <li><Link href="#">Contact</Link></li>
                </ul>
              </div>
              <div className="information">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span className='call'>
                  <p>
                  <span className='keyframe'></span>
                    call we are working</p>
                  <Link href="#">+9559275590</Link>
                </span>
              </div>
            </nav>
          </header>
        </div>
        <hr className='line' />

        <div className='container'>
        <div className='hero_section'>
           <div>
              <h2 className='heading'>innovative design you can <br /><b>dream it</b>, we can <b>build it!</b></h2>
              <div className='counting_flex'>
                <div>
                  <h1>{count}</h1>
                  <p>Happy Clients</p>
                </div>

                <div>
                  <h1>{project}</h1>
                  <p>Projects Compleated</p>
                </div>

                <div>
                  <h1>{year}</h1>
                  <p>Years Of Experince</p>
                </div>
              </div>
              <button>
                <p>Schedule Appointment </p>
              </button>
           </div>

           <div className='play_man'>
            <span className='to_know_line'>
              <span className='play_content'>
                <p>To Know More</p>
                <p>Watch Video</p>
              </span>
            </span>
            <div className='play'>
              <i class="fa fa-play" aria-hidden="true"></i>
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  )
}
