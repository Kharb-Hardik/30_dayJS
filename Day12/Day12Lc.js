//Q1
var once = function(fn) {
    let tr = false;
    let ahm;
    return function(...args) {
      if (!tr) {
        ahm = fn(...args);
        tr = true;
        return ahm;
      } else {
        return undefined;
      }
    }
  };

  
  //Q2
  /**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        let o = x;
        for(let i = functions.length - 1;i >= 0 ;i--){
            o = functions[i](o)
        }
        return o;
    }
};

