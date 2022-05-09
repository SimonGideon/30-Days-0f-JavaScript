let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(){
        console.log(this)
    }
}

let myTodos2 = {
    day: 'Tuesday',
    meetings: 12,
    meetDone: 3,
    addMeeting: function(num){
        this.meetings = this.meetings + num;
    },
    summary: function(){
        return `You have  ${this.meetings} meetings`;
    }

}
myTodos.addMeeting()
myTodos2.addMeeting()
console.log(myTodos.summary())