import React from 'react';
import {useSelector} from "react-redux";
import {Paper} from "@material-ui/core";


export const GetAvailableRewards = () => {
    const input: any = useSelector(state => state.txReducer.transactions)
    let janPoints = 0
    let febPoints = 0
    let marchPoints = 0
    let aprPoints = 0
    let mayPoints = 0
    let junePoints = 0
    let julyPoints = 0
    let augustPoints = 0
    let sepPoints = 0
    let octPoints = 0
    let novPoints = 0
    let decPoints = 0

    function addToMonthRewards(date, points) {
        switch (date) {
            case 0:
                janPoints = janPoints + points
                return janPoints;
            case 1:
                febPoints = febPoints + points
                return febPoints;
            case 2:
                marchPoints = marchPoints + points
                return marchPoints;
            case 3:
                aprPoints = aprPoints + points
                return aprPoints;
            case 4:
                mayPoints = mayPoints + points
                return mayPoints;
            case 5:
                junePoints = junePoints + points
                return junePoints;
            case 6:
                julyPoints = julyPoints + points
                return julyPoints;
            case 7:
                augustPoints = augustPoints + points
                return augustPoints;
            case 8:
                sepPoints = sepPoints + points
                return sepPoints;
            case 9:
                octPoints = octPoints + points
                return octPoints;
            case 10:
                novPoints = novPoints + points
                return novPoints;
            case 11:
                decPoints = decPoints + points
                return decPoints;
            default:
                return 0;
        }
    }

    input.forEach(it => {
        let d = new Date(it?.date);
        console.log(d.getMonth())
        if (it?.amount > 100) {
            addToMonthRewards(d.getMonth(), (it?.amount - 100) * 2)
        }
        if (it?.amount > 50) {
            addToMonthRewards(d.getMonth(), (it?.amount - 50) * 1)
        }
    })
    let rewardPoints = {
        "January": janPoints,
        "February": febPoints,
        "March": marchPoints,
        "April": aprPoints,
        "May": mayPoints,
        "June": junePoints,
        "July": julyPoints,
        "August": augustPoints,
        "September": sepPoints,
        "October": octPoints,
        "November": novPoints,
        "December": decPoints
    };
    let totalPoints =janPoints+febPoints+marchPoints+aprPoints+mayPoints+junePoints+julyPoints+augustPoints+sepPoints+octPoints+novPoints+decPoints;

    return (
        <div>
            {totalPoints > 0 ? <h1> Total rewards {totalPoints}</h1> : null}
            {rewardPoints.January > 0 ? <h2> January rewards {rewardPoints.January}</h2> : null}
            {rewardPoints.February > 0 ? <h2> February rewards {rewardPoints.February}</h2> : null}
            {rewardPoints.March > 0 ? <h2> March rewards {rewardPoints.March}</h2> : null}
            {rewardPoints.April > 0 ? <h2> April rewards {rewardPoints.April}</h2> : null}
            {rewardPoints.May > 0 ? <h2> May rewards {rewardPoints.May}</h2> : null}
            {rewardPoints.June > 0 ? <h2> June rewards {rewardPoints.June}</h2> : null}
            {rewardPoints.July > 0 ? <h2> July rewards {rewardPoints.July}</h2> : null}
            {rewardPoints.August > 0 ? <h2> August rewards {rewardPoints.August}</h2> : null}
            {rewardPoints.September > 0 ? <h2> September rewards {rewardPoints.September}</h2> : null}
            {rewardPoints.October > 0 ? <h2> October rewards {rewardPoints.October}</h2> : null}
            {rewardPoints.November > 0 ? <h2> November rewards {rewardPoints.November}</h2> : null}
            {rewardPoints.December > 0 ? <h2> December rewards {rewardPoints.December}</h2> : null}
        </div>
    )
}
