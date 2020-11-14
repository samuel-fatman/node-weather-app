console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=chiba').then((response)=>{
	response.json().then((data)=>{
		if (data.error) {
			console.log('vul ase')
		}else{
            console.log(data.forecast)
		} 
        
	})
})

const weatherForm= document.querySelector('form')
const search=document.querySelector('input')

weatherForm.addEventListener('submit',(e)=>{
	e.preventDefault()
	const location= search.value
	fetch('/weather?address='+location).then((response)=>{
	response.json().then((data)=>{
		if (data.error) {
			console.log('vul ase')
			document.getElementById('msg-1').innerHTML='vul ase';
		}else{
			document.getElementById('msg-2').innerHTML=data.forecast.temperature+data.location;
            console.log(data.forecast.temperature)
            console.log(data.location)
		} 
        
	})
})
})