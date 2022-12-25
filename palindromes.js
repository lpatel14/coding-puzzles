//Determine whether an integer is a palindrome

var isPalindrome = function(x) {
    var sNumber = x.toString();

    //start outside and compare ints until middle reached
    var l = 0;
    var r = sNumber.length - 1;
    
    while (l < r) {
        
        if (sNumber.charAt(l) != sNumber.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }

    return true;

}
