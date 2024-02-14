const ImpliedReturns = () => {
    const multiply = (a: number, b: number) => a*b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h3>Implied return</h3>
            fourTimesFive = { multiply(4, 5) }<br/>
            multiply(4, 5) = {fourTimesFive}
        </>
    );
}

export default ImpliedReturns;