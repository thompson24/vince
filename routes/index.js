exports.login = function (req, res) {
    res.render('./login.html', { title: 'login', year: new Date().getFullYear() });
};

exports.adduser = function (req, res) {
    if (userrole != undefined) {
        res.render('Users', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }
    else {
        res.render('login', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }
};

exports.adduser1 = function (req, res) {
	res.render('Users', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
};


exports.index = function (req, res) {
    if (userrole != undefined) {
        res.render('index', { title: 'panels', year: new Date().getFullYear(), message: 'Your contact page' });
    }
    else {
        res.render('login', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }
};

exports.logout = function (req, res) {
    userrole = undefined;
    res.render('login', { title: 'panels', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.test = function (req, res) {
    res.render('test', { title: 'test', year: new Date().getFullYear(), message: 'Test page' });
};


exports.relation = function (req, res) {
    if (userrole != undefined) {
        res.render('modelrelationship', { title: 'panels', year: new Date().getFullYear(), message: 'Your contact page' });
    }
    else {
        res.render('login', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }

};

exports.models = function (req, res) {
    if (userrole != undefined) {
        res.render('Models', { title: 'panels', year: new Date().getFullYear(), message: 'Your contact page' });
    }
    else {
        res.render('login', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }

};

exports.permission = function (req, res) {
    if (userrole != undefined) {
        res.render('PermissonModel', { title: 'panels', year: new Date().getFullYear(), message: 'Your contact page' });
    }
    else {
        res.render('login', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }
};
exports.usermodel = function (req, res) {
    if (userrole != undefined) {
        res.render('AssignedModules', { title: 'panels', year: new Date().getFullYear(), message: 'Your contact page' });
    }
    else {
        res.render('login', { title: 'general', year: new Date().getFullYear(), message: 'Your application description page' });
    }
};