const CHART = document.getElementById("lineChart");
console.log(CHART)


let lineChart = new Chart(CHART, {
	type: 'line',
	data:  {
  labels: [1, 2, 3, 4,5 ,6 ,7],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
  },{
    label: 'My First Dataset',
    data: [25, 29, 40, 81, -96, 5, 90],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(5, 92, 92)',
    tension: 0.1,
  }]
}
});
