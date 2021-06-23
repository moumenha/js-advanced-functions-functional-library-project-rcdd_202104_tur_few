const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i= 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)
    
      const populatedArray = [];
      for (let i = 0; i < collection.length; i++) {
        populatedArray.push(callback(collection[i]))
      }
      return populatedArray
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)
			if (!acc) {
				acc = newCollection[0]
				newCollection = newCollection.slice(1)
			}

			let len = newCollection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, newCollection[i], newCollection)
			}
			return acc;
    },
    
    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) 
        return collection[i]
      }

      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection);
      
      const filteredArray = [];
      
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]))
          filteredArray.push(collection[i]);
        }
      return filteredArray;
    },
    
    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },
    
    first: function(collection, n) {
      return (n) ? collection.slice(0, n) : collection[0]
    },    
    
    last: function(collection, n) {
      return (n) ? collection.slice(collection.length-n, collection.length) : collection[collection.length-1]
    },
    
    compact: function(collection) {
      if (!(collection instanceof Array));
      
      const compactedArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (!collection[i] == false)
          compactedArray.push(collection[i]);
        }
      return compactedArray
    },
    
    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },
    
    flatten: function(collection, shallow) {
      if (!shallow) {
        return collection.reduce((acc, value) => {
          return (Array.isArray(value)) ? acc.concat(this.flatten(value)) : acc.concat(value)
        }, [])
      } else {
        return collection.reduce((acc, value)=>{
          return Array.isArray(value) ? acc.concat([...value]) : acc.concat(value)
        }, [])
      }
    },
    
    uniq: function(collection, isSorted, callback) {
      if (isSorted) {
        let newArray = []
        for(let i=0; i < collection.length; i++) {
          if (i === 0 || collection[i] !== collection[i-1]) {
            newArray.push(collection[i])
          }
        }
        return newArray
      }else if (callback){
        let callbackArray = collection.map(callback)
        return collection.filter((value, index) => {
          return callbackArray.indexOf(callback(value)) === index
        })
      }else {
        return collection.filter((value, index) => {
          return collection.indexOf(value) === index
        })
      }
    },    
    
    keys: function(object) {
      const keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys
    },

    values: function(object) {
      const values = [];
      for (const key in object) {
        values.push(object[key])
      }
      return values
    },
    
    functions: function(object) {
      const functionArray = [];
      for (const key in object) {
        if (typeof object[key] === 'function') {
          functionArray.push(key)
        }
      }
      return functionArray
    },
  }
})()

fi.libraryMethod()