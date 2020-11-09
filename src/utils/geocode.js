const request=require('request')

const geocode=(address,callback)=>{
    const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2FtdWVsZmF0bWFuIiwiYSI6ImNraDF5azA2dzBmcWMyeW9rbjd0NTNta3gifQ.j3GKgdu6IMv_esRxN_QKxQ&limit=1&language=ja'

    request({url:geocodeURL, json:true},(error,{body})=>{
    	if (error) {
    		callback('unable to connect!',undefined)
    	}else if(body.features.length == 0){
            callback('unable to connect, try another!',undefined) 
    	}else{
            callback(undefined,{
            	latitude:body.features[0].center[1],
	            longtitude:body.features[0].center[0],
	            location:body.features[0].place_name
            })
    	}
 })
}

module.exports=geocode