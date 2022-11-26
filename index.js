// code your solution here
function superbowlwin(record){
    let game = record.find((game)=>{
        if(game.result==='w'){
            return true;
        }
    })
    if(game){
        return game.year
    }
}
