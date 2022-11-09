import { useEffect } from "react"

const useTitle = title =>{
   useEffect(()=>{
      document.title = `${title} Clean Space`
   },[title])
}

export default useTitle