$(document).ready(function()
{
  var ctx = document.getElementById('my-canvas5').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;
  function progressSim5()
  {
    diff = ((al / 100) * Math.PI*2*10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 10;
    ctx.fillStyle = '#00ff99';
    ctx.strokeStyle = '#00ff99';
    ctx.textAlign = 'center';
    ctx.font="24px Arial";
    ctx.fillText(al+' %', cw*.5, ch*.5+2, cw);
    ctx.beginPath();
    //ctx.arc(35, 35, 30, start, diff/10+start, false); jika 70
    ctx.arc(100, 100, 95, start, diff/10+start, false);
    ctx.stroke();

    if(al >= 70)
    {
      clearTimeout(sim);
    }
    al++;
  }
  var sim = setInterval(progressSim5, 50);
})();
