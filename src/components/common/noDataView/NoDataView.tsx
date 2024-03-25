import React from 'react';
import {
    StyledNoDataDescription,
    StyledNoDataIconWrapper,
    StyledNoDataTitle,
    StyledNoDataView
} from './StyledNoDataView';
import {ReactComponent as NoDataIcon} from 'assets/icons/no-data.svg';

interface NoDataViewProps {
    title: string;
    description?: string;
}

const NoDataView: React.FC<NoDataViewProps> = ({title, description}) => {
    return (
        <StyledNoDataView>
            <StyledNoDataIconWrapper><NoDataIcon/></StyledNoDataIconWrapper>
            <StyledNoDataTitle>{title}</StyledNoDataTitle>
            {description && <StyledNoDataDescription>{description}</StyledNoDataDescription>}
        </StyledNoDataView>
    );
}


export default NoDataView;
