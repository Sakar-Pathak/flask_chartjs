const CHART = document.getElementById("lineChart");


var chart = new Chart(CHART, {
	type: 'line',
	data:  {
  labels: [1, 2, 3, 4,5 ,6 ,7],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0,
  }]},
    options: {animation: false,}
});


function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

let label =8;

async function yogar(){
data = Math.random()*60;



addData(chart, label, data);

label = label+1;
console.log(label);
}

setInterval(yogar, 10)
