import { useState } from "react";

export default function Day({weekday, habitDays, setHabitDays, index}){
    const [isCheck, setIsCheck] = useState(false);
    function check(){
        setIsCheck(!isCheck);
        setHabitDays([...habitDays, index]);
    }

    return (
        <div className={`day` + (isCheck ? ' check' : '')} onClick={check}>{weekday}</div>
    );
}