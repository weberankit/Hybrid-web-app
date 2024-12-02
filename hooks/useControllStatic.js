import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const useControllStatic=()=>{
    const location=useLocation()
    useEffect(() => {
        const staticContent = document.getElementById('static');
        if (!staticContent) {
          console.error("Static content element not found in the DOM");
          return;
        }
        console.log(location.pathname)
        if(location.pathname!=="/"){

            staticContent.style.display="none"
           }else{
            staticContent.style.display="block"
           }
           return()=> staticContent.style.display="block"
        
      }, [location.pathname]);
  
}
export default useControllStatic