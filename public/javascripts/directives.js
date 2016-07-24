app.directive("scroll", function ($window) {


    return function(scope, element, attrs) {
        scope.currentScroll = 0;
        scope.prevScroll = 0;
      
        angular.element($window).bind("scroll", function() {
            var Yoff = this.pageYOffset;
            // var moveX = Yoff * .01 - 66 + "%";
            // var shrinkTitle = "-=" + (Yoff * .15) + "em";
            // var shrinkSubTitle = "-=" + (Yoff * .05) + "em";

            // if(Yoff > 220) {
            //   angular.element(".scroll-header").removeClass('vert-closed')
            //   angular.element(".scroll-header").addClass('vert-open-100')
            // }
            // else{
            //   angular.element(".scroll-header").removeClass('vert-open-100')
            //   angular.element(".scroll-header").addClass('vert-closed')
            // }
            // var inViewElement = angular.element(".in-view")
            // elOff = inViewElement.offSet().top;
            console.log(Yoff)
            if(Yoff > 480){
              console.log("in")
              angular.element("#insurance .col5").removeClass('op-0')
            }
            else{
              angular.element("#insurance .col5").addClass('op-0')
            }

            if(Yoff > 1100){
              console.log("in left")
              angular.element("#insurance2 .left").removeClass('left-out')
              angular.element("#insurance2 .left").addClass('left-in')
              angular.element("#insurance2 .right").removeClass('right-out')
              angular.element("#insurance2 .right").addClass('right-in')
            }
            else{
              angular.element("#insurance2 .left").addClass('left-out')
              angular.element("#insurance2 .left").removeClass('left-in')
              angular.element("#insurance2 .right").addClass('right-out')
              angular.element("#insurance2 .right").removeClass('right-in')
            }

            // var oFactorOut = (100/Yoff);
            // scope.styleFadeOut = {'opacity': oFactorOut};
            // // Fade in
            // var oFactorIn = (Yoff/1200);
            // scope.styleFadeIn = {'opacity': oFactorIn};

            scope.$apply();
        });
          
    };
});