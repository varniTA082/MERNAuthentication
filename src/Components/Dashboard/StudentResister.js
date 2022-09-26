import { Grid, makeStyles, Typography, Button, Card, CardMedia, CardActionArea } from "@material-ui/core";
import FormHandling from "./formComponent/FormHandling";
import MuiCheckBox from "./formComponent/MuiCheckBox";
import MuiRadioGroup from "./formComponent/MuiRadioGroup";
import MuiSelectOption from "./formComponent/MuiSelectOption";
import MuiTextField from "./formComponent/MuiTextField";
import MuiButton from "./formComponent/MuiButton";

const useStyle = makeStyles((theme) => ({
  root: {
    "&": {
      margin: theme.spacing(1)
    }
  }
}));

const StudentResister = () => {
  const classes = useStyle();

  const initialValue = {
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    gender: "male",
    department: "",
    agree: false,
    date: new Date()
  };

  const RadioItem = [
    { id: 0, value: "male", label: "Male" },
    { id: 1, value: "female", label: "Female" },
    { id: 2, value: "other", label: "Other" }
  ];

  const DepartmentOptions = [
    { id: 0, value: "Web Developer", title: "Web Developer" },
    { id: 1, value: "Graphic Designer", title: "Graphic Designer" },
    { id: 2, value: "Amazon Affiliate", title: "Amazon Affiliate" },
    { id: 3, value: "SEO Expart", title: "SEO Expart" }
  ];

  const { studentData, handleChange } = FormHandling(initialValue);

  const {
    fullName,
    gender,
    email,
    department,
    phoneNumber,
    city,
    agree,
    date
  } = studentData;
  console.log(agree);
  return (
    <>
      <form autoComplete="off">
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item container xs={12}>
            <Typography variant="h5" align="center">
              Profile details
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={false} sm={1}></Grid>
            <Grid item xs={12} sm={5} className={classes.root}>
              <MuiTextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={fullName}
                onChange={handleChange}
              />
              <MuiTextField
                fullWidth
                label="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <MuiTextField
                fullWidth
                label="Phone number"
                name="phone"
                value={phoneNumber}
                onChange={handleChange}
              />
              <MuiRadioGroup
                row
                label="Gender"
                name="gender"
                value={gender}
                onChange={handleChange}
                RadioItem={RadioItem}
              />
            </Grid>
            <Grid item xs={12} sm={5} className={classes.root}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./a.svg"
                    alt="Profile"
                  />
                  </CardActionArea>
                  </Card>
                  <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  {/* <MuiSelectOption
                label="Choose Department"
                name="department"
                value={department}
                onChange={handleChange}
                DepartmentOptions={DepartmentOptions}
              /> */}
                  {/* <MuiCheckBox
                name="agree"
                value={agree}
                label="Agree with Terms & Conditons"
                onChange={handleChange}
              /> */}
                </Grid>
                <MuiButton />
                <Grid item xs={false} sm={1}></Grid>
            </Grid>
          </Grid>
      </form>
    </>
  );
};

export default StudentResister;
