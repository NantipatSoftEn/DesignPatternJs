/*
Singleton is a special creational design pattern in which only one instance of a class can exist
*/

class Database {
    constructor(data) {
        if (Database.exists) return Database.instance;

        this._data = data;
        Database.instance = this;
        Database.exists = true;
        return this;
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }
}
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo

const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo