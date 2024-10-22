import React from "react";

const ForecastWeather = ({ forecast, location }) => {
    return (
        <div className="container">
            <h4 className="text-center text-white mt-5 ">Forecast Weather of {location.name},{location.region}</h4>
            {forecast.forecastday.map((data, index) => {
                return (
                    <div className="container mt-3">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item ">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="p-1 col-sm" >Date:{data.date} </div>
                                                <div className="p-1 col-sm " ><img src={data.day.condition.icon} className="img-fluid rounded-start" alt="..." /><h6>{data.day.condition.text}</h6></div>
                                                <div className="p-1 col-sm ">Min Temp : {data.day.maxtemp_c}</div>
                                                <div className="p-1 col-sm">Max Temp : {data.day.mintemp_c}</div>
                                            </div>
                                        </div>

                                    </button>
                                </h2>
                                <div id={`${index}`} className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body ">
                                        {data.hour.map((data) => {
                                            return (
                                                <>
                                                    <div className="mt-3 ">
                                                        <div className="container mt-4">
                                                            
                                                                <p className=" row align-items-center ">
                                                                <h6 className="col-sm">{data.time} / Max Temp :{data.temp_c}</h6>
                                                                </p>
                                                                
                                                            
                                                            <div className="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar" style={{ width: `${data.temp_c}%` }}>{data.temp_c}</div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </>

                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default ForecastWeather;