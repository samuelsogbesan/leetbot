const parseMessage = (msg) => {
    let args = msg.content.split(" ");
    let argsObject = {};

    // Loop over all arguments
    for(let i=1; i<args.length; i++){
        let tempArgValues = [];

        // Condition to find a valid argument that it begins with two dashes
        if(args[i][0] == '-' && args[i][1] == '-') {
            j = i+1;
            if(j >= args.length){   // If argument is the last parameter
                tempArgValues.push(undefined);
            }

            // Loop over until finding the next argument
            while(j<args.length){
                if(args[j][0] != '-'){
                    tempArgValues.push(args[j]);
                    j++;
                }
                else if(args[j][0] == '-' && tempArgValues.length == 0){
                    tempArgValues.push(undefined);
                    break;
                }
                else if(args[j][0] == '-'){
                    break;
                }
            }
            if(tempArgValues.length == 1){
                argsObject[args[i].substring(2)] = tempArgValues[0];
            }
            else{
                argsObject[args[i].substring(2)] = tempArgValues;
            }
            i=j-1;  // Reset index to begin after all values
        }
    }
    let res = {};
    res[args[0]] = argsObject;      // assign first argument as commandName
    return res;                    // final parsed object
}

module.exports = { parseMessage };