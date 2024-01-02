 import { OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import { Icon } from "react-feather";

type buttonProps={
    Icon:React.ReactNode;
    tooltip:string;
    type:"icon" | "button";
    variant?:string;
    label?:string;
    href?:string;
    onClick?:() => void;
}
  
  const ButtonComponent = ({Icon,tooltip,type,variant,label,href,onClick}: buttonProps) => {
    return (
      <a
        className="sm-6 cursor-pointer"
        href={href}
        onClick={onClick}
      >
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip" className="position-fixed">
              {tooltip}
            </Tooltip>
          }
        >
          <span>
            {type ==="button"? (
              <Button variant={variant} size="sm" className="text-white">
                {Icon}  {label}
              </Button>
            ) : (
                <>
                {Icon } 
                </>
            )}
          </span>
        </OverlayTrigger>
      </a>
    );
  };
  export default ButtonComponent;
  