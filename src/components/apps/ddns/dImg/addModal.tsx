import { environment } from "../../../../environments/environment";
import { IListImg } from "../../../../interfaces/ddns.interface";
import axiosInstance from "../../../../utils/axios.instance";
import React, { useEffect, useState } from "react";
import { Box, Input, Modal } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { AxiosResponse } from "axios";

interface IAddDeviceProps {
  index: number | null;
  modal: boolean;
  rows: IListImg[];
  setRows: React.Dispatch<React.SetStateAction<IListImg[]>>;
  handleClose: () => void;
}

export default function AddDeviceType({
  index,
  modal,
  rows,
  setRows,
  handleClose,
}: IAddDeviceProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [deviceType, setDeviceType] = useState<string>(
    index !== null ? rows[index].type : ""
  );
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  useEffect(() => {
    setSelectedImage(index !== null ? rows[index].image : "");
    setDeviceType(index !== null ? rows[index].type : "");
  }, [index, rows]);

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeviceType(event.target.value);
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const file: File = event?.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
        } else {
          console.error("Invalid file format");
        }
      };

      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async () => {
    let res: AxiosResponse<any, any>;
    let data = new FormData();
    data.append("type", deviceType);
    if (selectedFile) {
      data.append("image", selectedFile);
    }
    if (index !== null) {
      data.append("uuid", rows[index].uuid);
      res = await axiosInstance.patch(environment.api.ddns_image, data);
    } else {
      res = await axiosInstance.post(environment.api.ddns_image, data);
    }
    if (res && res.status === 201) {
      const newRow: IListImg = {
        image: selectedImage,
        uuid: res.data.uuid,
        type: deviceType,
      };
      if (index) {
        setRows([...rows.slice(0, index), newRow, ...rows.slice(index + 1)]);
      } else {
        setRows([...rows, newRow]);
      }
      handleClose();
    } else {
      throw res.data.error;
    }
  };

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box className="modal-container">
        <h2 id="child-modal-title">
          {index ? `Edit ${index}` : "Add Device Type"}
        </h2>
        <Grid2>
          <Input type="file" onChange={handleImageChange} />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%" }}
            />
          )}
        </Grid2>
        <Grid2>
          <Input
            fullWidth
            placeholder="Device Type"
            value={deviceType}
            onChange={handleTextChange}
          />
        </Grid2>
        <Grid2>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Grid2>
      </Box>
    </Modal>
  );
}
