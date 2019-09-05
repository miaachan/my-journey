/* 
        4kyu - Objectify a URL Query String
        https://www.codewars.com/kata/5286d92ec6b5a9045c000087/train/javascript
*/

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    if (!query) return {};
    // Split the queries
    let result = query.split('&').reduce((obj, str) => {
        let [key, val] = str.split('=');
        let path = key.split('.');
        let lastpart = path.pop();

        // sth is pointed to 'obj' object.
        let sth = path.reduce((accu, cur) => {
            // return empty object if that key doesn't exist.
            if (!accu[cur]) accu[cur] = {};
            return accu[cur];
        }, obj)

        // push the [key:val] back to the object, and handle char like '%20' by decoding.
        sth[lastpart] = decodeURIComponent(val);
        return obj;
    }, {})
    return result;
}


const jsonPharse = (key, value) => '{"' + key + '": "' + value + '"}';
const wrapJson = (key, value) => '{"' + key + '":' + value + '}';

var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
    out = {
        'user': {
            'name': {
                'firstname': 'Bob',
                'lastname': 'Smith'
            },
            'favoritecolor': 'Light Blue'
        }
    };
convertQueryToMap(q);