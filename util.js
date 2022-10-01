class util {
    
    static getFirstName(fullname) {
        return fullname.split(' ')[0]
    }
  
    static getLastName(fullname) {
        let nameLength = fullname.split(' ').length
        return fullname.split(' ')[nameLength - 1] // get the very last word
    }
  
}

module.exports = util
