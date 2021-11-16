
"use strict";

function monthly_payment(loan_ammount, interest_rate, months)
{
	const monthly_rate = interest_rate / 12;
	const monthly_payment = loan_ammount * ((monthly_rate)/(1 - (1 + monthly_rate)**(-months)));
	return Math.round(monthly_payment * 100) / 100;
}

const calculator_E = document.getElementById("calculator");
const ammount_E = document.getElementById("ammount");
const rate_E = document.getElementById("rate");
const term_E = document.getElementById("term");
const start_month_E = document.getElementById("start_month");
const start_year_E = document.getElementById("start_year");
const show_by_E = document.getElementById("show_by");
const output = document.getElementById("output");
const currency_format = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

function calculate()
{
	let ammount = parseInt(ammount_E.value);
	const rate = parseFloat(rate_E.value) / 100;
	const term = parseInt(term_E.value);
	const start_month = parseInt(start_month_E.value);
	const start_year = parseInt(start_year_E.value);
	const show_by = show_by_E.value;
	const monthly_interest = rate / 12;

	const payment_monthly = monthly_payment(ammount, rate, term * 12);
	
	// Delete any previous table
	output.innerHTML = "";

	for (let i = 0; i < term; i+=1)
	{
		let year_interest = 0;
		let year_principal = 0;
		for (let i = 0; i < 12; i+=1)
		{
			const month_interest = Math.round(ammount * monthly_interest * 100) / 100;
			year_interest += month_interest;
			ammount += ammount * monthly_interest;
			ammount -= payment_monthly;
			year_principal += payment_monthly - month_interest;
		}
		// Year
		const row = document.createElement("tr");
		let cell = document.createElement("td");
		cell.innerText = start_year + i;
		row.appendChild(cell);
		// Interest
		cell = document.createElement("td");
		cell.innerText = currency_format.format(Math.round(year_interest * 100) / 100);
		row.appendChild(cell);
		// Principal
		cell = document.createElement("td");
		cell.innerText = currency_format.format(Math.round(year_principal * 100) / 100);
		row.appendChild(cell);
		// Balance
		cell = document.createElement("td");
		cell.innerText = currency_format.format(Math.round(ammount * 100) / 100);
		row.appendChild(cell);
		output.appendChild(row);
	}

	document.getElementsByTagName("table")[0].style.visibility = "unset"
}

document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("loan").addEventListener("click", function(){
	calculator_E.style.visibility = "unset";
});