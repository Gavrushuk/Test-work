angular.module('test-work')
  .factory('AuthService', ['$http', '$webSql', function($http, $webSql) {

    var db = $webSql.openDatabase('books', '1.0', 'Test DB', 2 * 1024 * 1024);

    db.createTable('users', {
      "id": {
        "type": "INTEGER",
        "null": "NOT NULL",
        "primary": true, 
        "auto_increment": true
      },
      "first_name": {
        "type": "TEXT",
        "null": "NOT NULL"
      },
      "last_name": {
        "type": "TEXT",
        "null": "NOT NULL"
      },
      "login": {
        "type": "TEXT",
        "null": "NOT NULL"
      },
      "password": {
        "type": "TEXT",
        "null": "NOT NULL"
      }
    });

    return {
      getAllUsers: function() {
        return db.selectAll('users');
      },
      
      checkUser: function(login, password) {
        return db.select('users', {
          login: {
            value: login,
            union: 'and'
          },
          password: password
        });
      },
      
      getByUser: function(login) {
        return db.select('users', {login: login})
      },
      
      createUser: function(user) {
        return db.insert('users', user);
      },   

    }

  }]);