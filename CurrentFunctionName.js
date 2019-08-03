/* 
 * Might be useful for log messages. Example:
 * sendToLog(CurrentFunctionName(), "Something went wrong");
 */

function CurrentFunctionName()
{
    var name = CurrentFunctionName.caller.toString();
    name = name.substr('function '.length);
    name = name.substr(0, name.indexOf('('));
    return name;
}