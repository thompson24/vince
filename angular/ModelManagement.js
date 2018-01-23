app.controller('modelmanage_control', function ($scope, $http) {
    fnsviewuserdetails();
    console.log("Success");
    $scope.modeldatacontroller = [];
    $scope.modelfielddatacontroller = [];
    $scope.addmodelfielddatacontroller = [];

    //VIEW MODEL LIST
    function fnsviewuserdetails() {
        $http.get('http://localhost:1337/viewmodel').success(function (data) {
            $scope.modeldatacontroller = data;
        });
    };

    //ADD EXTRA FIELDS
    $scope.Addextrafields = function (extrafld) {
        document.getElementById("detailviewform").style.visibility = "visible";
        document.getElementById("detailviewform").style.display = "block";
        document.getElementById("viewform").style.display = "none";
        document.getElementById("addform").style.display = "none";
        document.getElementById("editfields").style.display = "none";
        document.getElementById("addnewfield").style.display = "none";

        $scope.nameex = {
            mobnameex: []
        };

        $scope.nameex.mobnameex.push({ "modilextra1": extrafld.modilextra });
    }

    //VIEW SELECTED FIELDS
    $scope.viewfields = function (value) {
		document.getElementById("editfields").style.visibility = "visible";
		document.getElementById("editfields").style.display = "block";
        document.getElementById("viewform").style.display = "none";
        document.getElementById("addform").style.display = "none";
        document.getElementById("detailviewform").style.display = "none";
		document.getElementById("addnewfield").style.display = "none";
        $scope.exadd = {
            moextra: []
		};
        $scope.exadd.moextra.push({ "modilextra": value.modelname._ });
        $http.put('http://localhost:1337/viewmodelfield', value).success(function (data) {
            $scope.modelfielddatacontroller = data;
        }, function () {
            alert('Error in adding record');
        });
    }

     


    // ADD MODELS 
    $scope.addmodel = function (model) {
		
        document.getElementById("addnewfield").style.visibility = "visible";
        document.getElementById("addnewfield").style.display = "block";
        document.getElementById("viewform").style.display = "none";
        document.getElementById("addform").style.display = "none";
        document.getElementById("detailviewform").style.display = "none";
		document.getElementById("editfields").style.display = "none";

        $scope.edits = {
            newdatas: []
        };
		$scope.edits.newdatas.push({ "modelidvalue": model.modelname});
        $scope.addvalues = model;
        console.log("Inside add Users" + model.modelname, model.modeldesc);
        $http.post('http://localhost:1337/addmodel', model).success(function (data) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
            });
        document.getElementById("modelid").value = "";
        document.getElementById("desid").value = "";
        document.getElementById("msg").innerHTML = "Model Added";
    }

    // ADD MODEL FIELDS
    $scope.addmodelfield = function (fldadd) {
        $scope.addvalues = fldadd;
        console.log("Inside add Users" + fldadd.fieldname, fldadd.fieldtype);
        $http.post('http://localhost:1337/addmodelfields', fldadd).success(function (data) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
            });
        document.getElementById("fldnm").value = "";
        document.getElementById("datatype").value = "";
        document.getElementById("fldd").value = "";
        document.getElementById("msg").innerHTML = "Field Added";
    }

    
    //ADD EXTRA FIELDS FOR SELECTED MOEDL
    $scope.extrafldaddetion = function (extrafldty) {
        $scope.addvalues = extrafldty;
        $http.post('http://localhost:1337/addexmodelfields', extrafldty).success(function (data) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
            });
        document.getElementById("fldnm").value = "";
        document.getElementById("datatype").value = "";
        document.getElementById("fldd").value = "";
        document.getElementById("fldmsg").innerHTML = "Field Added";
    }

    //SUBMIT BUTTON
    $scope.submitextrafld = function (extrafldty) {
        window.location = "/models";
    }


    //DELETE MODEL
    $scope.deletemodel = function (value) {
        console.log("deleted");
        $http.post('http://localhost:1337/deletemodel', value).success(function (data) {
            console.log("Success");
            //$scope.fnsviewuserdetails();
        }, function () {
            alert('Error in adding record');
			});
		window.location = "/models";
    }

    //DELETE MODEL FIELDS
    $scope.removefields = function (value) {
        console.log("deleted");
        $http.post('http://localhost:1337/removefields', value).success(function (data) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
            });
        window.location = "/models";
    }

     //SUBMIT BUTTON
    $scope.submitmodel = function () {
        window.location = "/models";
    }

    //CANCEL BUTTON
	$scope.canceladdmodel = function () {
		window.location = "/models";
	}


    //UPDATE SELECTED MODELS FIELDS
    $scope.clickUpdateModel = function (values) {

        $http.post('http://localhost:1337/updatemodel', values).success(function (edit) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
			});
		window.location = "/models";
    }
});


