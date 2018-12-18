$.ajax({
    url: '/myEndpoint.json',
    success: function ( data, status ) {
      $('ul#log').append('<li>Data Received!</li>');
    }
  });
  $http( '/myEndpoint.json' ).then( function ( response ) {
    $scope.log.push( { msg: 'Data Received!' } );
});

it( 'should add "active" when the route changes', inject(function() {
    var elm = $compile( '<a href="/hello" when-active>Hello</a>' )( $scope );

    $location.path('/not-matching');
    expect( elm.hasClass('active') ).toBeFalsey();

    $location.path( '/hello' );
    expect( elm.hasClass('active') ).toBeTruthy();
}));


.directive( 'whenActive', function ( $location ) {
    return {
        scope: true,
        link: function ( scope, element, attrs ) {
            scope.$on( '$routeChangeSuccess', function () {
                if ( $location.path() == element.attr( 'href' ) ) {
                    element.addClass( 'active' );
                }
                else {
                    element.removeClass( 'active' );
                }
            });
        }
    };
});

.directive( 'myDirective', function () {
    return {
        template: '<a class="btn">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            var on = false;

            $(element).click( function () {
                on = !on;
                $(element).toggleClass('active', on);
            });
        }
    };
});

.directive( 'myDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="toggle()">Toggle me!</a>',
        link: function ( scope, element, attrs ) {
            scope.on = false;

            scope.toggle = function () {
                scope.on = !scope.on;
            };
        }
    };
});