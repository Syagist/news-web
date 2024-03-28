import React, { useState, useRef, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { RangePickerButton, StyledRangePicker, StyledRangePickerWrapper } from "./StyledRangePicker";
import { formatDate } from "utils/dateUtils";
import useOutsideClick from "hooks/useOutsideClick";

interface IRange {
    onRangeSelected: (start: string, end: string) => void
}

const RangePicker = ({ onRangeSelected }: IRange) => {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'sourceSelection',
    });
    const [rangeVisible, setRangeVisible] = useState(false);
    const pickerRef = useRef<HTMLDivElement>(null);
    useOutsideClick(pickerRef, () => setRangeVisible(false));

    const handleSelect = (ranges: any) => {
        const start = formatDate(ranges.selection.startDate)
        const end = formatDate(ranges.selection.endDate)
        setSelectionRange(ranges.selection);
        onRangeSelected(start, end);
    }

    return (
        <StyledRangePickerWrapper ref={pickerRef}>
            <RangePickerButton onClick={() => { setRangeVisible(!rangeVisible) }}>
                Select Range
            </RangePickerButton>
            {
                rangeVisible &&
                <StyledRangePicker>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                    />
                </StyledRangePicker>
            }
        </StyledRangePickerWrapper>
    );
};

export default RangePicker;
