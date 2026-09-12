function runTests (testType)
{

    switch (testType)
    {
        case "smoke":
        console.log("running smoke testing");
         break;
        case "sanity":
        console.log("running smoke testing");
        break;
        case "regression" :
        console.log("Running regression testing");
        break;
        default:
            console.log("Running smoke testing");

    }

}
runTests("sanity")
