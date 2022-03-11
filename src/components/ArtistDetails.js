import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import { ResponsiveBar } from '@nivo/bar'





export default function AllDetails() {
    let [artistComponentState, setArtistComponentState] = useState({data: {}, loading:true});
    
    
            
    const id = '563d07d4-1ff7-45b4-85cc-9c9bed8ac9f2'
    const url = 'https://run.mocky.io/v3/'+id;
    let { id1 } = useParams(); 

  

	

	  

    useEffect(() => {
        axios.get(url).then((res) => {
            setArtistComponentState({data: res.data.data, loading:false});
            
            
        })
    },[]);
        // console.log();

		 
        

    if(artistComponentState.loading){
        return <>IT IS LAODING !!</>
    }
    
     return(
        <>
            <div className="col visual">
                <figure>
                    
                        <img src={artistComponentState.data.image} alt={artistComponentState.data.slug} />
                        <button className="btn btn-claim-music-id">Claim music_id</button>
                    
                </figure>			
            </div>
					

						<div className="col-wrapper" >
						
							<div className="col info"  >

								<div className="col-content" >
								
									<div className="info-wrapper" >

										<div className="title-wrapper" >
											<button className="btn btn-solid border btn-booking-request">Booking Request</button>
											<h1 className="title">
                                            {artistComponentState.data.name}
                                                                                            
												<div className="tooltip-wrapper">
													<span className="profile-claimed">Profile claimed</span>
													<div className="tooltip">
														<h3>Vote for subgenres</h3>
														<p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
														<div className="stats-sheet">
                                                            {artistComponentState.data.subgenres &&
                                                                artistComponentState.data.subgenres.map((item) => {
                                                                return <div className="row">
                                                                        <h5>{item.name}</h5>
                                                                        <div className="graph-line">
                                                                            <span className="line" style={{width: item.vote_percentage}}>{item.vote_percentage}</span>
                                                                        </div>
                                                                    </div>
                                                                ;
                                                            })}
															
														</div>
														<p>
															<button className="btn btn-shadow">Vote now</button>
														</p>
													</div>
												</div>
												
												<span className="trending-icon">Trending</span>
											</h1>
										</div>

										<div className="row">
											<button className="btn btn-save long">Follow</button>
											<button className="btn btn-share">
												Share
												<span>Link copied to clipboard</span>
											</button>
										</div>

										<div className="row">
											<label>Origin</label>
											<a className="btn btn-filter-tag">{artistComponentState.data.country.name}</a>
										</div>

										<div className="row">
											<label>Genre</label>
											<span className="btn btn-filter-tag">{artistComponentState.data.genre.name}</span>
										</div>

										<div className="row">
											<label>Subgenres</label>
                                            {artistComponentState.data.subgenres &&
                                                artistComponentState.data.subgenres.map((item) => {
                                                return <span key={item.id} className="btn btn-filter-tag">{item.name}</span>;
                                            })}
											
											<div className="tooltip-wrapper">
												<button className="btn btn-add">Add subgenre</button>
												<div className="tooltip">
													<h3>Vote for subgenres</h3>
													<p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
													<div className="stats-sheet">
                                                    {artistComponentState.data.subgenres &&
                                                        artistComponentState.data.subgenres.map((item) => {
                                                        return <span  key={item.id} className="btn btn-shadow" style={{borderColor:"white", color:"grey"}}>{item.name}</span>;
                                                    })}
                                                    <form>
                                                        <label>Enter your subgenre:
                                                            <input type="text" style={{color:"white" , borderColor: "white"}} />
                                                        </label>
                                                        </form>
													</div>
													<p>
														<button className="btn btn-shadow">Vote now</button>
													</p>
												</div>
											</div>
										</div>

									</div>

									<div className="footer-detail">
										
										<ul className="social-list">
                                            {artistComponentState.data.social_links &&
                                                artistComponentState.data.social_links.map((item) => {
                                                return <li key={item.channel}>
                                                    <a href={item.link} target="_blank" className={`btn social-icon ${item.channel}`}></a>
                                                </li>;
                                            })}
											
										</ul>

										<div className="tooltip-wrapper">
												<button className="btn btn-add">Add links</button>
												<div className="tooltip">
													<h3>Got more info?</h3>
													<p>Add Place's links so everyone can see their social media highlights.</p>
													<p>
														<button className="btn btn-shadow">Add links</button>
													</p>
												</div>
											</div>

									</div>

								</div>

							</div>
				
							<div className="col stats">

								<div className="col-content">

									<div className="stats-sheet">
										<label>Most popular in</label>
                                        
											<div className="stats-sheet" style={{ height: "350px" }}>
											<ResponsiveBar
											data={artistComponentState.data.popularity}
											keys={["percentage"]}
											indexBy="city"
											layout="horizontal"
											margin={{ top: 50, right: 13, bottom: 50, left: 70 }}
											maxValue = {10}
											padding={0.75}
											valueScale={{ type: "linear" }}
											colors="black"
											borderColor="white"
											animate={true}
											enableLabel={false}
											enableGridY = {false}
											axisTop={null}
											axisBottom = {null}
											axisRight={null}
										
											axisLeft={{
											tickSize: 0,
											tickPadding: 5,
											tickRotation: 0,
											//legend: "degrees",
											legendPosition: "middle",
											legendOffset: -40,
											
											
											}}
										/>

											</div>
									</div>

								</div>

							</div>
							

						</div>

						<button className="btn btn-scroll-down">Scroll down</button>

					
                    
        </>
     )
 
};