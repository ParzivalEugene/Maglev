export const MainVariants = {
  hidden: {
    opacity: 0,
    y: "4rem"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .3,
      duration: 1
    }
  },
  exit: {
    y: "4rem",
    transition: {
      ease: "easeInOut"
    }
  }
}