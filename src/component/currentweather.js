import React from "react";

const CurrentWeather = ({ currentWeather, location }) => {
    return (
        <div className="container">
            <h4 className="text-center text-white mt-5 ">Current Weather of {location.name},{location.region}</h4>
            <div className="row mt-5">
                <div className="col-3 text-center">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={currentWeather.condition.icon} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{currentWeather.condition.text}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >
                        
                        <div className="card-body">
                            <h5 className="card-title">Temp(f) : {currentWeather.temp_f}</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">Temp(c) : {currentWeather.temp_c}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">Humidity : {currentWeather.humidity}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">Wind Degree: {currentWeather.wind_degree}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">Wind Dir: {currentWeather.wind_dir}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">Wind Speed(kph): {currentWeather.wind_kph}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <div className="card" >

                        <div className="card-body">
                            <h5 className="card-title">Wind Speed(mph) : {currentWeather.wind_mph}</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;