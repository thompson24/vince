app.controller('managerm_control', function ($scope, $http) {
    fnsviewrelationdetails();
    $scope.relationcollection = [];
    $scope.modellist = [];

    //VIEW RELATION MODEL DETAILS
    function fnsviewrelationdetails() {
        $http.get('http://localhost:1337/viewrelation').success(function (data) {
            $scope.relationcollection = data;
        });
    };
    
    // ADD RELATION MODEL
	$scope.addrelationmodels = function (add) {
		document.getElementById("fieldslistadd").style.visibility = "visible";
		document.getElementById("fieldslistadd").style.display = "block";
		document.getElementById("addform").style.visibility = "hidden";
		document.getElementById("viewform").style.visibility = "hidden";
		document.getElementById("detailviewform").style.display = "none";
		document.getElementById("viewform").style.display = "none";
		document.getElementById("addform").style.display = "none";
		$scope.edits = {
			newdatas: []
		};
		$scope.edits.newdatas.push({"modelfilednme": add.relname, "modelfielddesfv": add.reldesc});
        $scope.addvalues = add;
		console.log("Inside add model" + add.relid, add.relname, add.reldesc);
        $http.post('http://localhost:1337/addrelationdes', add).success(function (data) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
        });
    }


    // ADD RELATION MODEL FIELDS
    $scope.addfields = function (modelfld) {
        modelfld.selectedfieldname = [{}];
		for (var i = 0; i < modelfld.selected.length; i++) {
			modelfld.selectedfieldname.push = modelfld.selected[i];
		}
		$scope.addvalues = modelfld;
		console.log("Inside add fields");
		$http.post('http://localhost:1337/addrelationfieldds', modelfld).success(function (data) {
			console.log("Success");
		}, function () {
			alert('Error in adding record');
			});
		window.location = "/relation";
	}


    //VIEW MODEL LIST IN DROPDOWN
    $scope.data = {
        seletedmodel: null,
        availableOptions: $http.get('http://localhost:1337/viewmodellist').success(function (data) {
            $scope.modellist = data;
        })
    };

    //TO VIEW SELECTED MODEL FIELDS IN DROPDOWN
    $scope.changedValue = function (openselected) {
        $http.put('http://localhost:1337/viewselectedfileds', openselected).success(function (data) {
            $scope.fieldlist = data;
            console.log("Success");
        }, function () {
            alert('Error in adding record');
        });
    }

    //SET OF FUNCTION 
    $scope.modulechanged = function (modelfieldselect) {
        $scope.itemList.push(modelfieldselect.fieldname);
    }   
    $scope.moveItem = function (item, from, to) {

        console.log('Move item   Item: ' + item + ' From:: ' + from + ' To:: ' + to);
        //Here from is returned as blank and to as undefined

        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.push(item);
        }
    };
    $scope.moveAll = function (from, to) {

        console.log('Move all  From:: ' + from + ' To:: ' + to);
        //Here from is returned as blank and to as undefined

        angular.forEach(from, function (item) {
            to.push(item);
        });
        from.length = 0;
    };
    $scope.selectedmodels = [];   


    //TO VIEW SELECTED MODELS FIELDS
    $scope.viewfildsmodeldetail = function (value) {
        document.getElementById("selectedfields").style.visibility = "visible";
        document.getElementById("selectedfields").style.display = "block";
        document.getElementById("addform").style.display = "none";
        document.getElementById("viewform").style.display = "none";
        document.getElementById("fieldslistadd").style.display = "none";
        document.getElementById("detailviewform").style.display = "none";
        $http.put('http://localhost:1337/selectedmoflds', value).success(function (data) {
            $scope.selectedrmfields = data;
        }, function () {
            alert('Error in adding record');
        });
    }
    


   //View details
	$scope.viewrelationmodeldetail = function (value) {
		console.log("Update");
        document.getElementById("detailviewform").style.visibility = "visible";
        document.getElementById("detailviewform").style.display = "block";
        document.getElementById("addform").style.display = "none";
		document.getElementById("viewform").style.display = "none";
		document.getElementById("fieldslistadd").style.display = "none";
		$scope.views = {
			samedata: []
		};

        $scope.views.samedata.push({ "uprowkey": value.RowKey._, "uprmodelname": value.relatonname._, "uprmodeldes": value.relationdescription._});
	}

    //CANCEL BUTTON
	$scope.canaddfields = function () {
		window.location = "/relation";
	}
	

    //DELETE RELATION MODEL
    $scope.deleterelationdelel = function (values) {
        console.log("deleted");
        $http.post('http://localhost:1337/deleterelation', values).success(function (data) {
            console.log("Success");
        }, function () {
            alert('Error in adding record');
			});
		window.location = "/relation";
    }

    //TO REMOVE RELATED MODEL FIELDS
    $scope.removefldselec = function (values) {
        console.log("deleted");
        $http.post('http://localhost:1337/removeselfld', values).success(function (data) {
            console.log("Success");

        }, function () {
            alert('Error in adding record');
        });
        window.location = "/relation";
    }
    

    //UPDATE RELATION MODEL DETAILS
	$scope.clickuprelationmodels = function (fedit) {
		fedit.selectedfieldname = [{}];
		for (var j = 0; j < fedit.selecte.length; j++) {
			fedit.selectedfieldname.push = fedit.selecte[j];
		}
		$http.post('http://localhost:1337/updaterelationfields', fedit).success(function (fedit) {

			console.log("Success");
		}, function () {
			alert('Error in adding record');
			});
		window.location = "/relation";
	}
});


