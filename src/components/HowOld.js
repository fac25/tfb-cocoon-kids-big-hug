import styles from '../styles/howOld.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { useContext } from 'react'
import GlobalUserGroup from '../context/GlobalContext'
import { useRouter } from 'next/router';

export default function HowOld({ onClose }) {
    const router = useRouter();
    const { setUserGroup } = useContext(GlobalUserGroup)

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const currentDay = today.getDate();



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

    const handleSubmit = () => {
        let day = parseInt(selectedDay);
        let month = parseInt(selectedMonth);
        let year = parseInt(selectedYear);

        let calculatedAge = currentYear - year;

        if (currentMonth < month || (currentMonth === month && currentDay < day)) {
            calculatedAge--;
        }

        if (calculatedAge > 13) {
            setUserGroup(localStorage.setItem('user-group', "under13"))
        } else {
            setUserGroup(localStorage.setItem('user-group', "over13"))
        }
        router.push('/welcome');
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
                    <div>
                        <div className={styles.text}>Please enter your birth date to continue</div>
                        <div className={styles.text}>We are asking for your age to personalise your experince</div>
                        <div className={styles.text}>WE WANT THE BEST FOR YOU!</div>
                    </div>
                    <div className={styles.selectWrapper}>
                        <select value={selectedDay} onChange={handleDayChange} className={styles.select}>
                            {dayList}
                        </select>
                        <select value={selectedMonth} onChange={handleMonthChange} className={styles.select}>
                            <option value={1}>January</option>
                            <option value={2}>Febuary</option>
                            <option value={3}>March</option>
                            <option value={4}>April</option>
                            <option value={5}>May</option>
                            <option value={6}>June</option>
                            <option value={7}>July</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10}>November</option>
                            <option value={11}>October</option>
                            <option value={12}>December</option>
                        </select>
                        <select value={selectedYear} onChange={handleYearChange} className={styles.select}>
                            {yearList}
                        </select>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <button onClick={handleSubmit} className={styles.buttons}>
                            Contine
                        </button>

                        <button onClick={onClose} className={styles.buttons}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}