var app = angular.module('easyjet', ['ui.router']);

// Single Page App routing setup
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('flights', {
        url: '/', 
        templateUrl: 'templates/list.html',
        controller: 'ResultsController'
    })
    .state('details', {
        url: '/detail/:id',
        templateUrl: 'templates/fulldetails.html',
        controller: 'DetailedFlightController'
    });
    $urlRouterProvider.otherwise('/');
});


// Results list controller
app.controller('ResultsController', function($scope, FlightsService) {

    // Default sort setting
    $scope.order = "flightNumber.number";

    // Using service
    FlightsService.getFlights(function(data){
        
        // Used when ng-repeating
        $scope.flights = {
            'resultsData': data
        }
    });

    // When <a> is ng-click'ed, set flight as the selectedResult in the service
    $scope.selectFlight = function(flight) {
        FlightsService.selectedResult = flight;
    }

});


// Full details controller
app.controller('DetailedFlightController', function($scope, FlightsService) {

    // Gets selectedResult from service and sets its value as a scope variable
    $scope.selectedResult = FlightsService.selectedResult

});


// Service that both controllers use
app.service('FlightsService', function($http) {

    // Callback gets JSON via $http get request and returns it in return object. 
    // Then sets it in flight object as resultsData  
    function getFlights(callback) {
        $http.get('http://ejtestbed.herokuapp.com/flights')
            .then(function(response) {
                return callback(response.data);
            })
            .catch(function(error) {
                console.log("Couldn't get JSON");
            });
    }

    return {
        getFlights: getFlights,
        selectedResult: null
    };

});

/*

[
  {
    "id": "EZ001",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5407
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-06-30T06:40:00",
    "localArrivalTime": "2016-06-30T09:35:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 27.99,
        "valueWithDebitCard": 40.99,
        "valueWithCreditCard": 41.81
      },
      "child": {
        "value": 27.99,
        "valueWithDebitCard": 40.99,
        "valueWithCreditCard": 41.81
      },
      "infant": null
    }
  },
  {
    "id": "EZ002",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5409
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-06-30T08:40:00",
    "localArrivalTime": "2016-06-30T11:45:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 46.99,
        "valueWithDebitCard": 59.99,
        "valueWithCreditCard": 61.19
      },
      "child": {
        "value": 46.99,
        "valueWithDebitCard": 59.99,
        "valueWithCreditCard": 61.19
      },
      "infant": null
    }
  },
  {
    "id": "EZ003",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5415
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-06-30T17:55:00",
    "localArrivalTime": "2016-06-30T20:50:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 38.99,
        "valueWithDebitCard": 51.99,
        "valueWithCreditCard": 53.03
      },
      "child": {
        "value": 38.99,
        "valueWithDebitCard": 51.99,
        "valueWithCreditCard": 53.03
      },
      "infant": null
    }
  },
  {
    "id": "EZ004",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5417
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-06-30T19:55:00",
    "localArrivalTime": "2016-06-30T23:00:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 36.99,
        "valueWithDebitCard": 49.99,
        "valueWithCreditCard": 50.99
      },
      "child": {
        "value": 36.99,
        "valueWithDebitCard": 49.99,
        "valueWithCreditCard": 50.99
      },
      "infant": null
    }
  },
  {
    "id": "EZ005",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5407
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-07-01T06:40:00",
    "localArrivalTime": "2016-07-01T09:35:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 53.99,
        "valueWithDebitCard": 66.99,
        "valueWithCreditCard": 68.33
      },
      "child": {
        "value": 53.99,
        "valueWithDebitCard": 66.99,
        "valueWithCreditCard": 68.33
      },
      "infant": null
    }
  },
  {
    "id": "EZ006",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5409
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-07-01T08:40:00",
    "localArrivalTime": "2016-07-01T11:45:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 74.99,
        "valueWithDebitCard": 87.99,
        "valueWithCreditCard": 89.75
      },
      "child": {
        "value": 74.99,
        "valueWithDebitCard": 87.99,
        "valueWithCreditCard": 89.75
      },
      "infant": null
    }
  },
  {
    "id": "EZ007",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5415
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-07-01T17:55:00",
    "localArrivalTime": "2016-07-01T20:50:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 64.99,
        "valueWithDebitCard": 77.99,
        "valueWithCreditCard": 79.55
      },
      "child": {
        "value": 64.99,
        "valueWithDebitCard": 77.99,
        "valueWithCreditCard": 79.55
      },
      "infant": null
    }
  },
  {
    "id": "EZ008",
    "flightNumber": {
      "carrierCode": "EZY",
      "number": 5417
    },
    "departureAirport": "London Luton (LTN)",
    "departureAirportCode": "LGW",
    "arrivalAirport": "Berlin Schoenefeld (SXF)",
    "arrivalAirportCode": "SXF",
    "depTerminalName": "South Terminal",
    "localDepartureTime": "2016-07-01T19:55:00",
    "localArrivalTime": "2016-07-01T23:00:00",
    "isDisrupted": false,
    "seatsAvailable": 9,
    "prices": {
      "adult": {
        "value": 43.99,
        "valueWithDebitCard": 56.99,
        "valueWithCreditCard": 58.13
      },
      "child": {
        "value": 43.99,
        "valueWithDebitCard": 56.99,
        "valueWithCreditCard": 58.13
      },
      "infant": null
    }
  }
]

*/

