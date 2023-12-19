import { LazyMotion, domAnimation } from "framer-motion"

export default function MotionWrapper({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
