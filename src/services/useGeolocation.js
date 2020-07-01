import React,{useState,useEffect} from 'react';

const useGeoLocation = () =>{
    const [state,setState] = useState({
        latitude:null,
        longitude:null,
    });
    let mounted = true;
    let watchId;

    const onEvent = event =>{
        if(mounted){
            setState({
                latitude:event.coords.latitude,
                longitude:event.coords.longitude
            });
        }
    };
    useEffect(
        ()=>{
            navigator.geolocation.getCurrentPosition(onEvent);
            watchId = navigator.geolocation.watchPosition(onEvent);
            return () =>{
                mounted = false;
                navigator.geolocation.clearWatch(watchId);
            };
        },
        [0]
    );
    return state;
}

export default useGeoLocation;