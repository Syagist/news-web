import styled from "styled-components";

export const StyledHome = styled.section`
    padding: 10px 20px;`;

export const StyledTitle = styled.h3`
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 20px;
    text-transform: uppercase;
`;
export const StyledPreferencesWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -10px 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledPreferenceWrapper = styled.div`
    flex: 1;
    padding: 0 10px;
    
    @media (max-width: 768px) {
        margin-bottom: 10px;
        width: 100%;
    }
`;

export const StyledSelectionWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const StyledLabel = styled.label`
    margin-right: 20px;
    
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;
export const StyledCheckBox = styled.input`
    margin-right: 5px;
`;
