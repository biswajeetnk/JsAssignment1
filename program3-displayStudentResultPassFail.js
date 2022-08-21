//display student results. If the number is below 50 then print fail and if the number is above 50 then pass

function studentResult(num)
{
    if(num < 50)
    {
        return "fail"
    }
    else
    {
        return "pass"
    }
}
console.log("The student is : ",studentResult(40))


