//display student results in grades

function studentGrades(num)
{
    if(num>90) return "A";
    else if(num>70 && num<90) return "B";
    else if(num>50 && num<70) return "C";
    else if(num<70) return "Fail";
}

console.log(studentGrades(85));

