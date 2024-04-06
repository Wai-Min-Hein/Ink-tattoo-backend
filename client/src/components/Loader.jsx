import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import '../Loader.css'


const Loader = () => {
    const tablet = useMediaQuery({
        query: '(min-width: 768px)'
      })
    const bgVAriant = {
        open: {y: '100%', transition: {duration: tablet?2:3}},
        closed: {y: "-100%", transition: {duration: .7}}
    }
  return (
    //   <motion.div
    //   initial='closed'
    //   animate='open'
    //   variants={bgVAriant}
      
    //   className="bg-dark h-[200vh] w-full absolute top-0 left-0 z-[100]"></motion.div>

    <div className="pl !bg-dark !h-screen !w-full !absolute top-0 left-0 z-[100]">
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
</div>
  )
}

export default Loader