module.exports = {

  isEmpty: function (obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
    // return Object.keys(obj).length === 0;
    // return Object.keys(obj).length;
    // return obj;
  }
}
