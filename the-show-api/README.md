
# yourhealth-api

### Installation

1. Pull source code
2. Run #npm#
3. 
```sh
$ npm install
$ brew install mongodb // Install mongodb
$ mkdir -p /data/db // Create mongodb database directory
***Note: Make sure open write access for `data` folder ` and `db` folder
$ mongod // Run mongodb server
$ mongo // *New tab: Start creating and modifying database
 > use yourhealth
 > db.createCollection("patients")
 > db.createCollection("watchers")
```
