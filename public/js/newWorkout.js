$(document).ready(function(){

    var workouts = $("panel-workouts");

    var day_id;

   //Need to add code to push new days in array
    var workoutTypes = {
        abs: ["Sit-Ups","Reverse Crunches","Sitting Twists","High Crunches","Knee To Elbow Crunches","Plank"],
        arms: ["Barbell Curls","French Press SZ-Bar","Hammer Curls","Tricep Cable Extensions","Dumbbell Incline Curl","Dips"],
        back: ["Deadlifts","Bent Over Barbell Row","Lat Pull Down","Cable Row","Hyperextensions","Pullups"],
        chest:["Bench Press","Incline Dumbell Press","Decline Bench Press Barbell","Incline Dumbbell Flye","Fly with Cable","Pushups"],
        legs: ["Squats","Front Squats","Dumbbell Lunges Walking","Leg Presses","Leg Extension","Leg Curls","Calf Raises"],
        shoulders:["Military Press","Shoulder Press, on Machine","Lateral Raises","Front Raises","Shrugs"]
    }
     
 // Function for creating a new list row for authors
  function createworkoutButton() {
    console.log("Let's Workout");
    var newButton = $("<button>");
 
    for (var i = 0; i < workouts.length; i++) {
 
    .prepend("<button class='dropdown btn-primary btn-lg btn-block'>" + workouts[i] + "</button><br>");
    newButton.attr("value", day_id[i]);
 
    }
  }
 
 createDayButton();
 
 });
// getWorkout();

// function handleWorkout(event){
//     event.preventDefault();
//     if (workoutInput.val().trim().trim()){
//         return;
//     }
//     upsertnewWorkout({
//         name: workout
//         .val()
//         .trim()
//     });
// }

function createrow(workoutsData){
    $.post("api/newWorkout", workoutsData)
        .then(Workouts);
    }

// function createnewWorkoutRow(workoutData){
//     var newWorkout = $("<wrk>");
//     newWorkout.data("workout", workoutData);
//     newWorkout.append("wrk" + workoutData.schedule + "</wrk>");
//     newWorkout.append("<wrk>" + workoutData.Post.length + "</wrk>");
//     return newWorkout;
// }

    function getnewWorkout(){
          $.get("/new_workout.js", function(data){
            res.sendFile(path.(__dirname, "../public/blog.html")
          var day = [];
          for (var i = 0; i < data.length; i++){
             day_id.push(createWorkoutRow(data[i]));
//         }
//         renderWorkoutList(rowsToAdd);
//         workoutInput.val("");
//     });
//     }

// function renderWorkoutList(row){
//     workoutList.children().not(":last").remove();
//     workoutContainer.childres(".alert"),remove();
//     if (row.length) {
//         console.log(rows);
//         workoutList.repend(rows);
//     }
// }
// });

