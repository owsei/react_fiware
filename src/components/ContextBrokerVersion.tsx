
import { useEffect, useState } from "react";
import ContextBrokerServices from '../services/ContextBrokerServices';
import {responseCall} from '../entities/response';

let responseCallVersion:responseCall;

function ContextBrokerVersion(){

    const [version, setVersion] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const version=async()=>{ 
            try{
                let responseCallVersion = await ContextBrokerServices.getContextBrokerVersion();
                if (!responseCallVersion.data.error)
                    setVersion(responseCallVersion.data.orion.version);
                else
                    setVersion("Error:" + responseCallVersion.data.messageError);
            }
            catch(error){
                setError("Error:" + responseCallVersion.data.messageError);
            }
            finally {
                setLoading(false);
            }
            
        }

        version();
    },[]);
    return (
        <>
            Version: {version}
        </>
    )

}

export default ContextBrokerVersion;