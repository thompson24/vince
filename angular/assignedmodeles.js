app.controller('assignedmodel_control', function ($scope, $http) {
    fnsviewrelationuser();
    $scope.relationmodeldata = [];
    function fnsviewrelationuser() {
        $http.get('http://localhost:1337/viewusermodelrelation').success(function (data) {
            $scope.relationmodeldata = data;
        });
    };
    //DELETE USER RELATION
    deleteuserelationlist



    //VIEW WEB FORM
    $scope.openwebform = function (value) {
        document.getElementById("weblistform").style.visibility = "visible";
        document.getElementById("weblistform").style.display = "block";
        document.getElementById("viewmodellist").style.display = "none";
        document.getElementById("downloadlistform").style.display = "none";
        document.getElementById("datalist").style.display = "none";
        

        $http.put('http://localhost:1337/viewfieldsinweb', value).success(function (data) {
            $scope.modelfielddatacontroller = data;
        }, function () {
            alert('Error in adding record');
        });
    }

   //TO DOWNLOAD
    $scope.openwebform = function (value) {
        document.getElementById("downloadlistform").style.visibility = "visible";
        document.getElementById("downloadlistform").style.display = "block";
        document.getElementById("weblistform").style.display = "none";
        document.getElementById("viewmodellist").style.display = "none";
        document.getElementById("datalist").style.display = "none";


        $http.put('http://localhost:1337/downloadlist', value).success(function (data) {
            $scope.modelfielddatacontroller = data;
        }, function () {
            alert('Error in adding record');
        });
    }


    //VIEW DATA LIST
    $scope.openwebform = function (value) {
        document.getElementById("datalist").style.visibility = "visible";
        document.getElementById("datalist").style.display = "block";
        document.getElementById("weblistform").style.display = "none";
        document.getElementById("viewmodellist").style.display = "none";
        document.getElementById("downloadlistform").style.display = "none";


        $http.put('http://localhost:1337/viewdtalst', value).success(function (data) {
            $scope.modelfielddatacontroller = data;
        }, function () {
            alert('Error in adding record');
        });
    }

});


