window.onload = function() {
  console.log( "App started" );
  var canvas = document.getElementById( "main" );
  console.log( canvas );

  var context = canvas.getContext( "2d" );
  // The four arguments represent x-position, y-position, width and height. 0,0 is the top left corner.
  // context.fillStyle = "CHOCOLATE";
  // context.fillRect( 10, 10, 50, 50 );

  // context.beginPath();
  // context.moveTo( 175, 225 );
  // context.lineTo( 175, 325 );

  // context.stroke();
  // context.closePath();

  var drawSmiley = function( x, y ) {
    context.beginPath();
    context.arc( x,y,50,0,Math.PI*2,true); // Outer circle
    context.moveTo(x+35,y);
    context.arc(x,y,35,0,Math.PI,false);  // Mouth (clockwise)
    context.moveTo(x-10,x-10);
    context.arc(x-15,x-10,5,0,Math.PI*2,true);  // Left eye
    context.moveTo(x+20,y-10);
    context.arc(x+15,y-10,5,0,Math.PI*2,true);  // Right eye
    context.stroke();
    context.closePath();
  }

  var drawCircle = function( x, y ) {
    context.beginPath();
    context.arc( x , y, 50, 0, 2*Math.PI, false );
    context.stroke();
  }

  // canvas.onclick = function( event ) {
  //   console.log( "clicked", event );
  //   drawSmiley( event.x, event.y );
  // }


  var drawLine = function( event ) {

    var x = JSON.parse( localStorage.getItem("x") ) || 20
    var y = JSON.parse( localStorage.getItem("y") ) || 20

    var endX = x;
    var endY = y;

    console.log( endX );
    console.log( endY );

    context.beginPath();
    context.moveTo( x, y );
    if( y < 500 ) {
      if( event.srcElement.id === "down" ) {
        var endY = y+10
      } 
    } else {
      endY = 500;
      }

    if( y > 10 ) {
      if( event.srcElement.id === "up" ) {
        var endY = y-10
      } 
    } else {
        endY = 1;
      }

    if( x < 800 ) {
      if( event.srcElement.id === "right" ) {
        var endX = x+10
      } 
    } else {
        endX = 800;
      }

    if( event.srcElement.id === "left" ) {
      if( x > 10 ) {
        var endX = x-10
      } else {
        endX = 1;
      } 
    }

    context.lineTo( endX, endY );
    
    context.stroke();
    context.closePath();

    localStorage.setItem( "x", endX );
    localStorage.setItem( "y", endY );
  }

  document.getElementById( "button" ).addEventListener('click', function() {
    drawLine( event );
  } );

}

window.onbeforeunload = function() {
  localStorage.clear();
}