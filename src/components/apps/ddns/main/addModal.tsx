import {
  Box,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { IDdnsDevice, IListImg } from "../../../../interfaces/ddns.interface";
import { environment } from "../../../../environments/environment";
import axiosInstance from "../../../../utils/axios.instance";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { AxiosResponse } from "axios";

const initialType = {
  uuid: "",
  type: "",
  image: "",
};

interface IAddDeviceProps {
  index: number | null;
  modal: boolean;
  devices: IDdnsDevice[];
  types: IListImg[];
  setDevices: React.Dispatch<React.SetStateAction<IDdnsDevice[]>>;
  handleClose: () => void;
}

export default function AddDevice({
  index,
  modal,
  devices,
  types,
  setDevices,
  handleClose,
}: IAddDeviceProps) {
  const [selectedType, setSelectedType] = useState<IListImg>(initialType);
  const [name, setName] = useState<string>(index ? devices[index].name : "");
  const [link, setLink] = useState<string>(index ? devices[index].link : "");
  const [ip, setIp] = useState<string>(index ? devices[index].ip : "");

  const [nameError, setNameError] = useState<boolean>(false);
  const [linkError, setLinkError] = useState<boolean>(false);
  const [ipError, setIpError] = useState<boolean>(false);

  function handleSelect(event: SelectChangeEvent) {
    const selectedObject = types.find(
      (type) => type.type === event.target.value
    );
    if (selectedObject) {
      setSelectedType(selectedObject);
    }
  }

  function isValid(): boolean {
    if (!name) {
      setNameError(true);
    }
    if (!link || !/^(?:(https?|ftp):\/\/)?[^\s/$.?#].[^\s]*$/i.test(link)) {
      setLinkError(true);
    }
    if (!ip || !/^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
      setIpError(true);
    }
    return [nameError, linkError, ipError].every((value) => value);
  }

  const handleSubmit = async () => {
    if (!isValid()) {
      let res: AxiosResponse<any, any>;
      let data = new FormData();
      data.append("image", selectedType.uuid);
      data.append("name", name!);
      data.append("link", link!);
      data.append("ip", ip!);
      if (index !== null) {
        data.append("uuid", devices[index].uuid);
        res = await axiosInstance.put(environment.api.ddns_devices, data);
      } else {
        res = await axiosInstance.post(environment.api.ddns_devices, data);
      }
      if (res && res.status === 201) {
        const newRow: IDdnsDevice = {
          uuid: res.data.uuid,
          image: selectedType,
          name: name,
          link: link,
          ip: ip!,
          status: res.data.status,
          logs: res.data.logs,
        };
        if (index) {
          setDevices([
            ...devices.slice(0, index),
            newRow,
            ...devices.slice(index + 1),
          ]);
        } else {
          setDevices([...devices, newRow]);
        }
        handleClose();
      } else {
        throw res.data.error;
      }
      setSelectedType(initialType);
      setName("");
      setLink("");
      setIp("");
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
        <FormGroup>
          <h2 id="child-modal-title">
            {index ? `Edit ${index}` : "Add Device"}
          </h2>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select
              label="Type"
              value={selectedType.type}
              onChange={(event) => handleSelect(event)}
            >
              {types.map((item, index) => (
                <MenuItem key={index} value={item.type}>
                  {item.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Input
              fullWidth
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onFocus={() => setNameError(false)}
              error={nameError}
            />
          </FormControl>
          <FormControl>
            <Input
              fullWidth
              placeholder="Link"
              value={link}
              onChange={(event) => setLink(event.target.value)}
              onFocus={() => setLinkError(false)}
              error={linkError}
            />
          </FormControl>
          <FormControl>
            <Input
              fullWidth
              placeholder="IP"
              value={ip}
              onChange={(event) => setIp(event.target.value)}
              onFocus={() => setIpError(false)}
              error={ipError}
            />
          </FormControl>
          <FormControl>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </FormControl>
        </FormGroup>
      </Box>
    </Modal>
  );
}
