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
import Swal from "sweetalert2";

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
      botalabItemsList: [
        "Deserticola Shampoo",
        "Deserticola Water Treatment",
        "Deserticola Black Shampoo",
        "Deserticola Black Treatment",
      ],
      radiansomeItemsList: [
        "Microfluidizer Essential Toner",
        "Microfluidizer Ampoule",
        "Micofluidizer Cream",
      ],
      radiansomeSrcUrl: [
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626652/Project1/radiansome_2_bkgy0p.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626652/Project1/radiansome_3_qj18w2.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626652/Project1/radiansome_1_cqum06.png",
      ],
      radiansomePrices: ["77,000", "121,000", "99,000"],
      botalabSrcUrl: [
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626670/Project1/botalab_5_fgfnuq.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626670/Project1/botalab_4_kpin0t.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626670/Project1/botalab_6_aedpav.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686626671/Project1/botalab_7_c2dcke.png",
      ],
      botalabPrices: ["36,000", "36,000", "38,500", "38,500"],
      vitaminsItemsList: [
        "Deep Talk Plus",
        "Lifening Beauty Collagen Ampoule",
        "Lifening Active Energy Shot",
        "Lifening Reset Vitamin & Omega 3",
      ],
      vitaminsSrcUrl: [
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686678368/Project1/vitamins_1_xy2cqr.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686678368/Project1/vitamins_2_ha9xj9.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686680487/Project1/vitamins_3_lagmys.png",
        "https://res.cloudinary.com/dh0bqrpee/image/upload/v1686680487/Project1/vitamins_4_xxhana.png",
      ],
      vitaminsPrices: ["150,000", "99,000", "99,000", "88,000"],
    };
  }

  handleChange = (events) => {
    let { name, value } = events.target;

    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    const { username, brand } = this.props;
    const myUsername = JSON.parse(localStorage.getItem(`${username}${brand}`));
    console.log("I am running in Inventory");
    console.log(username, brand);
    //set brand based on page passed in as props
    let itemsList = [];
    if (brand === "incellderm") {
      itemsList = this.state.incelldermItemsList;
    } else if (brand === "radiansome") {
      itemsList = this.state.radiansomeItemsList;
    } else if (brand === "botalab") {
      itemsList = this.state.botalabItemsList;
    } else if (brand === "vitamins") {
      itemsList = this.state.vitaminsItemsList;
    }

    const inventory = this.createUserInventory();
    const self = this;
    //ensure username was passed in
    if (username !== null) {
      this.setState({
        username: username,
      });
      const rows = [];
      let currentRow = {};

      for (let i = 0; i < itemsList.length; i++) {
        currentRow = inventory[brand][i];
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
    } else if (username === null) {
      Swal.fire({
        title: "Error",
        text: "You have not logged in! Please login before you access your inventory.",
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      }).then(function () {
        // Redirect the user
        console.log("User not logged in");
        self.props.handleLogin(self.state.username);
        self.props.page("home");
      });
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
    const { username, brand } = this.props;
    let itemsList = [];
    let srcURL = [];
    let prices = [];
    if (brand === "incellderm") {
      itemsList = this.state.incelldermItemsList;
      srcURL = this.state.incelldermSrcURL;
      prices = this.state.incelldermPrices;
    } else if (brand === "radiansome") {
      itemsList = this.state.radiansomeItemsList;
      srcURL = this.state.radiansomeSrcUrl;
      prices = this.state.radiansomePrices;
    } else if (brand === "botalab") {
      itemsList = this.state.botalabItemsList;
      srcURL = this.state.botalabSrcUrl;
      prices = this.state.botalabPrices;
    } else if (brand === "vitamins") {
      itemsList = this.state.vitaminsItemsList;
      srcURL = this.state.vitaminsSrcUrl;
      prices = this.state.vitaminsPrices;
    }

    console.log(`Items list in create User Inventory ${itemsList}`);
    console.log(srcURL);
    console.log(prices);
    const getStorageData = JSON.parse(
      localStorage.getItem(`${username}${brand}`)
    );
    console.log(getStorageData);
    const userInventory = {};
    userInventory[brand] = [];
    console.log(userInventory);
    if (getStorageData === null) {
      for (let i = 0; i < itemsList.length; i++) {
        userInventory[`${brand}`].push({
          imgURL: srcURL[i],
          name: itemsList[i],
          storageQty: 0,
          reservedQty: 0,
          productPrice: prices[i],
          salePrice: prices[i],
        });
      }

      const userInventoryString = JSON.stringify(userInventory);
      localStorage.setItem(`${username}${brand}`, userInventoryString);
      this.setState(
        {
          userInventory: userInventory[brand],
        },
        () => {
          console.log(this.state.userInventory);
        }
      );
      return userInventory;
    } else {
      console.log(getStorageData[brand]);
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
