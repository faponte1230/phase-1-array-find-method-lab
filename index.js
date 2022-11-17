function superbowlWin(record){
    for(const index of record)
    if (index.result === "W"){
        return index.year
    }
}


