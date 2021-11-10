import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/Layout";
import Table from "../src/components/Table";
import { DatePicker } from "@mui/lab";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <h1>Hi there</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </p>
        <Typography variant="h6" gutterBottom component="div">
          Calorie Budget:{" "}
          <Typography
            variant="h6"
            sx={{ display: "inline-block", color: "green" }}
          >
            940
          </Typography>
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Calorie Limit: {" "}
          <Typography
            variant="h6"
            sx={{ display: "inline-block", color: "red" }}
          >
            2100
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          sx={{ color: "green" }}
        >
          You’re still below the calorie limit for today!
        </Typography>
        {/* <DatePicker></DatePicker> */}
        <Button
          variant="contained"
          sx={{ color: "white", backgroundColor: "blue", marginBottom: "25px" }}
        >
          <AddBoxIcon /> &nbsp; Add Food Entry
        </Button>

        <Table></Table>
      </Layout>
    </div>
  );
};

export default Home;
