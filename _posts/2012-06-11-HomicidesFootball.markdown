---
layout: post
title:  "Do football games increase homicides in Mexico?"
date:   2013-09-24 13:17:15
categories: jekyll update
---

<p> <b> NOTE: I had mistakenly added a fixed effects vector on the model description. The results in table 4 show coefficients for a model without fixed effects. Aditionaly I should say that results from a zero-inflated model do not yield significantly different results. Sorry about that :P </b> </p>


<p align="justify"> Recently I was approached by one of Mexico's most popular sport websites, <a href="http://www.mediotiempo.com/" target="_blank">MedioTiempo.com</a> with a question. Does football increase violence and criminal incidence? One of the things they wanted to know was if first division football (<a href="http://www.ligamx.net/index.html" target="_blank"> Liga MX</a>) games in Mexico altered the number of crimes commited in the home city of the playing team. Right away I though this was a really good question and started mindstorming about some possible ways to find out. This post is about one idea I had to test for this and the results I found. Hopefully a cooler and more visual post will come out soon at mediotiempo.com.</p>

<!-- more -->

<p align="justify"> Due to the quality and availability of data the only way possible (that I could think of) was restricting the analysis to only include homicides, this mostly due to the fact that no criminal incidence data in Mexico is dissagregated to the daily level. I considered that the most useful dataset for this task was Mexico's mortality database (<a href="http://www.sinais.salud.gob.mx/basesdedatos/std_defunciones.html" target="_blank">SINAIS</a>) that is released yearly by INEGI. This dataset includes all registered deaths in Mexico since 1998 (and through 2011 as of september 2013)  at the death certificate level. This allows for the creation of daily homicide counts for every city or metropolitan area with first division football. For the game data I scrapped several mexican sport websites that included information about the teams involved, the date, location and results of the game. I was able to compile the complete set of mexican first division football games for the years 2007-2013. After merging the two datasets the results was a 29,234 observations panel dataset that included homidice counts for every day between 2007 and 2011 for the 16 mexican cities that have had first division football teams in this period. Table 1 summarizes the number of observations by day of the week and if they had games or not. Table 2 shows the total number of game days for each of the metropolitan areas. </p>

<img align='center' src="/images/P3A.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<p align="justify"> Firstly I ran a series of test of means to see if there was a significant difference in the number of homicides per metropolitan area on those days in which a local team played either home or away. It seemed that game days had on average 0.6 more homicides than non game days. Similar differences were found when analising different days of the week, where statistically significant differences were found for wednesdays, thursdays, fridays and saturdays. The results for the effect of Home vs Away games were less clear and in general it seems to suggest that the higher number of homicides are more directly related with the local team playing (regardless of location) than with the actual physical game happening within the metropolitan area. Table 3 shows these results. </p>

<img align='center' src="/images/P3B.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<p></p>

<p align="justify"> For the actual econometric model I decided to implement a negative binomial regression model similar to the one described by Cameron and Trivendi (1986), Grootendorst (2002) and used by Rees and Schnepel (2010). In this type of model the number of homicides reported depends on on whether a football game was played by the local team. The following equations describe the chosen econometric models: </p>

<img align='center' src="/images/P3C.jpg" style='WIDTH: 80%; HEIGHT: 80%;margin:auto;display:block;' >

<p></p>

<p align="justify"> Where <i>Game<sub>it</sub></i> is equal to 1 if a local team played, either home or away, on that day and is equal to 0 otherwise. For the second model, <i>Home<sub>it</sub></i> is equal to 1 if a local team played that home that day, <i>Away<sub>it</sub></i> is equal to 1 if the team played away. Finally for the third model, <i>Win<sub>it</sub></i> equals one if the local team won its match that day,  <i>Tie<sub>it</sub></i> is 1 if the team tied and  <i>Lose<sub>it</sub></i> is 1 if the team lost. Where <i><strong>X</strong><sub>it</sub></i> represents the set of controls which include year, month, day of the week and national holiday. Finally <i>exp(&epsilon;<sub>it</sub>)</i> follows a gamma distribution with a mean of 1 and a variance &sigma;. Where if &sigma; equals 0 then the model is reduced to a Poisson count model. Nevertheless the hypothesis &sigma; = 0 was consistently rejected. This was most likely due to over dispersion of the dependent variable (homicides) and therefore a negative binomial model was employed instead of the more common Poisson model. </p>


<table cellspacing="0" align="center" style="border: none;">
  <caption align="top" style="margin-top:0.3em;">Table 4: <strong>Football Games and Homicides</strong></caption>
  <tr>
    <th style="text-align: left; border-top: 2px solid black; border-bottom: 1px solid black; padding-right: 12px;"></th>
    <th style="text-align: left; border-top: 2px solid black; border-bottom: 1px solid black; padding-right: 12px;"><b>Homicides</b></th>
    <th style="text-align: left; border-top: 2px solid black; border-bottom: 1px solid black; padding-right: 12px;"><b>Homicides</b></th>
    <th style="text-align: left; border-top: 2px solid black; border-bottom: 1px solid black; padding-right: 12px;"><b>Homicides</b></th>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">(Intercept)</td>
    <td style="padding-right: 12px; border: none;">-0.77 (0.05)<sup style="vertical-align: 4px;">***</sup></td>
    <td style="padding-right: 12px; border: none;">-0.77 (0.05)<sup style="vertical-align: 4px;">***</sup></td>
    <td style="padding-right: 12px; border: none;">-0.76 (0.05)<sup style="vertical-align: 4px;">***</sup></td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Game (Yes)</td>
    <td style="padding-right: 12px; border: none;">0.36 (0.05)<sup style="vertical-align: 4px;">***</sup></td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;"></td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Home Game</td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;">0.38 (0.06)<sup style="vertical-align: 4px;">***</sup></td>
    <td style="padding-right: 12px; border: none;"></td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Away Game</td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;">0.34 (0.06)<sup style="vertical-align: 4px;">***</sup></td>
    <td style="padding-right: 12px; border: none;"></td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Win</td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;">0.53 (0.09)<sup style="vertical-align: 4px;">***</sup></td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Tie</td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;">0.41 (0.11)<sup style="vertical-align: 4px;">***</sup></td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Lose</td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;"></td>
    <td style="padding-right: 12px; border: none;">0.34 (0.12)<sup style="vertical-align: 4px;">**</sup></td>
  </tr>
  <tr>
    <td style="border-top: 1px solid black;">AIC</td>
    <td style="border-top: 1px solid black;">80858.16</td>
    <td style="border-top: 1px solid black;">80828.64</td>
    <td style="border-top: 1px solid black;">80858.92</td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">BIC</td>
    <td style="padding-right: 12px; border: none;">81056.96</td>
    <td style="padding-right: 12px; border: none;">81035.71</td>
    <td style="padding-right: 12px; border: none;">81074.28</td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Log Likelihood</td>
    <td style="padding-right: 12px; border: none;">-40405.08</td>
    <td style="padding-right: 12px; border: none;">-40389.32</td>
    <td style="padding-right: 12px; border: none;">-40403.46</td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;">Deviance</td>
    <td style="padding-right: 12px; border: none;">21806.34</td>
    <td style="padding-right: 12px; border: none;">21813.94</td>
    <td style="padding-right: 12px; border: none;">21809.31</td>
  </tr>
  <tr>
    <td style="border-bottom: 2px solid black;">Num. obs.</td>
    <td style="border-bottom: 2px solid black;">29234</td>
    <td style="border-bottom: 2px solid black;">29234</td>
    <td style="border-bottom: 2px solid black;">29234</td>
  </tr>
  <tr>
    <td style="padding-right: 12px; border: none;" colspan="4"><span style="font-size:0.8em">Notes: Estimated coefficients from a negative binomial regression model are reported. Standard errors are in parentheses. Although not shown, controls for day of the week, month, and year are included. *** p &lt; 0.001, ** p &lt; 0.01, * p &lt; 0.05 </span></td>
  </tr>
</table>

<p></p>

<p align="justify"> The model results seem to show that indeed football games are likely to increase the number of homicides within a metropolitan area. In fact the mere existence of game (either home or away) in which a local team is involved is associated with an enormous 43% increase in the number of homicides (e<sup>0.36</sup>=1.43). A very intuitive find is that the increase in homicides from a home game is higher than the effect of an away game, 46% vs 41% (e<sup>0.38</sup>=1.46 vs e<sup>0.34</sup>=1.41), nevertheless the difference is not as high as we would have thought. This should be a natural result when we think about stadium and post-stadium behavior of some of those who attend the games should easily account for a 5% increase than when the team plays aways from home.  </p>

<p align="justify"> But perhaps the most interesting find is that home wins are associated with much higher homicides increases (70%) than ties (51%) or loses (40%). It seems that when your team loses you are more likely to just go home and sleep it off and maybe when the local team wins you feel like going crazy. </p>

<p align="justify"> The main conclusion here is that football games do matter in terms of violence and crime. Having found significant effects on homicide data it is very likely that these effects are also present for other types of crime such as assasult, vandalism, driving under the influence, public intoxication, etc. Hopefully in the future I'll be able to replicate this exercise using accidental deaths and manslaughter to test for possible effects. </p>

<h3> Thanks for reading!! </h3>

<p align="justify"> PS: The code to replicate will be up on my github is available <a href="https://github.com/EduardoClark/Football-Homicides">here</a>. </p> 

<p align="justify"> PPS: I ran a wide load of robustness checks and model fit tests, you'll be able to see them on my code once it's on my github. Most alterations did not yield significantly different results or better model fits. </p>







