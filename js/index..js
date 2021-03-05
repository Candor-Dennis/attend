// for staff
let userInputId = document.getElementById("staffId").value
let userInputDate = document.getElementById("staffDate").value


let allStaff = [
        {
            name: "Bolatito",
            id: 1234,
            counter:0
        },

        {
           name: "Cindy", 
           id: 5678,
           counter:0
        },

        {
            name : "Caleb", 
            id: 9012,
           counter:0
        },

        {
            name: "Bose",
            id: 3456,
           counter:0
        },

         {
            name:"Josh",
            id: 7890,
           counter:0
         }

];



    function staffReg() {
        let form = document.forms[0]
        let staffId = document.getElementById("staffId").value;
        let staffDate =  document.getElementById("staffDate").value;
        let idCheck = /^[0-9\s]+$/;
        let dateCheck = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

         // form validation

        if (staffId == "" || staffId.search(idCheck) || staffDate == "") {
            alert("Enter Valid Id and Date");
            return;
        }

        // looping through the items
        for ( let i = 0 ;  i < allStaff.length ; i++) { 
            if (allStaff[i].id == staffId) {
                let newStaffId = {
                    id : allStaff[i].id,
                    name : allStaff[i].name,
                    counter : +allStaff[i].counter + 1,
                    date: allStaff[i].date = staffDate
                };
                allStaff[i] = newStaffId;
                alert("Welcome to work" + " " +  newStaffId.name + " " + " your date is" + " " + newStaffId.date);
            // }else{
            //     for (let  i = 0;   i < allStaff.length; i++) {
            //       if (allStaff[i].date == staffDate) {
            //         alert("You cannot register 2 times")
            //     }return;    
                
            // }  
        }

    }
}
    








// for payment
function payStaff(){
    let info = document.getElementById("paymentGateway");
    let action =  info.classList.remove('d-none')
    let danger = document.getElementById('danger')
    let success = document.getElementById('success')

    if (action = true) {
      console.log("i am visible")
    }

     

}

function makePayment(){
    let checkId = document.getElementById("newStaffId").value
    


    if (checkId == "") {
        alert("Enter valid id")
    }

    for (let i = 0; i < allStaff.length; i++) {
        let success = document.getElementById("success")
        let danger = document.getElementById("danger")
        if (checkId == allStaff[i].id && allStaff[i].counter >= 5 ) {
            alert("you can withdraw");
            success.classList.remove('d-none')
        }else{
             alert("you cannot withdraw");
            danger.classList.remove('d-none')
            success.classList.add('d-none')
        }return;
    }
}