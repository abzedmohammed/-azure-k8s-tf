export default function Nav() {
	return (
		<>
			<header id='main-header'>
				<div className='main-header'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-sm-12'>
								<nav className='navbar navbar-expand-lg navbar-light p-0'>
									<a
										href='#'
										className='navbar-toggler c-toggler'
										data-toggle='collapse'
										data-target='#navbarSupportedContent'
										aria-controls='navbarSupportedContent'
										aria-expanded='false'
										aria-label='Toggle navigation'
									>
										<div className='navbar-toggler-icon' data-toggle='collapse'>
											<span className='navbar-menu-icon navbar-menu-icon--top'></span>
											<span className='navbar-menu-icon navbar-menu-icon--middle'></span>
											<span className='navbar-menu-icon navbar-menu-icon--bottom'></span>
										</div>
									</a>
									<a href='index.html' className='navbar-brand'>
										<span className="logo-name" id="name-t1">T</span>
										<span className="logo-name" id="name-e">E</span>
										<span className="logo-name" id="name-t2">T</span>
										<span className="logo-name" id="name-f">F</span>
										<span className="logo-name" id="name-l">L</span>
										<span className="logo-name" id="name-i">I</span>
										<span className="logo-name" id="name-x">X</span>
									</a>
									<div
										className='collapse navbar-collapse'
										id='navbarSupportedContent'
									>
										<div className='menu-main-menu-container'>
											<ul id='top-menu' className='navbar-nav ml-auto'>
												<li className='menu-item'>
													<a href='#'>Home</a>
												</li>
												<li className='menu-item'>
													<a href='#'>Movies</a>
												</li>
												<li className='menu-item'>
													<a href='#'>Shows</a>
												</li>
												<li className='menu-item'>
													<a href='#'>Contact Us</a>
													<ul className='sub-menu'>
														<li className='menu-item'>
															<a href='#'>About Us</a>
														</li>
														<li className='menu-item'>
															<a href='#'>Contact</a>
														</li>
														<li className='menu-item'>
															<a href='#'>FAQ</a>
														</li>
														<li className='menu-item'>
															<a href='#'>Privacy-Policy</a>
														</li>
														<li className='menu-item'>
															<a href='#'>Pricing</a>
															<ul className='sub-menu'>
																<li className='menu-item'>
																	<a href='#'>Gold Membership</a>
																</li>
																<li className='menu-item'>
																	<a href='#'>Silver Membership</a>
																</li>
																<li className='menu-item'>
																	<a href='#'>Bronze Membership</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>

									<div className='navbar-right menu-right'>
										<ul className='d-flex align-items-center list-inline m-0'>
											<li className='nav-item nav-icon'>
											<div class="dropstart">
												<a
													class="search-toggle dropdown-toggle"
													href="#"
													role="button"
													id="dropdownMenuLink"
													data-mdb-toggle="dropdown"
													aria-expanded="false"
												>
												<i className='fa fa-bell'></i>
												<span className='bg-danger dots'></span>
												</a>

												<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
													<li><a class="dropdown-item" href="#">A new movie has been released</a></li>
													<li><a class="dropdown-item" href="#">A new movie has been released</a></li>
													<li><a class="dropdown-item" href="#">A new movie has been released</a></li>
													<li><a class="dropdown-item" href="#">A new movie has been released</a></li>
												</ul>
												</div>
											<div className="">											
												<div className='iq-sub-dropdown'>
													<div className='iq-card shadow-none m-0'>
														<div className='iq-card-body dropdown-menu' aria-labelledby="notifications">
															<a href='#' className='iq-sub-card dropdown-item'>
																<div className='media align-items-center'>
																	<img
																		src='images/notify/thumb-1.jpg'
																		alt=''
																		className='img-fluid mr-3'
																	/>
																	<div className='media-body'>
																		<h6 className='mb-0'>Captain Marvel</h6>
																		<small className='font-size-12'>
																			just now
																		</small>
																	</div>
																</div>
															</a>
															<a href='#' className='iq-sub-card dropdown-item'>
																<div className='media align-items-center'>
																	<img
																		src='images/notify/thumb-2.jpg'
																		alt=''
																		className='img-fluid mr-3'
																	/>
																	<div className='media-body'>
																		<h6 className='mb-0'>
																			Dora and The Lost City of Gold
																		</h6>
																		<small className='font-size-12'>
																			25 mins ago
																		</small>
																	</div>
																</div>
															</a>
															<a href='#' className='iq-sub-card dropdown-item'>
																<div className='media align-items-center'>
																	<img
																		src='images/notify/thumb-3.jpg'
																		alt=''
																		className='img-fluid mr-3'
																	/>
																	<div className='media-body'>
																		<h6 className='mb-0'>Mulan</h6>
																		<small className='font-size-12'>
																			1h 30 mins ago
																		</small>
																	</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											</li>
											<li className='nav-item nav-icon'>
												<a
													href='#'
													className='iq-user-dropdown search-toggle d-flex align-items-center p-0'
												>
													<img
														src='https://res.cloudinary.com/abzedmohammed/image/upload/v1670316789/defaults/default_black_mv0upm.png'
														className='img-fluid user-m rounded-circle'
														alt=''
													/>
												</a>
												<div className='iq-sub-dropdown iq-user-dropdown'>
													<div className='iq-card shadow-none m-0'>
														<div className='iq-card-body p-0 pl-3 pr-3'>
															<a
																href='#'
																className='iq-sub-card setting-dropdown'
															>
																<div className='media align-items-center'>
																	<div className='right-icon'>
																		<i className='fa fa-user text-primary'></i>
																	</div>
																	<div className='media-body ml-3'>
																		<h6 className='mb-0'>Manage Profile</h6>
																	</div>
																</div>
															</a>
															<a
																href='#'
																className='iq-sub-card setting-dropdown'
															>
																<div className='media align-items-center'>
																	<div className='right-icon'>
																		<i className='fa fa-cog text-primary'></i>
																	</div>
																	<div className='media-body ml-3'>
																		<h6 className='mb-0'>Settings</h6>
																	</div>
																</div>
															</a>
															<a
																href='#'
																className='iq-sub-card setting-dropdown'
															>
																<div className='media align-items-center'>
																	<div className='right-icon'>
																		<i className='fa fa-inr text-primary'></i>
																	</div>
																	<div className='media-body ml-3'>
																		<h6 className='mb-0'>Pricing Plan</h6>
																	</div>
																</div>
															</a>
															<a
																href='#'
																className='iq-sub-card setting-dropdown'
															>
																<div className='media align-items-center'>
																	<div className='right-icon'>
																		<i className='fa fa-sign-out text-primary'></i>
																	</div>
																	<div className='media-body ml-3'>
																		<h6 className='mb-0'>Logout</h6>
																	</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</nav>
								<div className='nav-overlay'></div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
