import { cn } from "../../utils/cn"
import { motion } from "framer-motion"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%"
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
    }
  }
  return (
    <div className={cn("relative p-[4px] group  basis-4/5  mx-auto sm:mx-0 sm:basis-[48%] md:basis-[30%]  !bg-[#0d0d0d] !text-[#d2d2d2] ", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
