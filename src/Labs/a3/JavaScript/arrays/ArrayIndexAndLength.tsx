const ArrayIndexAndLength = () => {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    
    const Length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <>
        <h3>Array Index and Length</h3>
        length1 = {Length1}<br />
        index1 = {index1}<br />
        </>
    );
}
export default ArrayIndexAndLength;