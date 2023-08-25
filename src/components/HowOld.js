import styles from '../styles/ExpandedVideo.module.css'
import Image from 'next/image'
import { useState } from 'react';

export default function HowOld({ onClose }) {
    const currentYear = new Date().getFullYear();


    const [selectedDay, setSelectedDay] = useState("1");
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState("1980");


    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleSubmit = () =>{
        console.log({selectedDay},{selectedMonth},{selectedYear})
    }


    const dayList = [];
    const yearList = [];

    for (let day = 1; day <= 31; day++) {
        dayList.push(
            <option key={day} name={day}>
                {day}
            </option>
        );
    }
    for (let year = 1980; year <= currentYear; year++) {
        yearList.push(
            <option key={year} name={year}>
                {year}
            </option>
        );
    }
    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                <Image
                    src={`/assets/img/closebutton.jpg`}
                    alt=''
                    width={20}
                    height={20}
                    onClick={onClose}
                    className={styles.closeButton}
                />
                <div>
                    <div>Please enter your birth date to continue</div>
                    <div>
                        <select value={selectedDay} onChange={handleDayChange}>
                            {dayList}
                        </select>
                        <select value={selectedMonth} onChange={handleMonthChange}>
                            <option>January</option>
                            <option>Febuary</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>November</option>
                            <option>October</option>
                            <option>December</option>
                        </select>
                        <select value={selectedYear} onChange={handleYearChange}>
                            {yearList}
                        </select>
                    </div>
                    <button onClick={handleSubmit}>continue</button>
                    <button onClick={onClose}>cancel</button>
                </div>
            </div>
        </div>
    )
}