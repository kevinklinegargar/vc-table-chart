var verifiedOptions = ["Verified","Declared","Estimated"];
var stageOptions = ["Pre-seed","Seed","Series A","Series B","Series C","Growth Stage"];
var vehicleOptions = ["Angels","Super Angels","Accelerators","Corporate Accelerators","VCs","Corporate VCs","Goverment VCs","Venture Debt","Private Equity","SPVs"];
var VCdata = [];

function randomVC(){
    var name = "";
    var stages = [];
    
    // Get a random word length
    var nameWordLength = Math.floor(Math.random() * 4) + 1;
    // Generate a random name
    for(var xx=0;xx < nameWordLength;xx++){
        var randWord = wordList[Math.floor(Math.random() * wordList.length)];
        name += (xx === 0)?randWord:" "+randWord;
    }
    // Get a random numbher of stages
    var stageWordLength = Math.floor(Math.random() * 3) + 1;
    //generate stages
    for(var xx=0;xx < stageWordLength;xx++){
        var randStage = stageOptions[Math.floor(Math.random() * stageOptions.length)];
       
        stages.push(randStage);
    }
    // Generate random verified
    var verified = verifiedOptions[Math.floor(Math.random() * verifiedOptions.length)];
    // Generate random vehicle
    var vehicle = vehicleOptions[Math.floor(Math.random() * vehicleOptions.length)];
    var vc = {
        "name":name,
        "verified":verified,
        "stages":stages,
        "vehicle":vehicle
    }
    return vc;

}
function generateVCdata(length){
    //Generate number of VCs
    var vcdata = [];
    for(var xx = 0 ;xx < length;xx++){
        vcdata.push(randomVC())
    }
    return vcdata;
}
VCdata = generateVCdata(10);
console.log(VCdata);
function generateVerifiedChart(VCdata){
  
    var ctx = document.getElementById("chartVerified").getContext('2d');

    var data = [];
    // Loop all verified options
    for(var yy=0;yy < verifiedOptions.length;yy++){
        var verified = verifiedOptions[yy];
        var total = 0;
        // Count each verified values in VCdata
        for(var xx=0;xx < VCdata.length;xx++){
            var vc = VCdata[xx];
            
            if(vc.verified === verified){
                total++;
            }
        }
        data.push(total); 
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: verifiedOptions,
            datasets: [{
                label: '# of VCs each Verified',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function generateStagesChart(VCdata){
  
    var ctx = document.getElementById("chartStages").getContext('2d');

    var data = [];
    // Loop all stages options
    for(var yy=0;yy < stageOptions.length;yy++){
        var stage = stageOptions[yy];
        var total = 0;
        // Count each stages values in VCdata
        for(var xx=0;xx < VCdata.length;xx++){
            var vc = VCdata[xx];
            
            if(vc.stages.indexOf(stage) > -1){
                total++;
            }
        }
        data.push(total); 
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stageOptions,
            datasets: [{
                label: '# of VCs each Stage',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function generateVehicleChart(VCdata){
  
    var ctx = document.getElementById("chartVehicle").getContext('2d');

    var data = [];
    // Loop all vehicle options
    for(var yy=0;yy < vehicleOptions.length;yy++){
        var vehicle = vehicleOptions[yy];
        var total = 0;
        // Count each vehicle values in VCdata
        for(var xx=0;xx < VCdata.length;xx++){
            var vc = VCdata[xx];
            
            if(vc.vehicle === vehicle){
                total++;
            }
        }
        data.push(total); 
    }

    var myChart = new Chart(ctx, {
        type: 'bar',
        responsive: true,
        maintainAspectRatio: false,
        data: {
            labels: vehicleOptions,
            datasets: [{
                label: '# of VCs each Vehicle',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

generateVerifiedChart(VCdata);
generateStagesChart(VCdata);
generateVehicleChart(VCdata);

