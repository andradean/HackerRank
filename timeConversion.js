function timeConversion(s) {
    const isPM = s.endsWith('PM');
    const timeWithoutSuffix = s.slice(0, 8);
    const hour = parseInt(s.slice(0, 2));
    
    if (isPM && hour !== 12) {
        const convertedHour = hour + 12;
        return `${convertedHour}${timeWithoutSuffix.slice(2)}`;
    } else if (!isPM && hour === 12) {
        return `00${timeWithoutSuffix.slice(2)}`;
    }

    return timeWithoutSuffix;
}

console.log(timeConversion('07:05:45PM'));
