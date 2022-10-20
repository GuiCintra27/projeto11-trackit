import { useState } from "react";

export default function Day({ loading, weekday, habitDays, setHabitDays, index }) {
    const [isCheck, setIsCheck] = useState(false);
    function check() {
        setIsCheck(!isCheck);
        if (!habitDays.includes(index)) {
            setHabitDays([...habitDays, index]);
        } else {
            const daysList = habitDays.filter((item) => {
                if (item !== index) {
                    return item;
                } else {
                    return false;
                }
            })
            setHabitDays([...daysList]);
        }
    }

    return (
        <div disabled={loading ? 'disabled' : null} className={`day` + (isCheck ? ' check' : '')} onClick={check}>{weekday}</div>
    );
}