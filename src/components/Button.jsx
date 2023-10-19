import styled from "styled-components";

const Button = (props) => {
    const { bgColor = "blue", text = "", ...otherProps } = props;
    return (
        <StyleButton style={{backgroundColor : bgColor}} {...otherProps}>
            {text}
        </StyleButton>
    )
}



const StyleButton = styled.button`
    color: #fff;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
`;
export default Button;