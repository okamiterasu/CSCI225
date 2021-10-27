"use strict";

// https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi_dis.htm
const BMI_MIN = 10;
const BMI_UNDERWEIGHT = 18.5;
const BMI_NORMAL = 20;
const BMI_OVERWEIGHT = 25;
const BMI_OBESE = 30;
const BMI_MAX = 40;

const element_age = document.getElementById("age");
const element_calculate = document.getElementById("calculate");
const element_height = document.getElementById("height");
const element_meter = document.getElementById("meter");
const element_mii = document.getElementById("mii");
const element_name = document.getElementById("name");
const element_output = document.getElementById("output");
const element_weight = document.getElementById("weight");

meter.min = BMI_MIN
meter.low = BMI_UNDERWEIGHT;
meter.high = BMI_OVERWEIGHT;
meter.optimum = BMI_NORMAL;
meter.max = BMI_OBESE;

element_calculate.addEventListener("click", function()
{
	const name = element_name.value;
	element_output.innerText = "Welcome " + name; 

	element_age.value
	const age = parseInt(element_age.value);
	if (age <= 20)
	{
		element_output.innerText = "Welcome, " + name; 
	}

	const height = parseFloat(element_height.value);
	if (isNaN(height))
	{
		element_output.innerText = "Given height is not a valid number";
		return
	}

	const weight = parseFloat(element_weight.value);
	if (isNaN(weight))
	{
		element_output.innerText = "Given height is not a valid number";
		return
	}

	const bmi = (weight / (height ** 2)) * 703;
	element_meter.value = bmi;
	element_output.innerHTML += "<br/>Your BMI is: <b>" + bmi.toFixed(2) + "</b>";
	const keyframes = [{transform: "scaleX(" + bmi/15 + ")"}]
	element_mii.animate(keyframes, {duration: 2000, easing: "ease", fill: "forwards"});
	if (bmi > BMI_OVERWEIGHT)
	{
		element_output.innerHTML += "<br/>Your BMI is above the recommended range";
		window.open("http://www.nhlbi.nih.gov/health/public/heart/obesity/lose_wt/control.htm");
	}
});