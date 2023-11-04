function stay(count, group, day){
    let result = 0;
    if (group == "Students")
    {
        switch(day)
        {
            case "Friday":
                result = count * 8.45; break;
            case "Saturday":
                result = count * 9.8; break;
            case "Sunday":
                result = count * 10.46; break;               
        }
        if (count >= 30)
        {
            result = result * 0.85;
        }
    }
    else if (group == "Business")
    {
        if (count >= 100)
        {
            switch(day)
        {
            case "Friday":
                result = (count-10) * 10.9; break;
            case "Saturday":
                result = (count-10) * 15.6; break;
            case "Sunday":
                result = (count-10) * 16; break;               
        }
        }
        else{
            switch(day)
        {
            case "Friday":
                result = count * 10.9; break;
            case "Saturday":
                result = count * 15.6; break;
            case "Sunday":
                result = count * 16; break;               
        }
        } 
    }
    else if(group == "Regular")
    {
        switch(day)
        {
            case "Friday":
                result = count * 15; break;
            case "Saturday":
                result = count * 20; break;
            case "Sunday":
                result = count * 22.5; break;               
        }
        if (count >= 10 && count <= 20)
        {
            result = result * 0.95;
        }
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}