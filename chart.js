var data = [4, 8, 15, 16, 23, 42, 39];

function sortNumber(a, b){
	return a - b;
}

data.sort(sortNumber);

var scale = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0,600]);

d3.select(".chart")
	.selectAll("div")
		.data(data)
	.enter().append("div")
		.style("width", function(d){ return scale(d) + "px"; })
		.text(function(d) { return d; });