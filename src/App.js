import { motion } from "framer-motion"

function App() {
  const container={
    hidden:{
      opacity:0
    },
    show:{
      opacity:1,
      transition:{
        delayChildren:0.5
      }
    }
  }



  const item={
    hidden:{
      opacity:0,
      scale:0.5
    },
    show:{
      opacity:1,
      scale:1

    }
   
  }
  return (
    <div className="App">
      <motion.div
      variants={container}
      // initial={{ scale: 0 }}
      // animate={{ scale: 1 }}
      // transition={{ ease: "easeInOut", duration: 0.5, delay:0.1, type:"spring" }}
      initial="hidden"
      animate="show"

      >

        <motion.h1
         variants={container}>
          Bummelum
         </motion.h1>
        <h2>Flergenderf</h2>
      </motion.div>
      
    </div>
  );
}

export default App;
