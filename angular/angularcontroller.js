app.controller('viewuserap_control', function ($scope, $http) {
    fnsviewuserdetails();
    $scope.userdatacollection = [];
    //VIEW USER LIST
    function fnsviewuserdetails() {
        $http.get('http://localhost:1337/viewuser').success(function (data) {
            $scope.userdatacollection = data;
        });
    };
    
    // Adding NEW USER
    $scope.addstudent = function (student) {
        $scope.addvalues = student;
        console.log("Inside add Users" + student.username, student.firstname);
        $http.post('http://localhost:1337/adduserde', student).success(function (data) {

			console.log("Success");
        }, function () {
            alert('Error in adding record');
			});
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("uname").value = "";
        document.getElementById("focust").value = "";
        document.getElementById("roledw").value = "";
        document.getElementById("usermsg").innerHTML = "User Added";
        window.location = "/managemodel";
	}

    //CANCEL BUTTON
	$scope.canaddstudent = function () {
		window.location = "/managemodel";
	}
	

    //DELETE USER LIST
    $scope.deleteStudent = function (values) {
        console.log("deleted");
        $http.post('http://localhost:1337/deleteuser', values).success(function (data) {
			console.log("Success");
			$window.location.reload();
        }, function () {
            alert('Error in adding record');
			});
		window.location = "/managemodel";
    }
    // UPDATE USER LIST  
    $scope.updateStudent = function (values) {
        console.log("Update");
       
        document.getElementById("detailviewform").style.visibility = "visible";
        document.getElementById("detailviewform").style.display = "block";
        document.getElementById("addform").style.display = "none";
        document.getElementById("viewform").style.display = "none";
        $scope.edits = {
            newdatas: []
        };
          
        $scope.edits.newdatas.push({ "upfirstname": values.Firstname._, "uplastname": values.Lastname._, "upusermanage": values.RowKey._, "uppassmanage": values.Password._, "uproleadd": values.Role._});
    }
    $scope.clickUpdateStudent = function (values) {
           
        $http.post('http://localhost:1337/updateuser', values).success(function (edit) {
                console.log("Success");
            }, function () {
                alert('Error in adding record');
			});
		window.location = "/managemodel";
        
    }  
});


