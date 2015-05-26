---
layout: post
title:  "Mexico Cellphone Coverage Shapefiles"
image:
  feature: deadsol.jpg
  
date:   2015-05-25 13:17:15
categories: jekyll update
---

<p align="justify"> Lately I've been working a couple of projects that involved cellphone use in Mexico. As soon as we started working we identified the clear lack of information about where coverage exists in Mexico and where it doesn't. In particular we wanted to identify locality level information on cellphone coverage and at the end of the day we found out that either you went directly with the carriers or you didn't have acess to easy to use information.</p>

<p align="justify"> The closest we found was <a href="http://opensignal.com/" target="_blank">Open Signal </a> which provides an API from a crowdsourced database on signal in different parts of Mexico. It has two problems; 1) its crowdsourced so it might have issues in smaller localities in rural areas (one of our main interests) and, 2) its API limits 5 requests per second and only 2K a month. That means no posibility of actual downloading the DB of Shapefiles which might make the procedure really tiresome. As we were about to lose hope we found that the <a href="http://www.gsma.com/"> GSMA </a>, an association that groups together almost all the cellphone providers in the world,  has <a href="http://maps.mobileworldlive.com/">website </a> with a very ugly tool to see the maps. I thought it would be a good idea to get them from there. This is what this post is about, so you can get them pretty easily using some R.<p>

<!-- more -->
<h3 align='center'> This is the very 'helpful' way that the GSMA publishes it's coverage maps </h3>
<img align='center' src="/images/Cellphone1.png" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<p align="justify"> As I was tinkering with the GSMA I noticed that actually what we were seeing on the tool wasn't a geoserver or anything like that, it was a set of montaged images that included both the coverage layers and the openstreetmap layer underneath as .png's. The procedure was then pretty clear: </p>

<ol>
<li>Understand the URL of the images and download them</li>
<li>Paste them in order in a montage</li>
<li>Georeference the raster</li>
<li>Convert to a vector layer </li>
<li>Find out which localities fell within the coverage layer</li>
</ol>

<p>If you want to understand the procedure better you can go this <a href="https://github.com/EduardoClark/CellphoneCoverageMexicogithub">  repo </a> which contains all the code to replicate it in R (So far only tested in a unix enviorment) </p>

<p>I'd would just like to mention that the georeferencing of the raster layer was done pretty manually at some point by myself and that the shapefiles might not be 100% correct at the boundaries of the coverage layer. I did spend a long time on this part and feel pretty confident about its adjustment for almost all of the territory </p>

<p>This is how the shapefiles looklike</p>

<h3 align='center'> Telcel GSM </h3>
<img align='center' src="/images/TelcelGSM.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<h3 align='center'> Telcel 3G </h3>
<img align='center' src="/images/Telcel3G.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<h3 align='center'> Iusacel GSM </h3>
<img align='center' src="/images/IusacelGSM.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<h3 align='center'> Iusacel 3G/4G </h3>
<img align='center' src="/images/Iusacel3G.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<h3 align='center'> Movistar </h3>
<img align='center' src="/images/Movistar.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >


<p> After generating the shapefiles I decided to create a locality level dataset that tells you which localities have coverage. Just to illustrate you'll see next a map of Celaya, Guanajuato and it's rural localities. Those in green have Telcel 3G coverage and those in red do not. </p>

<img align='center' src="/images/Celaya.svg" style='WIDTH: 100%; HEIGHT: 100%;margin:auto;display:block;' >

<p> Hope this is useful, if you download the following <a href="https://s3.amazonaws.com/shapefilescobertura/CellCoverage.zip">link </a> you'll get the shapefiles and the coverage .csv at the locality level </p>

<p> Have a good one </p>








