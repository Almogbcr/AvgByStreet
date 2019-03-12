var studentsData =[
    {
        name: "Avi",
        age: 30,
        address:
            {
                city: "Haifa",
                street: "Herzel"
            },
        grades: [90, 100, 88]
}, {
        name: "Almog",
        age: 25,
        address:
        {
            city: "Hadera",
            street: "Ashfotim"
        },
        grades: [99, 100, 81]
    }, {
        name: "Shira",
        age: 25,
        address:
            {
                city: "Netanya",
                street: "Rines"
            },
        grades: [100, 100, 100]
    },
    {
        name: "Kfir",
        age: 25,
        address:
            {
                city: "Netanya",
                street: "Rines"
            },
        grades: [55, 50, 45]
    }];



function getAvgByStreet(studentArr,stn) {
    studentArr.forEach(function (student) {
        if(student.address.street === stn){
            console.log("Name: " + student.name + " ,City: " + student.address.city + " ,Grades Avg: "  + getAvg(student.grades));
        }
    })
}

getAvgByStreet(studentsData,"Rines");


function getAvg(arr) {
    var sum = 0;
    var mAverage;
    for (var i = 0; i < arr.length ; i++) {
        sum += arr[i];
    }
    mAverage = sum / arr.length;
    return Math.round(mAverage);
}

