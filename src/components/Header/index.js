import React from 'react';
import myImage from '../../images/aboutus/right.png';
import imgHill from '../../images/home/slider/hill.png';
import imgHouse from '../../images/home/slider/house.png';
import imgSun from '../../images/home/slider/sun.png';
import imgBirds1 from '../../images/home/slider/birds1.png';
import imgBirds2 from '../../images/home/slider/birds2.png';
import contacts from '../../utils/contacts';
//import contacts from '../../utils/contacts';

import { NavLink, Link } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';

function Header() {

	return (
		<div>
		<header id="header">      
        <div class="container">
            <div class="row">
                <div class="col-sm-12 overflow">
                   <div class="social-icons pull-right">
                        <ul class="nav nav-pills">
                            <li><a href={contacts.facebook} target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href={contacts.behance} target="_blank"><i class="fa fa-behance"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div> 
                </div>
             </div>
        </div>
        <div class="navbar navbar-inverse" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a class="navbar-brand" href="index.html">
                    	<h1> <span class="logoname1">Kristina</span><span class="logoname2"> Golubitsky</span></h1>
                    </a>
                    
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class=""><a href="#header" class="mebtn" >Home <i class="fa fa-home"></i></a></li>
                        <li class=""><a href="#page-breadcrumb">About <i class="fa fa-star"></i></a>
                        </li> 
						<li class=""><a href="#">Portfolio <i class="fa fa-briefcase"></i></a>
                        </li>  
						<li class=""><a href="#footer">Contacts <i class="fa fa-book"></i></a>
                        </li>                 
                                       
                    </ul>
                </div>
              
            </div>
        </div>
    </header>

	<section id="home-slider">
        <div class="container">
            <div class="row">
                <div class="main-slider">
                    <div class="slide-text">
                        <h1>I Love Design</h1>
                        <p>The best products make you wonder how you could ever design an alternative to them, so “natural” do they seem. But there is always an alternative design, even for products thousands of years old.</p>
                        
                    </div>
					<img src={imgHill} class="slider-hill " alt="slider image"></img>
                    <img src={imgHouse} class="slider-house" alt="slider image"></img>
                    <img src={imgSun} class="slider-sun" alt="slider image"></img>
                    <img src={imgBirds1} class="slider-birds1" alt="slider image"></img>
                    <img src={imgBirds2}  class="slider-birds2" alt="slider image"></img>
                    
                </div>
            </div>
        </div>
        
    </section>

    <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div class="single-service">
                        <div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
                            <img src="images/home/icon1.png" alt=""></img>
                        </div>
                        <h2>Web Design</h2>
                        <p>Contact me so I can start working on ideas with you for a redesign of your existing site. Even if you don't want a re-do from top to bottom, I'll assure that your site looks fresh and with an aesthetic quality ahead of your competition.</p>
                    </div>
                </div>
                <div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div class="single-service">
                        <div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="600ms">
                            <img src="images/home/icon2.png" alt=""></img>
                        </div>
                        <h2>Corporate Identity</h2>
                        <p>Logo.
                            Typography.
                            Color scheme.
                            Imagery style.
                            Design grid.
                            Icons.</p>
                    </div>
                </div>
                <div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="900ms">
                    <div class="single-service">
                        <div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="900ms">
                            <img src="images/home/icon3.png" alt=""></img>
                        </div>
                        <h2>Packaging</h2>
                        <p>The connection of form, structure, materials, colour, imagery, typography, and regulatory information with ancillary design elements to make a product suitable for marketing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


	
	</div>
	);
}
export default Header;