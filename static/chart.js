var chart = LightweightCharts.createChart(document.getElementById('chart'), {
	width: 1000,
  	height: 500,
	layout: {
		backgroundColor: '#000000',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	priceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
		timeVisible: true,
		secondsVisible: false,
	},

});

var candleSeries = chart.addCandlestickSeries({
	upColor: '#00ff00',
	downColor: '#ff0000',
	borderDownColor: 'rgba(255, 144, 0, 1)',
	borderUpColor: 'rgba(255, 144, 0, 1)',
	wickDownColor: 'rgba(255, 144, 0, 1)',
	wickUpColor: 'rgba(255, 144, 0, 1)',
});
//switch(period){
  //	case "1m":
    //  minValue.setMonth(minValue.getMonth() - 1);
      //break;
    //case "15m":
      //minValue.setMonth(minValue.getMonth() - 15);
      //break;
    //case "1h":
      //minValue.setMonth(minValue.getMonth() - 1);
      //break;
    //default:
    //	minValue = axisXMin;
//	}
//getData();
  //      async function getData(){
    //        const response=await fetch("http://localhost:5001/file");
      //      const data=await response.text();
        //    console.log(data);
          //  for(i=0;i<=data.length;i++)
            //{
              //   console.log(data.lavels);
                // var priceLine = candleSeries.createPriceLine({
                 //price:data.length,
                 //color:'blue',
                 //lineWidth:3,
                 //lineStyle: LightweightCharts.LineStyle.Dotted,
                 //axisLabelVisible: true,
             //});
            //}
        //}






//});


//})();

async function foo() {
  var response = await $.ajax({
  url: 'http://localhost:5001/file'
  })
  return response;
}
 //Execute it like this:
 (async function (){

    var result = await foo()
    console.log(result);
    let data=(result);
    console.log(data.lavels);
    let map
    map= [data.lavels[1],data.lavels[2],data.lavels[0]];
    console.log(map);
    for(i=0;i<=map.length;i++){
          console.log(map[i]);


      var priceLine = candleSeries.createPriceLine({
             price:map[i],
             color:'blue',
             lineWidth:3,
             lineStyle: LightweightCharts.LineStyle.Dotted,
             axisLabelVisible: true,
       });
      //}

    }

    //data.push=(result.data);


    //var map=[result.data.lavels]
            // (result.data.lavels[1]),
             //(result.data.lavels[2])]
      //console.log(map);
      //for(x in map){
        //  console.log(x)
          // for(var i=0;i<x.length;i++){
            //    console.log(x.length)


    //let map =JSON.stringify(result.data);
     //console.log(map);
   //  let lavels={map}
//      for(var i=0;i<map.length;i++){


///           console.log(map[i]);


 //}       //for(var i=0;i<=map.length;i)
       // {




         //var priceLine = candleSeries.createPriceLine({
           //  price:x.length,
             //color:'blue',
             //lineWidth:3,
             //lineStyle: LightweightCharts.LineStyle.Dotted,
             //axisLabelVisible: true,
       //});
      //}
    //}
        //var priceLine = candleSeries.createPriceLine({
          //   price:result.data.lavels[1],
            // color:'blue',
             //lineWidth:3,
             //lineStyle: LightweightCharts.LineStyle.Dotted,
            // axisLabelVisible: true,
       //});
       //var priceLine = candleSeries.createPriceLine({
         //    price:result.data.lavels[2],
           //  color:'blue',
             //lineWidth:3,
             //lineStyle: LightweightCharts.LineStyle.Dotted,
             //axisLabelVisible: true,
       //});

})()


fetch('http://localhost:5001/history')
	.then((r) => r.json())
	.then((response) => {
		console.log(response)

		candleSeries.setData(response);
	})


var binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_15m");


binanceSocket.onmessage = function (event) {
	var message = JSON.parse(event.data);

	var candlestick = message.k;


	console.log(candlestick)





	candleSeries.update({
		time: candlestick.t / 1000,
		open: candlestick.o,
		high: candlestick.h,
		low: candlestick.l,
		close: candlestick.c
	})
}

