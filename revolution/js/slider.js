/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi1,
  tpj;
jQuery(function() {
  tpj = jQuery;
  if(tpj("#rev_slider_1_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  }else{
    revapi1 = tpj("#rev_slider_1_1").show().revolution({
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,992,480",
      gridwidth:"1240,1240,880,520",
      gridheight:"690,690,450,350",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"690,690,450,350",
      responsiveLevels:"1240,1024,992,480",

      disableProgressBar:"on",
      navigation: {
        mouseScrollNavigation:false,
        onHoverStop:false,
        touch: {
          touchenabled:true
        }
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }
  
});


var revapi2,
    tpj;
  jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_2_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
      revapi2 = tpj("#rev_slider_2_1").show().revolution({
        sliderLayout:"fullwidth",
        visibilityLevels:"1240,1024,992,480",
        gridwidth:"1240,1240,880,520",
        gridheight:"795,795,450,350",
        minHeight:"",
        spinner:"spinner0",
        editorheight:"795,768,880,350",
        responsiveLevels:"1240,1024,992,480",
        disableProgressBar:"on",
        navigation: {
          mouseScrollNavigation:false,
          onHoverStop:false,
          touch: {
            touchenabled:true
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });


          
var revapi3,
    tpj;
jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");
    }else{
        revapi3 = tpj("#rev_slider_3_1").show().revolution({
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1240,778,480",
            gridwidth:"1240,1240,778,480",
            gridheight:"705,705,450,350",
            minHeight:"",
            spinner:"spinner0",
            editorheight:"705,768,450,350",
            responsiveLevels:"1240,1240,778,480",
            disableProgressBar:"on",
            navigation: {
                mouseScrollNavigation:false,
                onHoverStop:false,
                touch: {
                    touchenabled:true
                }
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
        });
    }
    
});