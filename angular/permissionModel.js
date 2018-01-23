app.controller('permission_control', function ($scope, $http) {
    fnsviewpermissiondetails();
    //VIEW USER PERMISSION DETAILS
	function fnsviewpermissiondetails() {
		$http.get('http://localhost:1337/viewpermissions').success(function (data) {
			$scope.userrelationcollection = data;
		});
	};

	//DELETE USER PERMISSION DETAILS
	$scope.deleteuserrelation = function (values) {
		console.log("deleted");
		$http.post('http://localhost:1337/delrelationuser', values).success(function (data) {
			console.log("Success");
		}, function () {
			alert('Error in adding record');
			});
		window.location = "/permission";
	}
    $scope.selecteduserslist = [];   


	//VIEW MODEL LIST IN DROPDOWN
	$scope.data = {
		seletedmodel: null,
		availableOptions: $http.get('http://localhost:1337/viewmodellistper').success(function (data) {
			$scope.modellist = data;
		})
	};

    //VIEW SELECTED MODEL FIELDS LIST IN DROPDOWN
	$scope.data = {
		seletedmodel: null,
		availableOptions: $http.get('http://localhost:1337/viewuserlist').success(function (data) {
			$scope.availableuserslist = data;
		})
	};


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


	//ADD PERIMISSION DETAILS
	$scope.addpermionrelation = function (perfld) {

		perfld.selectedfieldname = [{}];
		for (var i = 0; i < perfld.userselected.length; i++) {
			perfld.selectedfieldname.push = perfld.userselected[i];
		}
		$scope.addvalues = perfld;
		$http.post('http://localhost:1337/addpermissiondata', perfld).success(function (data) {

			console.log("Success");
		}, function () {
			alert('Error in adding record');
			});
		window.location = "/permission";
	}



	//VIEW RELATED MODEL DETAILS
	$scope.viewuserrelation = function (value) {
		console.log("Update");
		document.getElementById("detailviewform").style.visibility = "visible";
		document.getElementById("detailviewform").style.display = "block";
		document.getElementById("addform").style.display = "none";
		document.getElementById("viewform").style.display = "none";
		$scope.views = {
			samedata: []
		};

        $scope.views.samedata.push({ "uppermissionid": value.RowKey._ ,"uppermissionname": value.relationid._});
	}


    //UPDATE PERMISSION MODEL DETAILS
	$scope.clickpermionrelation = function (upperfld) {
		upperfld.selectedfieldname = [{}];
		for (var i = 0; i < upperfld.userselected.length; i++) {
			upperfld.selectedfieldname.push = upperfld.userselected[i];
		}
		$http.post('http://localhost:1337/updatepermissiondata', upperfld).success(function (upperfld) {

			console.log("Success");
		}, function () {
			alert('Error in adding record');
			});
		window.location = "/permission";
	}

    //CANCEL BUTTON
	$scope.canclickpermionrelation = function () {
		window.location = "/permission";
	}
});


