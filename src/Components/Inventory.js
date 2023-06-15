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
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import TablePagination from "@mui/material/TablePagination";

export default class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "inventory",
      isLoggedIn: true,
      username: "",
      firstTime: true,
      brand: this.props,
      userInventory: {},
      tableRows: [],
      currItemsList: [],
      pg: 0,
      rpg: 5,
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

  componentDidMount = () => {
    const { username, brand } = this.props;
    console.log("I am running in Inventory");
    console.log(username, brand);
    //set brand based on page passed in as props
    const itemsList = this.checkItem(brand);
    const inventory = this.createUserInventory();
    console.log(inventory, itemsList);

    this.setState(
      {
        username: username,
        userInventory: inventory,
      },
      () => {
        this.createTableRow(brand, inventory);
        console.log(this.state.userInventory);
      }
    );
  };

  checkItem = (brand) => {
    let itemsList = [];
    console.log(brand);
    if (brand === "incellderm") {
      itemsList = this.state.incelldermItemsList;
      console.log(this.state.incelldermItemsList);
    } else if (brand === "radiansome") {
      itemsList = this.state.radiansomeItemsList;
    } else if (brand === "botalab") {
      itemsList = this.state.botalabItemsList;
    } else if (brand === "vitamins") {
      itemsList = this.state.vitaminsItemsList;
    }
    this.setState(
      {
        currItemsList: itemsList,
      },
      () => {
        console.log(this.state.currItemsList);
      }
    );
    console.log(itemsList);
    return itemsList;
  };

  //handle direct input in text field
  handleChange = (events, col, itemName) => {
    events.preventDefault();
    let { value } = events.target;

    let numbers = /^[0-9]+$/;
    if (value.match(numbers) === null) {
      Swal.fire({
        title: "Error",
        text: `Sorry! Please only enter numbers.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
      return;
    } else {
      const { username, brand } = this.props;
      const { userInventory } = this.state;

      let index = -1;
      for (let i = 0; i < userInventory[brand].length; i++) {
        if (userInventory[brand][i].name === itemName) {
          index = i;
          userInventory[brand][index][col] = value;
        }
      }
      localStorage.setItem(
        `${username}${brand}`,
        JSON.stringify(userInventory)
      );
      this.createTableRow(brand, userInventory);
      this.setState({ userInventory: userInventory });
    }
  };

  //handle click + or - button
  handleClick = (col, itemName, action) => {
    const { username, brand } = this.props;
    const { userInventory } = this.state;

    let index = -1;
    for (let i = 0; i < userInventory[brand].length; i++) {
      if (userInventory[brand][i].name === itemName) {
        index = i;
        if (action === "plus") {
          userInventory[brand][index][col] *= 1;
          userInventory[brand][index][col] += 1;
        } else if (action === "minus" && userInventory[brand][index][col] > 0) {
          userInventory[brand][index][col] *= 1;
          userInventory[brand][index][col] -= 1;
          break;
        } else if (
          action === "minus" &&
          userInventory[brand][index][col] === 0
        ) {
          Swal.fire({
            title: "Error",
            text: `Sorry! You have 0 stock in inventory.`,
            icon: "error",
            timer: 5000,
            confirmButtonText: "OK",
          }).then(function () {
            return;
          });
        }
      }
    }
    localStorage.setItem(`${username}${brand}`, JSON.stringify(userInventory));
    this.createTableRow(brand, userInventory);
    this.setState({
      userInventory: userInventory,
    });
  };

  createTableRow = (brand) => {
    const rows = [];
    let currentRow = {};
    const { currItemsList, userInventory } = this.state;
    const length = currItemsList.length;
    for (let i = 0; i < length; i++) {
      currentRow = userInventory[brand][i];
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
    this.setState({
      tableRows: rows,
    });
  };

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
    const getStorageData = JSON.parse(
      localStorage.getItem(`${username}${brand}`)
    );
    const userInventory = {};
    userInventory[brand] = [];
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
      this.setState({
        userInventory: userInventory,
      });
      return userInventory;
    } else {
      this.setState({
        userInventory: getStorageData,
      });
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
    return obj;
  };

  handleChangePage = (newpage, event) => {
    const { tableRows, rpg, pg } = this.state;
    const count = tableRows.length;
    const totalPages = Math.ceil(count / rpg);
    console.log(`This is total pages in HandlePgChange ${totalPages}`);
    if (pg > 0 && newpage < totalPages) {
      this.setState({ pg: this.pg + 1 });
    } else {
      Swal.fire({
        title: "Error",
        text: `Sorry! There are no more pages left.`,
        icon: "error",
        timer: 5000,
        confirmButtonText: "OK",
      });
    }
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: "",
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rpg: parseInt(event.target.value, 10), setpg: 0 });
  };

  render() {
    const { tableRows, rowHeader } = this.state;
    const { pg, rpg } = this.state;
    return (
      <NextUIProvider>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
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
              {/* {tableRows.map((tableRows) => ( */}
              {tableRows.slice(pg * rpg, pg * rpg + rpg).map((tableRows) => (
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
                    <div className="flex-container">
                      <div className="flex-child">
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          size="small"
                          value={tableRows.storageQty}
                          sx={{
                            width: { sm: 30, md: 30 },
                            "& .MuiInputBase-root": {
                              height: 20,
                              "& input": { textAlign: "center" },
                            },
                          }}
                          onChange={(event) =>
                            this.handleChange(
                              event,
                              `storageQty`,
                              `${tableRows.name}`
                            )
                          }
                          required
                        />
                      </div>
                      <div className="flex-child">
                        <Button
                          className="plus_button"
                          onClick={() =>
                            this.handleClick(
                              `storageQty`,
                              `${tableRows.name}`,
                              "minus"
                            )
                          }
                        >
                          <img src={minuscircle} alt="minus" height="18px" />
                        </Button>
                        <Button
                          className="plus_button"
                          onClick={() =>
                            this.handleClick(
                              `storageQty`,
                              `${tableRows.name}`,
                              "plus"
                            )
                          }
                        >
                          <img src={pluscircle} alt="+" height="18px" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex-container">
                      <div className="flex-child">
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          size="small"
                          value={tableRows.reservedQty}
                          sx={{
                            width: { sm: 30, md: 30 },
                            "& .MuiInputBase-root": {
                              height: 20,
                              "& input": { textAlign: "center" },
                            },
                          }}
                          onChange={(event) =>
                            this.handleChange(
                              event,
                              `reservedQty`,
                              `${tableRows.name}`
                            )
                          }
                          required
                        />
                      </div>
                      <div className="flex-child">
                        <Button
                          className="plus_button"
                          onClick={() =>
                            this.handleClick(
                              `reservedQty`,
                              `${tableRows.name}`,
                              "minus"
                            )
                          }
                        >
                          <img src={minuscircle} alt="minus" height="18px" />
                        </Button>
                        <Button
                          className="plus_button"
                          onClick={() =>
                            this.handleClick(
                              `reservedQty`,
                              `${tableRows.name}`,
                              "plus"
                            )
                          }
                        >
                          <img src={pluscircle} alt="+" height="18px" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell align="left">{tableRows.productPrice}</TableCell>
                  <TableCell align="left">{tableRows.salePrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={tableRows.length}
          rowsPerPage={rpg}
          page={pg}
          onPageChange={(event) => this.handleChangePage(1, event)}
          onRowsPerPageChange={(event) => this.handleChangeRowsPerPage(event)}
        />
      </NextUIProvider>
    );
  }
}
