import Button from "./Button";
import {StyledDialog} from "./Dialog.styles"

const Dialog = (props) =>{
    const {
    children,
    title = "Title",
    footer,
    onClose = () => null,
    showFooter = true,
    } = props;
    return(
    <StyledDialog>
        <div className="wrapper">
        <div className="content_box">
          <div className="content_box__title">
            {title}
            
          </div>
          {children}

          {showFooter && (
            <div className="content_box__footer">
              <Button bgColor="red" text="Close" onClick={onClose} />
              {footer}
            </div>
          )}
        </div>
      </div>

    </StyledDialog>
    )
}
export default Dialog