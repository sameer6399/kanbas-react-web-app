import AddRemoveDataFromArrays from "./AddingAndRemovingDataFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import JsonStringify from "./JSONStringify";
import MapFunction from "./MapFunction";

const WorkingWithArrays = () => {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];

    return (
        <>
            <h2>Working With Arrays</h2>
            numberArray1 = {numberArray1} <br />
            stringArray1 = {stringArray1} <br />
            variableArray1 = {variableArray1}
            
            <ArrayIndexAndLength/>
            
            <AddRemoveDataFromArrays/>
            
            <ForLoops/>

            <MapFunction/>

            <JsonStringify/>

            <FindFunction/>

            <FindIndex/>

            <FilterFunction/>
        </>
    );

}

export default WorkingWithArrays;