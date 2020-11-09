const request=require('request')

const forecast=(latitute,longitute,callback)=>{
	const url='http://api.weatherstack.com/current?access_key=8c292efa5e5c747177da5de355509a6c&query='+latitute+','+longitute;
	request({url, json:true},(error,{body})=>{
		if (error) {
    		callback('unable to connect!',undefined)
    	}else if(body.error){
            callback('unable to connect, try another!',undefined) 
    	}else{
            callback(undefined,{
            	temperature:body.current.temperature
            })
    	}
	})
}

module.exports=forecast