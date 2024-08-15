import { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref.current)
        let refer = null
        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            {threshold: 0.008}
        ); //observer

        if(ref.current) {
            observer.observe(ref.current);
            refer = ref.current
            console.log(refer)

        }

        return () => {
            if(refer) {
                observer.unobserve(refer);
            }
        }
    }, [ref]); //end of useEffect

  return [ref, isIntersecting]
}

export default useIntersectionObserver