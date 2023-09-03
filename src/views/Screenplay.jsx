import React, { useState } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import parallax_01 from '../img/parallax_01.png'
import parallax_02 from '../img/parallax_02.jpg'
import { motion } from 'framer-motion'
import { fadeInSmall } from '../variants'
import { boxColor } from '../utils/colors'
import credits from '../img/credits.png'
import { SendAltFilled } from '@carbon/icons-react'

const Title = () => {

  return (
    <ParallaxBanner
      layers={[
        { image: parallax_02, speed: -50 },
        { image: parallax_01, speed: -15 },
      ]}
      className="aspect-[1/1]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute w-full h-full opacity-[65%] bg-black"></div>
        <p className='glow z-40 absolute left-[20%] top-[46%] font-carbon text-2xl'>{'M.Light\'s'}</p>
        <h1 className="glow absolute left-[20%] top-[43%] font-disolve tracking-tight z-40 text-[180px] text-white font-thin">THE END OF TIME</h1>
        <img src={credits} className='w-1/2 bottom-[5%] h-[200px] absolute' />
      </div>
    </ParallaxBanner>
  )
}

const Body = () => {

  const [textColor, setTextColor] = useState('text-white')
  const [ranNum, setRanNum] = useState(0)
  const [menu, setMenu] = useState('hide')
  // eslint-disable-next-line no-unused-vars
  const [genres, setGenres] = useState(['sci-fi', 'action', 'drama'])

  const actors = [{
    character: 'Alan',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxD3__-rQoG_g-YpdKDeMCw_-beOQTQc5ag3K37zMYpJ2avEI-'
  },
  {
    character: 'Eliza',
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPp7UQ5G0rhPhv6YmpJaW_10JHbxI7sdzcYIEQGTrVPxhBcxV9'
  },
  {
    character: 'Atkins',
    img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQnZgt7uqbUBSh9Eg0jk5qHhMNQvptH2UocSGjk3b6hKF-3Ho7eImj_ssa9DgZdjmkawoCml0mZIoxNloU'
  },
  ]

  const handleText = () => {
    if (textColor === 'text-white') {
      setTextColor('text-black')
    } else {
      setTextColor('text-white')
    }
  }

  const randomSeed = () => {
    let ranInt = Math.floor(Math.random() * boxColor.length)
    if (ranInt === ranNum) {
      randomSeed()
    }
    setRanNum(ranInt)
    return 1
  }

  return (
    <div className='py-20 flex max-h-[950px] overflow-hidden' style={{ backgroundColor: boxColor[ranNum] }} >
      <div className="script flex flex-col w-2/3 px-15">

        <motion.div
          className='z-40 mb-10'
          variants={fadeInSmall('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}>
          <h1 className={`font-bergen z-40 text-3xl ${textColor} pl-10 mb-5 mt-20`}>EXT. SHORE OF A RED BEACH IN THE EVENING - DAY</h1>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-5`}>{'It\'s the late hours of the day, and the sun sits half past the line of the horizon, leaving a long trail of gold and crimson in the calm waves of the sea.'}</h1>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-5`}>{'The reflecting light, not unlike a trail of miraging blood sparkling in the eyes of Alan (17), a young boy like you or me, on the inside. Yet the reflection extinguishes from his eyes and darkness soon covers him.'}</h1>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-5`}>{'An oval shape shines in bright pale light in front of him now, and the light reveals he is not a kid anymore.'}</h1>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-5`}>{'He is old now (68) and the steps he takes to approach the glowing oval shape reflect it. Heavy and prolonged movements, a faint catch of breath as he walks through the dark emptiness and into the light.'}</h1>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-5`}>{'Closer and the light reveals the trails of tears around his wrinkled cheeks. He has been crying, and now he is closer to the light, almost reaches.'}</h1>
          <h1 className={`font-bergen z-40 text-2xl text-center ${textColor} pl-10 pr-[135px] mt-12`}>{'ELIZA (V.O.)'}</h1>
          <h1 className={`font-carbon z-40 text-xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'Alan! What are you doing? We\'re leaving!'}</h1>
        </motion.div>

        <motion.div
          className='z-40 px-44'
          variants={fadeInSmall('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.1 }}>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-5`}>{'An ocean wave breaks in the shore, sending sparkling drops all over the space around Alan (17), a kid once again. Enough to break his concentration and to be able to hear the voice calling his name.'}</h1>
          <h1 className={`font-bergen z-40 text-2xl text-center ${textColor} pl-10 pr-[135px] mt-12`}>{'ELIZA'}</h1>
          <h1 className={`font-carbon z-40 text-xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'Alan! Why do I have to keep coming to get you!?'}</h1>
          <h1 className={`font-bergen z-40 text-2xl text-center ${textColor} pl-10 pr-[135px] mt-12`}>{'ALAN'}</h1>
          <h1 className={`font-carbon z-40 text-xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'I\'m sorry.'}</h1>
          <h1 className={`font-carbon z-40 text-xl ${textColor} pl-10 pr-[135px] mt-10`}>{'Eliza responds with a grimace as she gets to Alan\'s side.'}</h1>
          <h1 className={`font-bergen z-40 text-2xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'ELIZA'}</h1>
          <h1 className={`font-carbon z-40 text-xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'What are you even looking at?'}</h1>
          <h1 className={`font-bergen z-40 text-2xl text-center ${textColor} pl-10 pr-[135px] mt-12`}>{'ALAN'}</h1>
          <h1 className={`font-carbon z-40 text-xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'I\'m not sure.'}</h1>
          <h1 className={`font-bergen z-40 text-2xl text-center ${textColor} pl-10 pr-[135px] mt-12`}>{'ELIZA'}</h1>
          <h1 className={`font-carbon z-40 text-xl text-center ${textColor} pl-10 pr-[135px] mt-5`}>{'You don\'t know and you\'re not sure. A girl can get tired of such things you know.'}</h1>

        </motion.div>
      </div>
      {
        menu === 'show' ? (
          <motion.div
            variants={fadeInSmall('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='w-1/3 mx-[10px] flex flex-col items-center justify-center gap-y-5 mt-20'
          >
            <div className={'mx-auto lg:w-[20vw] max-h-[60vh] object-contain object-center rounded-[10px] group relative overflow-hidden'}>
              <img src='https://i.postimg.cc/8kwybRHt/The-End-of-Time.png' className={'w-full max-h-full object-cover hover:scale-[110%] transition-scale duration-500'} />
            </div>
            <h1 className={`font-bergen text-2xl ${textColor}`}>{'THE END OF TIME'}</h1>
            <div className="flex gap-x-2">
              {genres.map((elem, i) => <span key={i} className={`min-[sm]:max-[1400px]:hidden flex text-xs font-carbon ${textColor} border rounded-full px-2`}>{elem}</span>)}
            </div>
            <h1 className={`font-carbon text-md px-3 ${textColor}`}>{'Blinded by a desire to change her past, an astronaut falls into an anomaly in space and discovers a terrible secret about the universe.'}</h1>

            <button className='rounded-full h-[60px] w-[150px] border-[7px] border-black bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300 mx-auto mt-10' onClick={() => menu === 'hide' ? setMenu('show') : setMenu('hide')}>
              <p>Return_</p>
            </button>
          </motion.div>
        )
          :
          (
            <motion.div
              variants={fadeInSmall('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className="h-[950px] flex flex-col justify-start items-center mr-5 w-1/3  mt-20">
              <div className="flex  gap-x-2">
                <button onClick={handleText} className='font-carbon flex items-center jutify-center text-[12px] border-2 p-5 rounded-full w-[70px] h-[40px] bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300'>Font</button>
                <button onClick={randomSeed} className='font-carbon flex items-center jutify-center text-[12px] border-2 p-5 rounded-full w-[70px] h-[40px] bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300'>Bg</button>
              </div>
              <div className='flex flex-col gap-y-3 mt-5'>
                <h1 className={`font-bergen mt-7 ${textColor}`}>Soundtrack_</h1>
                <div className="flex w-[380px] h-[195px] overflow-hidden rounded-r-full border-[8px] border-black">
                  <iframe width="380" height="195" src="https://www.youtube.com/embed/videoseries?si=duNbmIzWC-BwpTxp&amp;list=PL_5jFIJL_9S8BvCO8dR1_Z5ugXhK95d1a&autoplay=1?rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <h1 className={`font-bergen mt-10 ${textColor}`}>Cast_</h1>
                <div className="flex gap-x-2">
                  {
                    actors.map(elem => (
                      <div key={elem.img} className='flex flex-col justify-center items-center'><div className='w-[120px] h-[120px] rounded-full overflow-hidden border-[7px] border-black'>
                        <img src={elem.img} className='w-full h-auto' />
                      </div><p className={`font-bergen text-lg ${textColor}`}>{elem.character}</p></div>
                    )
                    )
                  }
                </div>
                <button className='rounded-full h-[60px] w-[150px] border-[7px] border-black bg-[#393939] hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300 mx-auto mt-10' onClick={() => menu === 'hide' ? setMenu('show') : setMenu('hide')}>
                  <p>Project Info_</p>
                </button>
              </div>
            </motion.div>
          )
      }


    </div>
  )
}

const Social = () => {

  const comments = [
    {
      id: 'a1',
      img: 'https://randomuser.me/api/portraits/men/42.jpg',
      user: 'screenflylyrics',
      comment: `This is one of the best movies I have seen in a long time. The movie follows the story of King George VI and his struggle to overcome his stammer, which is something that has been a family issue for generations. The movie stars Colin Firth as the King, Helena Bonham Carter as his wife Queen Elizabeth, and Geoffrey Rush as the speech therapist who helps the King to overcome his speech impediment. The movie is incredibly well-acted, with Firth and Rush both giving outstanding performances. 
      
      Firth in particular gives an exceptionally good performance as the King, conveying the emotion and struggle of a man trying to make himself be heard in a world that doesn't understand him. Bonham Carter and Rush also give compelling performances as the King's supportive family members who are trying to help him. The movie is also incredibly well-written, with a good mix of humor and drama. The movie does a great job of showing the King's struggle to overcome his speech impediment, and the moments of emotion and triumph that come with it. 
      
      Overall, I highly recommend The King's Speech. It's a powerful and moving story about a man overcoming his greatest challenge, and it's a movie that will stay with you long after you've seen it.`
    },
    {
      id: 'b2',
      img: 'https://randomuser.me/api/portraits/women/46.jpg',
      user: 'writersmokesnowstorm',
      comment: 'I must say, it was an amazing experience. The story was gripping and the visuals were spectacular. I was completely captivated by the characters and their journeys throughout the movie. The acting was superb and the soundtrack was beautiful. The movie was able to capture the emotion of the time period and really take me back in time. I highly recommend this movie to anyone looking for a great film experience.'
    },
    {
      id: 'c3',
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
      user: 'movietuneheartblazar',
      comment: `I must say that this film was an intense and emotional roller coaster ride. Joaquin Phoenix gives an amazing performance as the titular character, and the movie is truly one of the best of the year. 
      
      The story follows Arthur Fleck, a mentally ill outcast, as he navigates the gritty streets of Gotham City. His journey is a dark and twisted one, as he slowly descends further into madness. 
      
      The movie also features outstanding performances from Robert De Niro, Zazie Beetz, and Frances Conroy, and the cinematography is stunning. Overall, Joker is a compelling and thought-provoking movie that is sure to leave a lasting impression. Highly recommended!`
    },
    {
      id: 'd4',
      img: 'https://randomuser.me/api/portraits/women/24.jpg',
      user: 'filmmosspathsofglory',
      comment: `This is an exhilarating sci-fi adventure set in a virtual reality world. The plot follows Wade Watts, an orphaned teen living in a dystopian future. He joins forces with a group of misfits to find an Easter egg hidden in an online world called the OASIS.

      The movie is visually stunning, with stunning special effects and breathtaking cinematography. The action sequences are fast-paced and thrilling, making for an exciting ride throughout the movie. The cast does an excellent job of bringing the characters to life, especially Tye Sheridan as the lead, who is captivating as the determined and resourceful hero.
      
      Overall, Ready Player One is an entertaining and thought-provoking movie full of action, adventure, and emotion. It’s an impressive accomplishment by Steven Spielberg, and an absolute must-see for sci-fi fans.`
    },
    {
      id: 'e5',
      img: 'https://randomuser.me/api/portraits/men/39.jpg',
      user: 'screenincendies',
      comment: `The film follows the events that unfold when a park full of genetically modified dinosaurs is opened to the public. The movie stars Chris Pratt as Owen Grady, a former Navy man who is tasked with training a group of Velociraptors for the military. The film also stars Bryce Dallas Howard as Claire Dearing, a park manager, and Vincent D’Onofrio as the villain, Vic Hoskins.

      The movie was an absolute thrill ride! It was full of exciting action sequences featuring the now-famous dinosaurs. The special effects and visuals were stunning, and the soundtrack was awesome. Chris Pratt and Bryce Dallas Howard did a great job in the main roles, and D'Onofrio was delightful as the antagonist.
      
      Overall, I thoroughly enjoyed Jurassic World. It was a great action-filled adventure that I would highly recommend to anyone looking for a good time.`
    },
  ]

  return (
    <div className="flex flex-col justify-start my-20">
      <div className="flex flex-col">
        {
          comments.map(elem => (
            <div key={elem.id} className='flex mx-10 my-5'>
              <div className="flex w-[80px] h-[80px] rounded-full overflow-hidden border-[6px] border-black">
                <img src={elem.img} className='w-full h-full' />
              </div>
              <div className="flex justify-start w-3/4">
                <h3 className='glow font-bergen mx-2 min-w-[220px] items-center mt-7'>{elem.user}</h3>
                <span className='font-carbon bg-black p-5 rounded-[15px]'>{elem.comment}</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col mx-10">
        <h1 className={'font-bergen mt-7 text-white my-5'}>Comment_</h1>
        <textarea className='w-full h-[400px] rounded-[15px] p-5 font-carbon' />
        <div className="flex">
          <button className='rounded-full h-[60px] w-[60px] border-[7px] border-black bg-black hover:bg-white hover:text-[#9f56f4] active:bg-[#9f56f4] active:text-white transition-color duration-300 mx-auto mt-10' onClick={() => console.log('something')}>
            <SendAltFilled className='hover:text-[#8b5cf6] transition-color duration-300 mx-auto' size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}

const Screenplay = () => {
  return (
    <>
      <Title />
      <Body />
      <Social />
    </>
  )
}

export default Screenplay

// variants={fadeInSmall('left', blog.fade)}
// initial="hidden"
// whileInView={'visible'}
// viewport={{ once: false, amount: 0.7 }}