function grading(currentMarks, totalMarks) {
    let grade = '';
    let percentage = (currentMarks/totalMarks)*100;
    if (percentage>= 80) {
        grade = "A";        
    }if (percentage>=70) {
        grade = "B";
    }if (percentage>=60) {
        grade = "C";
    } if (percentage>=50) {
        grade = "D";        
    } else {
        grade = "E";
    } 
    return grade;    
}
console.log(grading(50, 500))