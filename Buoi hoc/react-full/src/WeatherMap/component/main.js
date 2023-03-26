import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

export default function Main() {
    const [lat, setLat] = useState("21.113309");
    const [lon, setLon] = useState("105.9568611");
    const [description, setDescription] = useState("description");
    const [temp, settemp] = useState("temp");
    const [feelsLike, setFeelsLike] = useState("");
    const [pressure, setPressure] = useState("");
    const [humidity, setHumidity] = useState("");
    const [country, setCountry] = useState("");
    const [tempMin, setTempMin] = useState("");
    const [tempMax, settempMax] = useState("");
    const [visibility, setVisibility] = useState("");
    const [windSpeed, setwindSpeed] = useState(""); //toc do gio m/s



    const [nameLocation, setNameLocation] = useState("Ha Noi");
    const [dataLocation, setdataLocation] = useState([]);
    const [dataWeather, setdataWeather] = useState([]);
    const [icon, setIcon] = useState("04d");
    const [error, setError] = useState("");
    const urlGetLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${nameLocation}, VN&limit=5&appid=5a61069b72ad7391df72572509e1916d&lang=vi`;
    const urlGetWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a61069b72ad7391df72572509e1916d&lang=vi`;
    const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

   

    const getDataLocation = async () => {
        try {
            const result = await axios.get(urlGetLocation);
            setdataLocation(result.data);
            if(dataLocation) {
                dataLocation.map((item, index) => {
                    setNameLocation(item.name);
                    setLat(item.lat);
                    setLon(item.lon);
                    console.log('====================================');
                    console.log('lat lon',lat, lon);
                    console.log('====================================');
                });
            }
           
            const resultWeather = await axios.get(urlGetWeather);
            setdataWeather(resultWeather.data);
            console.log('====================================');
            console.log(dataWeather);
            console.log('====================================');
            
            if(dataWeather) {
                settemp(dataWeather.main.temp);
                setIcon(dataWeather.weather[0].icon);
                setFeelsLike(dataWeather.main.feels_like);
                setDescription(dataWeather.weather[0].description);
                setHumidity(dataWeather.main.humidity);
                setPressure(dataWeather.main.pressure);
                setTempMin(dataWeather.main.temp_min);
                settempMax(dataWeather.main.temp_max);
                setVisibility(dataWeather.visibility);
                setwindSpeed(dataWeather.wind.speed);
                setCountry(dataWeather.sys.country);
                // setNameLocation(dataWeather.name);
            }
           
        } catch (error) {
            setError('Có lỗi xảy ra');
        }
    };

  
    const getTempCelsius = (tem) => {
        const tempCelsius = Math.round(tem-273.15);
        return tempCelsius;
    }

    const onChangeLocation = (event) => {
        if(event.keyCode===13) {
            getDataLocation();
        }
    }

    const ChangeNameLocation = (text) => {
        setNameLocation(text.target.value);
    }
    useEffect(() => {
        getDataLocation();
    }, []);
 
  return (
    <div className='backgrWeather'>
        <div >
        <InputGroup className="mb-3" 
        style={{ width: "70%", height: "70px", margin:"70px auto"}} 
        onKeyDown={onChangeLocation}
        onChange={ChangeNameLocation}
        >
            <Form.Control
            placeholder="Nhập tên thành phố..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"           
            style={{fontSize:"30px"}} 
            />
            <Button variant="light" className='inputSearh' style={{fontWeight:600}}>
            SEARCH
            </Button>
        </InputGroup>  
        </div>
        <div style={{ width: "70%", margin:"50px auto"}} >
            <p className='fontWeather fst-normal'>Thời tiết hiện tại</p>
            <p className='fontMainWeather'>{nameLocation}, {country}</p>
            <div className='d-flex'>
                <div className='mainWeather d-flex'>
                    <img src={urlIcon} className='imgWeather'/>
                    <div>
                        <p className='fontMainWeatherTemp'>{getTempCelsius(temp)} </p>
                        <p className='fontMainWeather'>{description}</p>
                    </div>
                </div>

                {/*  */}
                <div className='d-flex flex-column'>
                    <p className='textcurenttemp'>Hiện tại, {description}. Nhiệt độ cao nhất sẽ là {getTempCelsius(tempMax)}. Nhiệt độ thấp nhất đêm nay sẽ là {getTempCelsius(tempMin)}.</p>
                    <div className='d-flex flex-wrap'>
                        <div className='detailWeather'>
                            <p>Gió</p>
                            <p className='detailWeatherBody'>{windSpeed}</p>
                        </div>
                        <div className='detailWeather'>
                            <p>Độ ẩm</p>
                            <p className='detailWeatherBody'>{humidity}%</p>
                        </div>
                        <div className='detailWeather'>
                            <p>Cảm thấy</p>
                            <p className='detailWeatherBody'>{getTempCelsius(feelsLike)}</p>
                        </div>
                        <div className='detailWeather'>
                            <p>Tầm nhìn</p>
                            <p className='detailWeatherBody'>{visibility}</p>
                        </div>
                        <div className='detailWeather'>
                            <p>Áp suất</p>
                            <p className='detailWeatherBody'>{pressure}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
  
  )
}
