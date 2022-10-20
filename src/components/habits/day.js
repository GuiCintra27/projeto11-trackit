export default function Day({ loading, weekday, habitDays, setHabitDays, index }) {

    function check() {
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
        <div disabled={loading ? 'disabled' : null} className={`day` + (habitDays.includes(index) ? ' check' : '')} onClick={check}>{weekday}</div>
    );
}