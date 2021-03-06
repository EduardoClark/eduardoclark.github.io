---
layout: post
title:  "What do mexicans die of? Day of the Dead special"
image:
  feature: abstract-1.jpg
date:   2013-10-28 20:15:41
categories: jekyll update
---

<p align="justify"> So I've been thinking for a while what to do for this blog for the day of the dead. As most of you will now the Day of the Dead is quite a large affair here so I thought there could be something I could do with data to have fun for this celebration. What I decided to do was to build and interactive tool in which to inspect what different demographic groups die of here in Mexico. The basic idea is you put your own population characteristics (age, sex, location, education) and the tool will subset and tabulate data and give you the 10 most common causes of death for that group.</p>

<!-- more -->


<p align="justify"> To do this I used the general mortality database compiled by the Health Ministry of Mexico and INEGI and used all registered deaths from 2004 to 2012. Each death has the demographic characteristics assigned to it and the icd-10 code for the cause of death. So the rest was rather easy, just create a RStudio Shiny web app that subsets the database using user selected criteria and then tabulates the data. The database was rather large so to speed up the subsetting I used a sqlite database instead of in memory r dataframes in the server. That was pretty much it. The result is the following tool. I hope you enjoy it and happy Dia de Muertos!</p>

You can find the full webtool and complete instructions <a href="http://eduardoclark.github.io/DiaDeMuertos" target="_blank">here</a>.

<div id="wrap" style="width: 1150px; height: 1000px; padding: 0; overflow: hidden;">

<iframe src="http://eduardoclark.github.io/DiaDeMuertos" id='aire' width="1200" height="1000" frameBorder="0" name="calc-aire" style="width=1200px;zoom: 0.65; -moz-transform: scale(0.65); -moz-transform-origin: 0 0;" ></iframe>

</div>


