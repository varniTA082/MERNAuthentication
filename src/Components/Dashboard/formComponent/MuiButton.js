import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const MuiButton = (props) => {
    const { label, name, variant, value, onChange, ...exist } = props;
    return (
        <Button variant="contained" endIcon={<SendIcon />}>
            Submit
        </Button>
    );
};

export default MuiButton;
