import React, {useState} from 'react';
import {StyledDropdown} from './StyledDropdown';
import Select, {SingleValue} from 'react-select';
import {Option} from "interfaces/Ioption";

interface OptionsProps {
    label: string,
    options: Option[],
    onSelected: (option: SingleValue<Option>) => void
}

const Dropdown: React.FC<OptionsProps> = ({label, options, onSelected}) => {
    const [selectedOption, setSelectedOption] = useState<null | Option>(null);

    const handleChange = (selectedOption: SingleValue<Option>) => {
        setSelectedOption(selectedOption);
        onSelected(selectedOption)
    };

    return (
        <StyledDropdown>
            <div>
                <h2>{label}</h2>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder={label}
                />
            </div>
        </StyledDropdown>
    );
}


export default Dropdown;
