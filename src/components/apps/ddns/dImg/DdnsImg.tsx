import { environment } from "../../../../environments/environment";
import { IListImg } from "../../../../interfaces/ddns.interface";
import axiosInstance from "../../../../utils/axios.instance";
import TableContainer from "@mui/material/TableContainer";
import React, { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { useNavigate } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import AddDeviceType from "./addModal";
import "./dImg.css";

export default function DdnsImg() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<IListImg[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axiosInstance.get(environment.api.ddns_image);
      if (res && res.status === 200) {
        setRows(res.data);
      } else {
        throw res.data.error;
      }
    };
    fetchImages();
  }, [modal]);

  const handleDelete = async (index: number) => {
    const res = await axiosInstance.delete(environment.api.ddns_image, {
      data: { uuid: rows[index].uuid },
    });
    if (res && res.status === 200) {
      setRows([...rows.slice(0, index), ...rows.slice(index + 1)]);
    } else {
      throw res.data.error;
    }
  };

  function handleOpen(index: number | null = null) {
    setModal(true);
    setSelectedIndex(index);
  }

  function handleClose() {
    setModal(false);
    setSelectedIndex(null);
  }

  return (
    <>
      <Button
        onClick={(_) => {
          navigate(environment.links.ddns);
        }}
      >
        DDns
      </Button>
      <Grid2 container xs={10} xsOffset={1} mt={5}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Img</TableCell>
                <TableCell>uuId</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.uuid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {row.image ? (
                      <img
                        src={row.image}
                        className="table-image"
                        alt={row.uuid}
                      />
                    ) : (
                      <img alt={"default"} />
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.uuid}
                  </TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => handleOpen(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="right">
                  <Button variant="contained" onClick={() => handleOpen()}>
                    +
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
      <AddDeviceType
        index={selectedIndex}
        modal={modal}
        rows={rows}
        setRows={setRows}
        handleClose={handleClose}
      />
    </>
  );
}
