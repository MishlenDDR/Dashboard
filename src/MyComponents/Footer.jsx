import { Button, Input } from "@chakra-ui/react";
import { LuRefreshCcw } from "react-icons/lu";
import { FiList } from "react-icons/fi";
import "./Footer.css";

const Footer = ({ handleRefresh, InputValue, Conventer, setInputValue }) => {
  return (
    <div className="BottomDisplay">
      <Button
        className="RefreshButton"
        onClick={handleRefresh}
        variant="unstyled"
      >
        <LuRefreshCcw className="Lu" />
      </Button>
      <Input
        className="Input"
        placeholder="Enter any city"
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={Conventer}
      />
      <FiList className="Ti" />
    </div>
  );
};
export default Footer;
