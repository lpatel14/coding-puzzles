//Given two lists (A and B) of unqiue strings, write a function to determine if A is a subset of B

function isSubset(A, B) {
    //set up hash table with larger string
    let collection = new Map();
    
    for (let i = 0; i<=B.length-1; i++) {
        collection.set(B.charAt(i));
    }
    
    //check if A elements in collection
    for (let j = 0; j<=A.length-1; j++) {
        
        if (collection.has(A.charAt(j)) == true) {
            return true;
        }
    }

    return false;
}

function test_isSubset() {
    let A = 'zxy';
    let B = 'ardvark';
    let C = 'var';
    if (isSubset(A, B) == false && isSubset(C, B) == true){
        return "Test passed!"
    }
    else {
        return "Test failed!"
    }
    
}
console.log(test_isSubset());