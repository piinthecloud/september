angular
 .module('app')
 .directive('onSrcError', onSrcError)

 function onSrcError() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onSrcError) {
              attrs.$set('src', attrs.onSrcError);
            }
          });
        }
    }
};
