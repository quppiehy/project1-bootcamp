import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NextUIProvider } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import Paper from "@mui/material/Paper/";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Button } from "react-bootstrap";
import TableRow from "@mui/material/TableRow";
import pluscircle from "../images/pluscircle.svg";
import minuscircle from "../images/minuscircle.svg";
import Form from "react-bootstrap/Form";

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "inventory",
      isLoggedIn: true,
      username: "",
      firstTime: true,
      userInventory: {
        incellderm: [
          {
            name: "",
            imgURL: "",
            storageQty: 0,
            reservedQty: 0,
            productPrice: "",
            salePrice: "",
          },
        ],
        radiansome: [
          {
            name: "",
            imgURL: "",
            storageQty: 0,
            reservedQty: 0,
            productPrice: "",
            salePrice: "",
          },
        ],
        botalab: [
          {
            name: "",
            imgURL: "",
            storageQty: 0,
            reservedQty: 0,
            productPrice: "",
            salePrice: "",
          },
        ],
        vitamins: [
          {
            name: "",
            imgURL: "",
            storageQty: 0,
            reservedQty: 0,
            productPrice: "",
            salePrice: "",
          },
        ],
      },
      tableRows: [],
      rowHeader: [
        "Product Image",
        "Product Name",
        "Storage",
        "Reserved",
        "Price",
        "Sale Price",
      ],
      incelldermItemsList: [
        "Active Clean-Up Powder",
        "Vieton Oil Mist",
        "Snow Enzyme Cleanser EX",
        "Calming Balance Gel",
        "Dermatology First Package EX",
        "Active Cream Ex",
        "Aqua Protection Sun Gel",
        "Daily Aqua BB",
        "4D Lustre Cushion",
        "Vieton Multi Stick Balm",
      ],
      incelldermSrcURL: [
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626619/Project1/incellderm_1_fen07v.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626619/Project1/incellderm_2_hccksx.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626619/Project1/incellderm_3_zddqbl.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626620/Project1/incellderm_4_naysjl.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626619/Project1/incellderm_5_cew4tc.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626620/Project1/incellderm_6_llq3an.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626620/Project1/incellderm_7_elsuxy.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626620/Project1/incellderm_8_kez4uk.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626620/Project1/incellderm_9_oa9yy1.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626620/Project1/incellderm_10_wug96s.png",
      ],
      incelldermPrices: [
        "33,000",
        "39,000",
        "27,500",
        "39,000",
        "99,000",
        "66,000",
        "33,000",
        "33,000",
        "60,000",
        "27,500",
      ],
    };
  }

  handleChange = (events) => {
    let { name, value } = events.target;

    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    const { username, currentPage } = this.props;
    const myUsername = JSON.parse(localStorage.getItem(username));
    console.log("I am running in Inventory");
    console.log(username, currentPage);
    if (username !== "") {
      this.setState({
        username: username,
        userInfo: myUsername,
        currentPage: currentPage,
      });
      const inventory = this.createUserInventory();

      const { incelldermItemsList } = this.state;
      console.log(incelldermItemsList);
      const rows = [];
      let currentRow = {};

      for (let i = 0; i < incelldermItemsList.length; i++) {
        currentRow = inventory["incellderm"][i];
        console.log(`CurrentRow is ${currentRow.imgURL}`);
        rows.push(
          this.createData(
            currentRow.imgURL,
            currentRow.name,
            currentRow.storageQty,
            currentRow.reservedQty,
            currentRow.productPrice,
            currentRow.salePrice
          )
        );
      }
      this.setState(
        {
          tableRows: rows,
          userInventory: inventory,
        },
        () => {
          console.log(this.state.tableRows);
          // console.log(this.userInventory["incellderm"][1].name);
        }
      );
    }
  }

  // handleClick = (col,item) => {

  //   this.setState({
  //      userInventory: myUsername,

  //   }, ()=>{console.log(`In HandleClick: ${this.userInventory["Incellderm"][1].url}`)});

  // };

  // initializes stock to 0 if it's user's first time, else get value from local storage
  // returns Obj after getting values
  createUserInventory = () => {
    const { username } = this.props;
    const { incelldermItemsList, incelldermSrcURL, incelldermPrices } =
      this.state;
    const getStorageData = JSON.parse(
      localStorage.getItem(`${username}incellderm`)
    );
    const userInventory = { incellderm: [] };
    if (getStorageData === null) {
      for (let i = 0; i < incelldermItemsList.length; i++) {
        userInventory["incellderm"].push({
          imgURL: incelldermSrcURL[i],
          name: incelldermItemsList[i],
          storageQty: 0,
          reservedQty: 0,
          productPrice: incelldermPrices[i],
          salePrice: incelldermPrices[i],
        });
      }

      const userInventoryString = JSON.stringify(userInventory);
      localStorage.setItem(`${username}incellderm`, userInventoryString);
      this.setState(
        {
          userInventory: userInventory["incellderm"],
        },
        () => {
          console.log(this.state.userInventory);
        }
      );
      return userInventory;
    } else {
      console.log(getStorageData["incellderm"]);
      return getStorageData;
    }
  };

  createData = (
    imgURL,
    name,
    storageQty,
    reservedQty,
    productPrice,
    salePrice
  ) => {
    let obj = {
      imgURL,
      name,
      storageQty,
      reservedQty,
      productPrice,
      salePrice,
    };
    console.log("CreateData is running");
    console.log(obj);
    return obj;
  };

  render() {
    const { tableRows, rowHeader } = this.state;
    return (
      <NextUIProvider>
        <Form>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">
                    <Button
                      type="submit"
                      value="submit"
                      variant="info"
                      size="sm"
                    >
                      Save
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="table_row_header">
                    {rowHeader[0]}
                  </TableCell>
                  <TableCell className="table_row_header">
                    {rowHeader[1]}
                  </TableCell>
                  <TableCell className="table_row_header">
                    {rowHeader[2]}
                  </TableCell>
                  <TableCell className="table_row_header">
                    {rowHeader[3]}
                  </TableCell>
                  <TableCell className="table_row_header">
                    {rowHeader[4]}
                  </TableCell>
                  <TableCell className="table_row_header">
                    {rowHeader[5]}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows.map((tableRows) => (
                  <TableRow
                    key={tableRows.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover={true}
                  >
                    <TableCell component="th" scope="row">
                      <Avatar
                        alt={tableRows.name}
                        src={tableRows.imgURL}
                        squared
                        size="md"
                        bordered
                        color="success"
                        className="img_zoom"
                      />
                    </TableCell>
                    <TableCell align="left">{tableRows.name}</TableCell>
                    <TableCell align="center">
                      <div>{tableRows.storageQty}</div>
                      <div>
                        <Button
                          bsSize="xsmall"
                          className="plus_button"
                          onClick={() =>
                            this.handleClick(`storageQty`, `${tableRows.name}`)
                          }
                        >
                          <img src={minuscircle} alt="minus" height="18px" />
                        </Button>
                        <Button bsSize="xsmall" className="plus_button">
                          <img src={pluscircle} alt="+" height="18px" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div>{tableRows.reservedQty}</div>
                      <div>
                        <Button bsSize="xsmall" className="plus_button">
                          <img src={minuscircle} alt="minus" height="18px" />
                        </Button>
                      </div>
                      <div>
                        <Button bsSize="xsmall" className="plus_button">
                          <img src={pluscircle} alt="+" height="18px" />
                        </Button>
                      </div>
                    </TableCell>

                    <TableCell align="left">{tableRows.productPrice}</TableCell>
                    <TableCell align="left">{tableRows.salePrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Form>
      </NextUIProvider>
    );
  }
}
