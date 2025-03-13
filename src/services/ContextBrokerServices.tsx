
import axios from "axios";
import {responseCall} from '../entities/response';


const cbURI='http://localhost:1026/version';
let responseCallVersion={
    data:{
        orion:{
            version:""
        },
        error:false,
        messageError:""
    }
};

const ContextBrokerServices= {
    
    getContextBrokerVersion : async ()=>{
        
        try {
            responseCallVersion = await axios.get(`${cbURI}`);
            return await responseCallVersion;
          } catch (error) {
            if (axios.isAxiosError(error)) {
                responseCallVersion.data.error=true;
                responseCallVersion.data.messageError= error.code + ":" + error.message;
                return responseCallVersion;
            } else {
                throw new Error("Error en la solicitud");
            }
          }
    }

}


export default ContextBrokerServices;